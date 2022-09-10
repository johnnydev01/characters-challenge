import { debounceTime, distinctUntilChanged, filter, merge, Observable, switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';
import { Character } from 'src/app/shared/models/character.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  allCharacters$ = this.charactersService.getAllCharacters();
  searchControl = new FormControl('');

  charactersFilter$ = this.searchControl.valueChanges
    .pipe(
      debounceTime(300),
      filter((typedValue) => typedValue.length >=3 || !typedValue.length),
      distinctUntilChanged(),
      switchMap((typedValue) => this.charactersService.getAllCharacters(typedValue))
    )
  characters$ = merge(this.allCharacters$, this.charactersFilter$);

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
  }

}
