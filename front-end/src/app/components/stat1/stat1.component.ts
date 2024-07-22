import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Chart, ChartType, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Stat1Service } from '../../services/stat1.service';

@Component({
  selector: 'app-stat1',
  standalone: true,
  templateUrl: './stat1.component.html',
  styleUrls: ['./stat1.component.css'],
})
export class Stat1Component implements OnInit {
  public pieChartOptions: any = {
    responsive: true,
    plugins: {
      datalabels: {
        display: false, // This will hide the data labels
      },
    },
  };
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';

  constructor(
    private stat1Service: Stat1Service,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.loadStatistics();
  }

  loadStatistics(): void {
    this.stat1Service.getTotalPersonnel().subscribe((personnel) => {
      this.stat1Service.getTotalConjoints().subscribe((conjoints) => {
        this.stat1Service.getTotalEnfants().subscribe((enfants) => {
          this.pieChartLabels = ['Personnel', 'Conjoints', 'Enfants'];
          this.pieChartData = [personnel, conjoints, enfants];
          if (isPlatformBrowser(this.platformId)) {
            this.renderChart();
          }
        });
      });
    });
  }

  renderChart(): void {
    Chart.register(...registerables, ChartDataLabels);

    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: this.pieChartType,
      data: {
        labels: this.pieChartLabels,
        datasets: [
          {
            data: this.pieChartData,
            backgroundColor: ['#317AC1', '#E1A624', '#D4D3DC'], // Custom colors
          },
        ],
      },
      options: this.pieChartOptions,
    });
  }
}
