import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { RouterTestingModule } from '@angular/router/testing';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';
import { SignUpComponent } from './sign-up.component';

describe(SignUpComponent.name, () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
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
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
