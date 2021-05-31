import { SignupRequestPayload } from './../signup/signup-request.payload';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {

   }
   signup(signupRequestPayload: SignupRequestPayload): Observable<any> {
    return this.httpClient.post(
        'http://localhost:8080/api/auth/signup',
        signupRequestPayload,
        { responseType: 'text' }
    );
   }
   checkUsername(signupRequestPayload: SignupRequestPayload): Observable<any> {
    return this.httpClient.post(
        'http://localhost:8080/api/auth/check-username',
        signupRequestPayload,
        { responseType: 'text' }
    );
}
checkEmail(signupRequestPayload: SignupRequestPayload): Observable<any> {
  return this.httpClient.post(
      'http://localhost:8080/api/auth/check-email',
      signupRequestPayload,
      { responseType: 'text' }
  );
}
}
