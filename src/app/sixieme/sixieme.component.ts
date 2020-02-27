import { Component } from '@angular/core';
interface Detail{
  duree : number,
  unite:string,
  lieu : string
}
@Component({
  selector: 'app-sixieme',
  template: `
    <h3>{{information}}</h3>
    <p>je suis une formation d'une durée de {{detail.duree}} {{detail.unite}} à {{detail.lieu}}</p>
  `
})
export class SixiemeComponent{
// {{ }} => interpolation == concaténation
information : string = "Formation Angular";
detail : Detail = {
  duree : 2,
  unite : "mois",
  lieu : "Paris"
}

}
