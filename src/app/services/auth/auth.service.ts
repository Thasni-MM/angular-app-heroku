import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
const AUTH_API = 'https://missedcall-backend.herokuapp.com/user/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router,private http:HttpClient) {}
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  setData(email:string):void {
    //const jsonData = JSON.stringify(email)
    localStorage.setItem('email', email)
 }
 
 getData():string|null {
    return localStorage.getItem('email')
 }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  
  login({ email, password }: any): Observable<any> {
    return this.http.post(AUTH_API + 'login' , {
      email,
      password
    }, httpOptions);
  }
  register({name, email, password }: any): Observable<any> {
    return this.http.post(AUTH_API + 'signup' , {
      name,
      email,
      password
    }, httpOptions);
  }
}
