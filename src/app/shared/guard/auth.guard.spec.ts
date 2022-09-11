import { TestBed } from '@angular/core/testing';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

import { AuthGuard } from './auth.guard';

describe(AuthGuard.name, () => {
  let guard: AuthGuard;
  let authService: AuthService;
  let router = {
      navigate: jasmine.createSpy('navigate')
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
        {provide: Router, useValue: router}

      ],
      imports: [
        RouterTestingModule,
        MatSnackBarModule
      ]
    });
    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);

  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('be able to hit route when user is logged in', () => {
    const userData: User = {
      uid: '',
      email: 'johnnysilva.dev@gmail.com',
      displayName:'Johnny Silva',
      photoURL: '',
      emailVerified: true,
    };

    localStorage.setItem('user', JSON.stringify(userData));
    expect(guard.canActivate()).toBe(true);
  });
});
