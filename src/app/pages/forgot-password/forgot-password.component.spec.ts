import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

import { RouterTestingModule } from '@angular/router/testing';

import { ForgotPasswordComponent } from './forgot-password.component';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';

describe(ForgotPasswordComponent.name, () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordComponent ],
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
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
