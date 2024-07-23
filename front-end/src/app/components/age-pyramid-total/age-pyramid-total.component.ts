import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { AgePyramidTotalService } from '../../services/age-pyramid-total.service';

@Component({
  selector: 'app-age-pyramid-total',
  standalone: true,
  templateUrl: './age-pyramid-total.component.html',
  styleUrls: ['./age-pyramid-total.component.css'],
})
export class AgePyramidTotalComponent implements AfterViewInit {
  @ViewChild('agePyramidCanvas')
  agePyramidCanvas!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  constructor(private pyramidAgeService: AgePyramidTotalService) {}

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      import('chart.js').then(({ Chart, registerables }) => {
        Chart.register(...registerables);
        this.fetchPyramidAgeData();
      });
    }
  }

  fetchPyramidAgeData(): void {
    this.pyramidAgeService.getPyramidAgeTotalData().subscribe({
      next: (data: any) => {
        console.log('Data fetched:', data); // Log the data fetched
        const processedData = this.processData(data);
        console.log('Processed data:', processedData); // Log the processed data
        this.createPyramidChart(processedData);
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      },
    });
  }

  processData(data: any[]): {
    labels: string[];
    menData: number[];
    womenData: number[];
  } {
    const labels = [
      '60+',
      '55-59',
      '50-54',
      '45-49',
      '40-44',
      '35-39',
      '30-34',
      '25-29',
      '20-24',
      '15-19',
      '10-14',
      '5-9',
      '0-4',
    ];

    const menData = Array(labels.length).fill(0);
    const womenData = Array(labels.length).fill(0);

    data.forEach((item) => {
      const index = labels.indexOf(item.AGE_GROUP);
      if (index !== -1) {
        if (item.SEXE === 'M') {
          menData[index] = item.TOTAL_COUNT;
        } else if (item.SEXE === 'F') {
          womenData[index] = -item.TOTAL_COUNT; // Make female data negative
        }
      }
    });

    return { labels, menData, womenData };
  }

  createPyramidChart(data: {
    labels: string[];
    menData: number[];
    womenData: number[];
  }): void {
    const ctx = this.agePyramidCanvas.nativeElement.getContext('2d');

    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: [
            {
              label: 'Hommes',
              data: data.menData,
              backgroundColor: '#317AC1',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
            {
              label: 'Femmes',
              data: data.womenData,
              backgroundColor: '#E1A624',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          plugins: {
            legend: {
              position: 'right',
            },
            title: {
              display: true,
              text: 'PYRAMIDE DES AGES DE LA POPULATION TOTALE​',
            },
          },
          scales: {
            x: {
              beginAtZero: true,
              min: -10000,
              max: 10000,
              ticks: {
                stepSize: 1000,
              },
            },
            y: {
              beginAtZero: true,
              stacked: true,
            },
          },
        },
      });
    } else {
      console.error('Canvas context is null');
    }
  }
}
