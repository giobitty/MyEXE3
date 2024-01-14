import { Component } from '@angular/core';
import { Utente } from './utente';
import { HttpClient } from '@angular/common/http';
import { HttpServiceService } from './http-service.service';
import { MyGlobalServiceService } from '../my-global-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'Benvenuto nel Login'
  utente: Utente = {nome:"", password:""}; 

  logged: any; 
  networkUsers: any[] = [];
  urlPost: string = 'https://ugobetori.it/_notes/api-test/angular/angular2/login.php';
  urlGet: string = 'https://ugobetori.it/_notes/api-test/angular/angular2/users.php'; 

  constructor(private httpService: HttpServiceService,
    //iniettiamo il globalService creato 
    public myGlobalService: MyGlobalServiceService){}
    
  loginPost() {
    //qui ci si connette
    const datiJSON = {
      nome: this.utente.nome,
      password: this.utente.password,
    }
    const datiStringa = JSON.stringify(datiJSON);
    this.httpService.postData(this.urlPost, datiStringa)
    .subscribe({
        next: (response: any) =>{
          console.log('Response: ' + JSON.stringify(response));
          //dobbiamo usare myGlobalService per fare le chiamate
          this.myGlobalService.loggedUser = response;
          console.log(this.myGlobalService.loggedUser);
        if(this.myGlobalService.loggedUser.log === 'Si'){
          this.utenteGet();
        }else{
    //rimanda una risposta errata con la window e elimina l array, io commento l alert perchè asincrono e cerco un modo per eliminare il tutto
          this.networkUsers=[];
        }
      },
      error: (errore: any) => console.log('error: ' + errore),
      complete: () => console.log('complete')
    });
  } 
  utenteGet() {
    this.httpService.getData(this.urlGet)
      .subscribe({
        next: (response: any[]) => {
         //dobbiamo usare myGlobalService per prendere le chiamate
          this.myGlobalService.networkUsers = response;
          //sara' this.myGlobalService.networkUser
          console.log(this.myGlobalService.networkUsers); 
          
        },
        error: (errore: any) => console.log('error: ' + errore),
        complete: () => console.log('complete' )
      });
  }
}
