import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Stat1Component } from './components/stat1/stat1.component';
import { AgePyramidComponent } from './components/age-pyramid/age-pyramid.component';
import { AgePyramidTotalComponent } from './components/age-pyramid-total/age-pyramid-total.component';
import { AvreageAgeComponent } from './components/avreage-age/avreage-age.component';
import { PopulationEvolutionComponent } from './components/population-evolution/population-evolution.component';
import { AdherentParServiceComponent } from './components/adherent-par-service/adherent-par-service.component';
import { EvolutionMonsuelleParTypeComponent } from './components/evolution-monsuelle-par-type/evolution-monsuelle-par-type.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Stat1Component,
    AgePyramidComponent,
    AgePyramidTotalComponent,
    AvreageAgeComponent,
    PopulationEvolutionComponent,
    AdherentParServiceComponent,
    EvolutionMonsuelleParTypeComponent,
    HomePageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'front-end';
}
