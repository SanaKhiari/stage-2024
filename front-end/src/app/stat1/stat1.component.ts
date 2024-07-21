import { Component, OnInit } from '@angular/core';
import { Stat1Service } from '../stat1.service';

@Component({
  selector: 'app-stat1',
  standalone: true,
  imports: [],
  templateUrl: './stat1.component.html',
  styleUrls: ['./stat1.component.css'],
})
export class Stat1Component implements OnInit {
  totalPersonnel: number = 0;
  totalFamilies: number = 0;
  totalConjoints: number = 0;
  totalEnfants: number = 0;
  percentagePersonnel: number = 0;
  percentageConjoints: number = 0;
  percentageEnfants: number = 0;

  constructor(private stat1Service: Stat1Service) {}

  ngOnInit(): void {
    this.stat1Service.getTotalPersonnel().subscribe({
      next: (data) => (this.totalPersonnel = data),
      error: (err) => console.error('Error fetching total personnel', err),
    });

    this.stat1Service.getTotalFamilies().subscribe({
      next: (data) => (this.totalFamilies = data),
      error: (err) => console.error('Error fetching total families', err),
    });

    this.stat1Service.getTotalConjoints().subscribe({
      next: (data) => (this.totalConjoints = data),
      error: (err) => console.error('Error fetching total conjoints', err),
    });

    this.stat1Service.getTotalEnfants().subscribe({
      next: (data) => (this.totalEnfants = data),
      error: (err) => console.error('Error fetching total enfants', err),
    });

    this.stat1Service.getPercentagePersonnel().subscribe({
      next: (data) => (this.percentagePersonnel = data),
      error: (err) => console.error('Error fetching percentage personnel', err),
    });

    this.stat1Service.getPercentageConjoints().subscribe({
      next: (data) => (this.percentageConjoints = data),
      error: (err) => console.error('Error fetching percentage conjoints', err),
    });

    this.stat1Service.getPercentageEnfants().subscribe({
      next: (data) => (this.percentageEnfants = data),
      error: (err) => console.error('Error fetching percentage enfants', err),
    });
  }
}
