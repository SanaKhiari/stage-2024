import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Stat1Service {
  private apiUrl = 'http://localhost:3000/api/stat1';

  constructor(private http: HttpClient) {}

  getTotalPersonnel(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/totalPersonnel`);
  }

  getTotalFamilies(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/totalFamilies`);
  }

  getTotalConjoints(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/totalConjoints`);
  }

  getTotalEnfants(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/totalEnfants`);
  }

  getPercentagePersonnel(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/percentagePersonnel`);
  }

  getPercentageConjoints(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/percentageConjoints`);
  }

  getPercentageEnfants(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/percentageEnfants`);
  }
}
