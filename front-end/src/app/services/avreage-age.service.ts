import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AvreageAgeService {
  private baseUrl = 'http://localhost:3000/api/famille';

  constructor(private http: HttpClient) {}

  getAvreageAgePersonnelData(): Observable<number> {
    return this.http.get<number>('http://localhost:3000/api/personnel/average');
  }
  getAvreageAgeConjointData(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/avreageConjoint`);
  }
  getAvreageAgeEnfantData(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/avreageEnfant`);
  }
}
