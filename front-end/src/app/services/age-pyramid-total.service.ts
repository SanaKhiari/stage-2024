import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AgePyramidTotalService {
  private baseUrl = 'http://localhost:3000/api/famille/pyramide-des-ages-total'; // Adjust the URL as needed

  constructor(private http: HttpClient) {}

  getPyramidAgeTotalData(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
