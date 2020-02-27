import { Component } from '@angular/core';

import {DataBlogService} from "../data-blog.service";

@Component({
  selector: 'app-blog',
  template: `
    <h2>{{titre}}</h2>
    <p>{{contenu}}</p>
    <div *ngFor="let a of articles">
      <h4>{{a.titre}}</h4>
      <p>{{a.contenu}}</p>
      <hr>
    </div> 
  `
})
export class BlogComponent  {
  articles ;
  titre = "page d'accueil";
  contenu = "Bienvenu !"
// si on a besoin d'un service
  constructor( service : DataBlogService) {
    this.articles = service.getData();

   }



}
