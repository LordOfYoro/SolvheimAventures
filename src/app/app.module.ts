import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApolloClient } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';



import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { JdrPresentationComponent } from './jdr-presentation/jdr-presentation.component';
import { NotreAventureComponent } from './notre-aventure/notre-aventure.component';
import { ContactComponent } from './contact/contact.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { InscriptionComponent } from './inscription/inscription.component';
import { Auth0AppComponent } from './auth0-app/auth0-app.component';
import { FichePersoComponent } from './fiche-perso/fiche-perso.component';
import { InputTextFicheComponent } from './input-text-fiche/input-text-fiche.component';
import { InputCompetenceComponent } from './input-competence/input-competence.component';
import { TextAreaFicheComponent } from './text-area-fiche/text-area-fiche.component';
import { provideClient } from './client';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    JdrPresentationComponent,
    NotreAventureComponent,
    ContactComponent,
    ConnexionComponent,
    InscriptionComponent,
    Auth0AppComponent,
    FichePersoComponent,
    InputTextFicheComponent,
    InputCompetenceComponent,
    TextAreaFicheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ApolloModule.forRoot(provideClient),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
