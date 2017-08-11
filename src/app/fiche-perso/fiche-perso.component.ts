import { Component, OnInit, OnDestroy  } from '@angular/core';

import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs/Subscription';

import gql from 'graphql-tag';

import 'rxjs/add/operator/toPromise';

const fichePersoQuery = gql`
  query fichePerso {
      FichePersonnage(id:"cj652cidpg09v0141lv4c2lig"){
          name
          classe
          race
          vie
          magie
          posture
          testPhysique
          testSpirituelle
          testSocial
          nbDePhysique
          nbDeMagique
          degDePhysique
          degDeMagique
          equipement
          inventaire
          sorts
          biography
        }
  }
`;

@Component({
  selector: 'app-fiche-perso',
  templateUrl: './fiche-perso.component.html',
  styleUrls: ['./fiche-perso.component.css']
})
export class FichePersoComponent implements OnInit, OnDestroy {
  //Variable GraphQl
  loading = true;
  fichePerso: any;
  fichePersoSub: Subscription;

  //Variable Perso
  srcAvatar = "../../assets/images/avatar_nokomis.png";
  valTextAreaInventaire="";
  valTextAreaEquiper="";
  valTextAreaSorts="- Champs de force (bouclier magique) - 2PM +1PM par tour - confère 2 Points d'armure - Magie de la nature - 3 à 5 PM selon utilisation- Dégâts selon utilisation - Inflige un état négatif selon utilisation - Invocation Disponible: Loup - 8PM";
  valTextAreaBio="Mon nom est Nokomis, je suis une femme louve et je viens de la tribu des Wolfans je suis issu de la malédiction d'Amarok, l'esprit de la forêt et père de Sakari. D'après la légende, elle a été punie pour avoir aimé dans l'interdit, il était contre nature qu'une divinité des forêts puisse aimer un simple humain et descendant de chasseurs. Le dieu décida ainsi de châtier sa fille qui portait l'enfant de cet humain qui s'appelait Lenno, ainsi il décréta que tous les descendants de Sakari et de Lenno naîtraient mi-hommes, mi-loups, comme moi. Je suis l'une de leurs descendants et j'ai hérité du don des Wolfans, je peux communiquer avec la nature et je suis devenue une Alchimiste.";

  namePerso ;
  racePerso ;
  classePerso;
  viePerso;
  magiePerso;
  posturePerso;
  testPhysiquePerso;
  testSpirituellePerso;
  testSocialPerso;
  nbDePhysiquePerso;
  nbDeMagiquePerso;
  degDePhysiquePerso;
  degDeMagiquePerso;
  equipementPerso;
  inventairePerso;
  sortsPerso;
  bioPerso;



  constructor(
    private apollo: Apollo
  ) {}

  ngOnInit() {
    this.fichePersoSub = this.apollo.watchQuery({
      query: fichePersoQuery
    }).subscribe(({data, loading}: any) => {
      this.fichePerso = data.FichePersonnage;
      this.loading = loading;

      this.namePerso = this.fichePerso.name;
      this.racePerso = this.fichePerso.race;
      this.classePerso = this.fichePerso.classe;
      this.viePerso = this.fichePerso.vie;
      this.magiePerso = this.fichePerso.magie;
      this.posturePerso = this.fichePerso.posture;
      this.testPhysiquePerso = this.fichePerso.testPhysique;
      this.testSpirituellePerso = this.fichePerso.testSpirituelle;
      this.testSocialPerso = this.fichePerso.testSocial;
      this.nbDePhysiquePerso = this.fichePerso.nbDePhysique;
      this.nbDeMagiquePerso = this.fichePerso.nbDeMagique;
      this.degDePhysiquePerso = this.fichePerso.degDePhysique;
      this.degDeMagiquePerso = this.fichePerso.degDeMagique;
      this.equipementPerso = this.fichePerso.equipement;
      this.inventairePerso = this.fichePerso.inventaire;
      this.sortsPerso = this.fichePerso.sorts;
      this.bioPerso = this.fichePerso.biography;
    });
  }
  ngOnDestroy() {
    this.fichePersoSub.unsubscribe();
  }
}
