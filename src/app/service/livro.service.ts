import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private readonly API = 'https://www.googleapis.com/books/v1/volumes'

  constructor(private httpClient: HttpClient) { }

  buscar(valorDigitado: string): Observable<any>{
    const params = new HttpParams().append('q', valorDigitado);
    return this.httpClient.get(this.API, { params });
  }
}
