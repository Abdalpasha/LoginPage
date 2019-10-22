import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient, private _route: Router) { }

  private _loginUrl= 'http://localhost:3000/login'
  private _registerurl= 'http://localhost:3000/registerUser'

  registerUser(user){
    return this._http.post<any>(this._registerurl, user);
  }

  loginUser(user){
    return this._http.post<any>(this._loginUrl, user)
  }

  loggedIn(){
    return !!localStorage.getItem('Token')
  }

  getToken(){
    return localStorage.getItem('Token')
  }

  logout(){
    localStorage.removeItem('Token');
    this._route.navigate(['/login'])
  }
}
