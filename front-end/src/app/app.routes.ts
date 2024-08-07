import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Stat1Component } from './components/stat1/stat1.component';
import { AgePyramidComponent } from './components/age-pyramid/age-pyramid.component';
import { AgePyramidTotalComponent } from './components/age-pyramid-total/age-pyramid-total.component';
import { AvreageAgeComponent } from './components/avreage-age/avreage-age.component';
import { PopulationEvolutionComponent } from './components/population-evolution/population-evolution.component';
import { AdherentParServiceComponent } from './components/adherent-par-service/adherent-par-service.component';
import { EvolutionMonsuelleParTypeComponent } from './components/evolution-monsuelle-par-type/evolution-monsuelle-par-type.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AgeAnalysisComponent } from './pages/age-analysis/age-analysis.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'stat1', component: Stat1Component },
  { path: 'age-pyramid', component: AgePyramidComponent },
  { path: 'age-pyramid-total', component: AgePyramidTotalComponent },
  { path: 'average-age', component: AvreageAgeComponent },
  { path: 'population-evolution', component: PopulationEvolutionComponent },
  { path: 'adherent-par-service', component: AdherentParServiceComponent },
  { path: 'Over-view-page', component: OverviewComponent },
  { path: 'Age-analysis-page', component: AgeAnalysisComponent },
  // { path: 'navBar', component: NavBarComponent },
  {
    path: 'evolution-monsuelle-par-type',
    component: EvolutionMonsuelleParTypeComponent,
  },
  // { path: '', redirectTo: '/stat1', pathMatch: 'full' }, // Default route
];
