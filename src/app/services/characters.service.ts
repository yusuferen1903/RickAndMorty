import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';
  constructor(private http: HttpClient) { }
  getCharacters(pageNumber: number, perPage: number, status?: string, gender?: string , name?: string , type?: string): Observable<any> {
    let url = `${this.apiUrl}?page=${pageNumber}&per_page=${perPage}`;
    if (status) {
      url += `&status=${status}`;
    }
    if (gender) {
      url += `&gender=${gender}`;
    }
    if (name) {
      url += `&name=${name}`;
    }
    if (type) {
      url += `&species=${type}`;
    }
    return this.http.get<any>(url);
  }

  getCharacterWithId(id:any): Observable<any> {
    let url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }
}
