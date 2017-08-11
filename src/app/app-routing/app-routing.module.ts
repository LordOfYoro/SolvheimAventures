import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../index/index.component';
import { JdrPresentationComponent } from '../jdr-presentation/jdr-presentation.component';
import { NotreAventureComponent } from '../notre-aventure/notre-aventure.component';
import { ContactComponent } from '../contact/contact.component';
import { ConnexionComponent } from '../connexion/connexion.component';
import { InscriptionComponent } from '../inscription/inscription.component';
import { Auth0AppComponent } from '../auth0-app/auth0-app.component';
import { FichePersoComponent } from '../fiche-perso/fiche-perso.component';


const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
    },
    {
        path: 'index',
        component: IndexComponent,
    },
    {
        path: 'jdr',
        component: JdrPresentationComponent,
    },
    {
        path: 'notreAventure',
        component: NotreAventureComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'connexion',
        component: ConnexionComponent,
    },
    {
        path: 'inscription',
        component: InscriptionComponent,
    },
    {
        path: 'authorize',
        component: Auth0AppComponent,
    },
    {
        path: 'ficheperso',
        component: FichePersoComponent,
    }
    
    

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }