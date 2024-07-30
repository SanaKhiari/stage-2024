import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface PopulationEvolution {
  mois: string;
  nombreDeNaissances: number;

  Type: string;
}

@Injectable({
  providedIn: 'root',
})
export class PopulationEvolutionService {
  private baseUrl = 'http://localhost:3000/population-evolution';

  constructor(private http: HttpClient) {}

  getPopulationEvolution(annee: number): Observable<PopulationEvolution[]> {
    return this.http.get<PopulationEvolution[]>(
      `${this.baseUrl}?annee=${annee}`
    );
  }
  getPopulationEvolutionMensuelle(
    annee: number
  ): Observable<PopulationEvolution[]> {
    return this.http.get<PopulationEvolution[]>(
      `http://localhost:3000/mensuelle?annee=${annee}`
    );
  }
}
