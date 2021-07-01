import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  countRegistroLivro(): Observable<number> {
    const url = `${this.baseUrl}/dashboards/livros`;
    return this.http.get<number>(url);
  }

  countRegistroCategoria(): Observable<number> {
    const url = `${this.baseUrl}/dashboards/categorias`;
    return this.http.get<number>(url);
  }
}
