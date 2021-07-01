import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Livro } from '../model/livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll(categoriaId: string): Observable<Livro[]> {
    const url = `${this.baseUrl}/livros?categoria=${categoriaId}`;
    return this.http.get<Livro[]>(url);
  }

  registrarLivro(categoriaId: string, livro: Livro): Observable<Livro> {
    const url = `${this.baseUrl}/livros?categoria=${categoriaId}`;
    return this.http.post<Livro>(url, livro);
  }
}
