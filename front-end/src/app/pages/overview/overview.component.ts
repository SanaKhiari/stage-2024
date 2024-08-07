import { Component } from '@angular/core';
import { Stat1Component } from '../../components/stat1/stat1.component';
import { EvolutionMonsuelleParTypeComponent } from '../../components/evolution-monsuelle-par-type/evolution-monsuelle-par-type.component';
import { PopulationEvolutionComponent } from '../../components/population-evolution/population-evolution.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    Stat1Component,
    PopulationEvolutionComponent,
    EvolutionMonsuelleParTypeComponent,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent {}
