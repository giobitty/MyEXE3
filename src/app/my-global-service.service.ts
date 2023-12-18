import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Logged } from './login/logged';

@Injectable({
  providedIn: 'root'
})

export class MyGlobalServiceService {
  //gli diamo gli argomenti da salvare
  loggedUser!: Logged;
  //saranno gli user che richiamiamo nei metodi del login
  networkUser: any[] = [];
  
  constructor(private httpClient : HttpClient) { }
}
