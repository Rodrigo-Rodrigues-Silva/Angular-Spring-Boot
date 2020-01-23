import { Usuario } from './../usuario';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  private baseUrl = 'http://localhost:8000/api/usuarios';

  constructor(private http: HttpClient) { }

  listarUm(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  criar(usuario: Usuario): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, usuario,{ headers: new HttpHeaders({"Content-type":"application/json"}) });
  }

  alterar(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletar(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  listaTodos(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
