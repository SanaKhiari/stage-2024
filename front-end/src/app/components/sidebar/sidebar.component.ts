import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Stat1Component } from '../stat1/stat1.component';
import { AgePyramidComponent } from '../age-pyramid/age-pyramid.component';
import { AgePyramidTotalComponent } from '../age-pyramid-total/age-pyramid-total.component';
import { AvreageAgeComponent } from '../avreage-age/avreage-age.component';
import { PopulationEvolutionComponent } from '../population-evolution/population-evolution.component';
import { AdherentParServiceComponent } from '../adherent-par-service/adherent-par-service.component';
import { EvolutionMonsuelleParTypeComponent } from '../evolution-monsuelle-par-type/evolution-monsuelle-par-type.component';
import { HomePageComponent } from '../../pages/home-page/home-page.component';

@Component({
  selector: 'app-sidebar',
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
    RouterLink,
    RouterLinkActive,
    HomePageComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {}
