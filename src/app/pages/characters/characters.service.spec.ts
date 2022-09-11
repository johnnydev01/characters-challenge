import { ComicsMock } from './mock/commics.mock';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { CharactersService } from './characters.service';
import { CharactersMock } from './mock/characters.mock';


const baseUrl = environment.BASE_URL;
const params = environment.PARAMS;

const mockDataCharacters = {
  api: `${baseUrl}/characters${params}&orderBy=name&offset=0&limit=36`,
  data: CharactersMock,
};

const characterId = '1011334';

const mockDataCharacter = {
  api: `${baseUrl}/characters/${characterId}${params}`,
  data: CharactersMock,
}
const mockDataComics = {
  api: `${baseUrl}/characters/${characterId}/comics${params}`,
  data: ComicsMock,
}

describe(CharactersService.name, () => {
  let service: CharactersService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [CharactersService]

    });
    service = TestBed.inject(CharactersService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpController.verify());


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${CharactersService.prototype.getAllCharacters.name} should return characters`, done => {
    service.getAllCharacters().subscribe( character => {
      expect(character[0].name).toBe('3-D Man');
      expect(character[1].name).toBe('A-Bomb (HAS)');
      done();
    });
    httpController.expectOne(mockDataCharacters.api)
      .flush(mockDataCharacters.data);
  });

  it(`#${CharactersService.prototype.getCharacterById.name} should return character by Id`, done => {
    service.getCharacterById(characterId).subscribe( character => {
      expect(character.name).toBe('3-D Man');
      done();
    });
    httpController.expectOne(mockDataCharacter.api)
      .flush(mockDataCharacter.data);
  });

  it(`#${CharactersService.prototype.getComicsByCharacterId.name} should return comics`, done => {
    service.getComicsByCharacterId(characterId).subscribe(comics => {
      expect(comics[0].title).toBe('Marvel Previews (2017)');
      done();
    });
    httpController.expectOne(mockDataComics.api)
      .flush(mockDataComics.data);
  });

});
