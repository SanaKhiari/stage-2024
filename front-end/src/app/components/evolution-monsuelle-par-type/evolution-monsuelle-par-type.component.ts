import { Component, OnInit } from '@angular/core';
import { PopulationEvolutionService } from '../../services/population-evolution.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-evolution-monsuelle-par-type',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './evolution-monsuelle-par-type.component.html',
  styleUrl: './evolution-monsuelle-par-type.component.css',
})
export class EvolutionMonsuelleParTypeComponent implements OnInit {
  data: any[] = [];

  annee: number = new Date().getFullYear(); // Utiliser l'année actuelle par défaut
  years: number[] = []; // Liste des années disponibles
  private monthNames: string[] = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ];

  constructor(private populationEvolutionService: PopulationEvolutionService) {}

  ngOnInit(): void {
    this.initializeYears();
    this.loadData();
  }

  initializeYears(): void {
    // Générer une liste d'années (par exemple, de 2000 à l'année actuelle)
    const currentYear = new Date().getFullYear();
    this.years = Array.from({ length: currentYear - 1999 }, (_, i) => 2000 + i);
  }
  loadData(): void {
    this.populationEvolutionService
      .getPopulationEvolutionMensuelle(this.annee)
      .subscribe(
        (data: any[]) => {
          //console.log('Adherent data loading complete', data);

          const result = data.reduce((acc, item) => {
            const mois = this.monthNames[parseInt(item.mois, 10) - 1];
            if (!acc[mois]) {
              acc[mois] = { mois, Personnel: 0, Conjoint: 0, Enfant: 0 };
            }
            acc[mois][item.type] = item.nombreDeNaissances;
            return acc;
          }, {} as { [key: string]: { mois: string; Personnel: number; Conjoint: number; Enfant: number } });

          this.data = Object.values(result);
        },
        (error) => {
          console.error('Erreur lors du chargement des données', error);
        }
      );
  }

  onYearChange(newYear: number): void {
    this.annee = newYear;
    this.loadData();
  }
}
