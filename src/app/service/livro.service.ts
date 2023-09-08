import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro, LivrosResultado } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private readonly API = 'https://www.googleapis.com/books/v1/volumes'

  constructor(private httpClient: HttpClient) { }

  buscar(valorDigitado: string): Observable<LivrosResultado>{
    const params = new HttpParams().append('q', valorDigitado);
    return this.httpClient.get<LivrosResultado>(this.API, { params });
  }
}
