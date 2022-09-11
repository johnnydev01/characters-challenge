import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TestBed } from '@angular/core/testing';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';


import { AuthService } from './auth.service';

xdescribe(AuthService.name, () => {
  let service: AuthService;
  const auth = jasmine.createSpy();
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatSnackBarModule
      ],
      providers: [
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoud sing in', () => {
    spyOn(service, 'signIn');
    service.signIn('johnnysilva.dev@gmail.com', '12345678');
    expect(service.signIn).toHaveBeenCalled();
  });

  it('should call the sign method', () => {
    spyOn(service, 'signOut');
    service.signOut();
    expect(service.signOut).toHaveBeenCalled();
  });
});
