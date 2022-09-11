import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


import { CharactersComponent } from './characters.component';
import { CharactersService } from './characters.service';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';


@NgModule({
  declarations: [CharactersComponent, CharacterDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CharactersComponent
      },
      {
        path: ':id',
        component: CharacterDetailsComponent
      }
    ])
  ],
  providers: [CharactersService]
})
export class CharactersModule { }
