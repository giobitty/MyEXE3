import { Component } from '@angular/core';
import { MyGlobalServiceService } from '../my-global-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  title="Benvenuto sul tuo Profilo"
  //prendiamo l url di indirizzo per le immagini e poi interpoliamo nell html per stampare l immagine;
  urlImages: string = 'https://ugobetori.it/_notes/api-test/angular/angular2/img/';

  constructor(public myGlobalService: MyGlobalServiceService){
  }
  
}
