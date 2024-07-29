import {
  Component,
  OnInit,
  PLATFORM_ID,
  Inject,
  AfterViewInit,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  PopulationEvolutionService,
  PopulationEvolution,
} from '../../services/population-evolution.service';
import { Chart, ChartData, ChartOptions } from 'chart.js';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-population-evolution',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './population-evolution.component.html',
  styleUrls: ['./population-evolution.component.css'],
})
export class PopulationEvolutionComponent implements OnInit {
  public lineChartData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Nombre de Naissances',
        fill: false,
        borderColor: '#317AC1',
        tension: 0.1,
      },
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
  };
  isBrowser: boolean;
  selectedYear: number = 2023; // Default year
  chart: Chart<'line'> | undefined;
  months: string[] = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private populationEvolutionService: PopulationEvolutionService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.loadPopulationEvolution(this.selectedYear);
    }
  }

  onYearChange(): void {
    this.loadPopulationEvolution(this.selectedYear);
  }

  loadPopulationEvolution(annee: number): void {
    this.populationEvolutionService
      .getPopulationEvolution(annee)
      .subscribe((data: PopulationEvolution[]) => {
        if (data && data.length) {
          const labels = data.map(
            (item) => this.months[parseInt(item.mois, 10) - 1]
          );
          const chartData = data.map((item) => item.nombreDeNaissances);

          this.updateChart(labels, chartData);
        } else {
          console.log('Aucune donnée à afficher.');
        }
      });
  }

  createChart(): void {
    if (this.isBrowser) {
      const ctx = (
        document.getElementById('MyChart') as HTMLCanvasElement
      ).getContext('2d');
      if (ctx) {
        this.chart = new Chart(ctx, {
          type: 'line',
          data: this.lineChartData,
          options: this.lineChartOptions,
        });
      } else {
        console.error('Failed to acquire chart context.');
      }
    }
  }

  updateChart(labels: string[], data: number[]): void {
    if (this.isBrowser) {
      if (this.chart) {
        this.chart.data.labels = labels;
        this.chart.data.datasets[0].data = data;
        this.chart.update();
      } else {
        // Create the chart if not already created
        this.lineChartData.labels = labels;
        this.lineChartData.datasets[0].data = data;
        this.createChart();
      }
    }
  }
}
