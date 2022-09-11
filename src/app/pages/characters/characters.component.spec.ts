import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { CharactersComponent } from './characters.component';

describe(CharactersComponent.name, () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersComponent ],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search characters with name hulk', fakeAsync(() => {
    const app = fixture.debugElement.componentInstance;
    const search: HTMLInputElement  = fixture.debugElement.query(By.css('#searchCharacters')).nativeElement;
    search.value = 'hulk';
    search.dispatchEvent(new Event('input'));
    search.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    tick(300);
    expect(app.searchControl.value).toBe('hulk');
  }));
});
