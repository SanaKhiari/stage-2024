import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { PersonnelService } from '../../services/personnel.service';

interface ServiceCount {
  LIBELLE: string;
  TOTAL_COUNT: number;
}

@Component({
  selector: 'app-adherent-par-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adherent-par-service.component.html',
  styleUrls: ['./adherent-par-service.component.css'],
})
export class AdherentParServiceComponent implements OnInit {
  adherentData: ServiceCount[] = [];
  isBrowser: boolean;

  constructor(
    private personnelService: PersonnelService,
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      Chart.register(...registerables); // Register Chart.js components
    }
  }

  ngOnInit(): void {
    this.loadAdherentData();
  }

  loadAdherentData(): void {
    this.personnelService.getTotalAdherentParService().subscribe({
      next: (data: ServiceCount[]) => {
        console.log('Received data:', data);
        this.adherentData = data;
        if (this.isBrowser) {
          setTimeout(() => this.renderChart(), 0); // Delay rendering to ensure canvas is in the DOM
        }
      },
      error: (error) => {
        console.error('Error loading adherent data:', error);
      },
      complete: () => {
        console.log('Adherent data loading complete');
      },
    });
  }

  renderChart(): void {
    console.log('Attempting to render chart...');
    const canvas = this.el.nativeElement.querySelector(
      '#doughnutChart'
    ) as HTMLCanvasElement;
    if (canvas) {
      console.log('Canvas element found:', canvas);
      new Chart(canvas, {
        type: 'doughnut',
        data: {
          labels: this.adherentData.map((item) => item.LIBELLE),
          datasets: [
            {
              data: this.adherentData.map((item) => item.TOTAL_COUNT),
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#E7E9ED',
                '#4BC0C0',
                '#317AC1',
                '#E1A624',
                '#D4D3DC',
                '#AD956B',
                '#2a9d8f',
                '#7AA95C',
                '#E2E9C0',
              ],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'right',
              labels: {
                filter: (legendItem, data) => {
                  return (
                    legendItem.index !== undefined && legendItem.index < 10
                  ); // Show only top 10 items
                },
                font: {
                  size: 12,
                },
              },
            },
            tooltip: {
              callbacks: {
                label: (tooltipItem) =>
                  `${tooltipItem.label}: ${tooltipItem.raw}`,
              },
            },
          },
        },
      });
    } else {
      console.error('Canvas element not found');
    }
  }
}
