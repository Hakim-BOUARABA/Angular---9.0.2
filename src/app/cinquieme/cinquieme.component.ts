import { Component} from '@angular/core';

@Component({
  selector: 'app-cinquieme',
  template: `<h3>{{titre}}</h3>
              <p>{{contenu}}</p>
              <ul>
                <li>{{liste[0]}}</li>
                <li>{{liste[1]}}</li>
                <li>{{liste[2]}}</li>
              </ul>
              `
})
export class CinquiemeComponent {
// dans la class nous allons ajouter des variables 

titre : string = "titre du module avec des variables";
contenu : string = "lorem ipsum";
// {{ }} injecter une variable de class dans la vue => INTERPOLATION
// ressemble beaucoup à ce que l'on a fait hier concaténation
liste : Array<string> = ["ajax","nodejs","angular"] ;
  

}
