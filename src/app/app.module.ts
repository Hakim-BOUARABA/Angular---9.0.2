import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ajouter le composant PremierComponent dans le module racine

import {PremierComponent} from "./premier.component";
import {DeuxiemeComponent} from "./deuxieme.component";

import { AppComponent } from './app.component';
import { TroisiemeComponent } from './troisieme/troisieme.component';
import { QuatriemeComponent } from './quatrieme/quatrieme.component';
import { CinquiemeComponent } from './cinquieme/cinquieme.component';
import { SixiemeComponent } from './sixieme/sixieme.component';
import { SeptiemeComponent } from './septieme/septieme.component';

import { DataService } from "./data.service";
import { HuitiemeComponent } from './huitieme/huitieme.component';
import { BlogComponent } from './blog/blog.component';
import { DataBlogService } from "./data-blog.service";

@NgModule({
  declarations: [
    AppComponent,
    PremierComponent,
    DeuxiemeComponent,
    TroisiemeComponent,
    QuatriemeComponent,
    CinquiemeComponent,
    SixiemeComponent,
    SeptiemeComponent,
    HuitiemeComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DataService,
    DataBlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
