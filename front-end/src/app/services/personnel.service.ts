import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface ServiceCount {
  LIBELLE: string;
  TOTAL_COUNT: number;
}

@Injectable({
  providedIn: 'root',
})
export class PersonnelService {
  private baseUrl = 'http://localhost:3000/api/personnel';

  constructor(private http: HttpClient) {}

  getTotalAdherentParService(): Observable<ServiceCount[]> {
    return this.http.get<ServiceCount[]>(`${this.baseUrl}/CountByService`);
  }
}
