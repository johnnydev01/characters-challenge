import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { RouterTestingModule } from '@angular/router/testing';

import { MatSnackBarModule } from '@angular/material/snack-bar';


import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';
import { SignInComponent } from './sign-in.component';

describe(SignInComponent.name, () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInComponent ],
      providers: [
        AuthService,
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase }

      ],
      imports: [
        RouterTestingModule,
        MatSnackBarModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
