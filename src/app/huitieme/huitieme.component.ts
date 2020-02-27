import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
@Component({
  selector: 'app-huitieme',
  template: `
    <ul>
      <li *ngFor="let a of articles">{{a.id}} - {{a.nom}} - {{a.date}}</li>
    </ul>
  `
})
export class HuitiemeComponent implements OnInit {
  articles ; // variable de class
  constructor( service : DataService) { 
    this.articles = service.getData();
  }
  ngOnInit(): void {
  }
}
