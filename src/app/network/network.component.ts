import { Component, OnInit } from '@angular/core';
import { MyGlobalServiceService } from '../my-global-service.service';


@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrl: './network.component.css'
})
export class NetworkComponent {
  title = 'Network component'
  urlImages: string = 'https://ugobetori.it/_notes/api-test/angular/angular2/img/';
  constructor(public myGlobalService: MyGlobalServiceService){
  }

}
