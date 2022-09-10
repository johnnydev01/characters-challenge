import { Character } from 'src/app/shared/models/character.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../characters.service';
import { Observable } from 'rxjs';
import { Comic } from 'src/app/shared/models/comics.model';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  characterId: string;
  character$: Observable<Character>;
  comics$: Observable<Comic[]>;

  constructor(private route: ActivatedRoute,
              private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.characterId = this.route.snapshot.paramMap.get('id');
    this.character$ = this.charactersService.getCharacterById(this.characterId);
    this.comics$ = this.charactersService.getComicsByCharacterId(this.characterId);
  }

}
