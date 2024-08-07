import { Component } from '@angular/core';
import { AgePyramidComponent } from '../../components/age-pyramid/age-pyramid.component';
import { AvreageAgeComponent } from '../../components/avreage-age/avreage-age.component';
import { AgePyramidTotalComponent } from '../../components/age-pyramid-total/age-pyramid-total.component';

@Component({
  selector: 'app-age-analysis',
  standalone: true,
  imports: [AgePyramidComponent, AvreageAgeComponent, AgePyramidTotalComponent],
  templateUrl: './age-analysis.component.html',
  styleUrl: './age-analysis.component.css',
})
export class AgeAnalysisComponent {}
