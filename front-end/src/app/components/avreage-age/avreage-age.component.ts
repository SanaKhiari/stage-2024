import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AvreageAgeService } from '../../services/avreage-age.service';

@Component({
  selector: 'app-avreage-age',
  standalone: true,
  imports: [],
  templateUrl: './avreage-age.component.html',
  styleUrl: './avreage-age.component.css',
})
export class AvreageAgeComponent implements OnInit {
  chart: any;

  constructor(private avreageAgeService: AvreageAgeService) {}

  ngOnInit(): void {
    this.loadAverageAges();
  }

  loadAverageAges() {
    Promise.all([
      this.avreageAgeService.getAvreageAgePersonnelData().toPromise(),
      this.avreageAgeService.getAvreageAgeConjointData().toPromise(),
      this.avreageAgeService.getAvreageAgeEnfantData().toPromise(),
    ]).then(([personnelAvgAge, conjointAvgAge, enfantAvgAge]) => {
      this.renderChart(
        personnelAvgAge ?? 0, // Fournir une valeur par défaut de 0 si undefined
        conjointAvgAge ?? 0, // Fournir une valeur par défaut de 0 si undefined
        enfantAvgAge ?? 0 // Fournir une valeur par défaut de 0 si undefined
      );
    });
  }

  renderChart(
    personnelAvgAge: number,
    conjointAvgAge: number,
    enfantAvgAge: number
  ) {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Adherents', 'Enfants', 'Conjoints'],
        datasets: [
          {
            label: 'AGE MOYEN PAR TYPE DE BENEFICIAIRE​',
            data: [personnelAvgAge, enfantAvgAge, conjointAvgAge],
            backgroundColor: ['#E1A624', '#317AC1', '#D4D3DC'],
            borderWidth: 3,
            barThickness: 70,
            //maxBarThickness: 30,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
