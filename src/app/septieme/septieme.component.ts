import { Component} from '@angular/core';

@Component({
  selector: 'app-septieme',
  template: `
    <ul>
      <li *ngFor="let fruit of courses">{{fruit}}</li>
    </ul>
    <ul>
      <li *ngFor="let article of articles">{{article.id}} - {{article.titre}}</li>
    </ul>
  `
})
export class SeptiemeComponent{
// le fait de modifier de manière dynamique un attribut d'une balise html
// DIRECTIVE 
courses = ["pomme", "poire", "ananas"];

// collection  = tableau qui contient des objets
articles = [
    {titre :"article1" , id :1} , 
    {titre :"article 2", id : 2}
]

}
