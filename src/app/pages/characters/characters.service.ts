import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character } from 'src/app/shared/models/character.model';
import { Comic } from 'src/app/shared/models/comics.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  baseUrl = environment.BASE_URL;
  params = environment.PARAMS;

  constructor(private http: HttpClient) { }


  getAllCharacters(nameStartsWith?: string): Observable<Character[]> {
    const params = nameStartsWith ? new HttpParams().append('nameStartsWith', nameStartsWith) : undefined;
    return this.http.get<Character[]>(`${this.baseUrl}/characters${this.params}&orderBy=name&offset=0&limit=36`, {params} )
      .pipe(
        map(response => response['data'].results)
      );
  }

  getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}/characters/${id}${this.params}`)
    .pipe(
      map(response => response['data'].results[0])
    );;
  }

  getComicsByCharacterId(characterId: string): Observable<Comic[]> {
    return this.http.get<Comic[]>(`${this.baseUrl}/characters/${characterId}/comics${this.params}`)
      .pipe(
        map(response => response['data'].results)
      );
  }

}
