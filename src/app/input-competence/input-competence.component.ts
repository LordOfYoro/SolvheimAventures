import { Component, OnInit, Input } from '@angular/core';

import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs/Subscription';

import gql from 'graphql-tag';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-input-competence',
  templateUrl: './input-competence.component.html',
  styleUrls: ['./input-competence.component.css']
})
export class InputCompetenceComponent implements OnInit {
  //paramètre recue depuis le parent
  @Input("label")label;

//Variable
  classBtnModifier = "glyphicon glyphicon-pencil" ;
  mode="notEdit";

// tableau
  listCompetence = [{id:1,titre: "Vie en nature" ,pourcentage: 10 },
{id:2,titre: "Vie" ,pourcentage: 30 },
{id:3,titre: "autre" ,pourcentage: 40 } ];


  constructor(
    private apollo: Apollo
  ) {}

  ngOnInit() {
  }

  addNexComp(){
    this.listCompetence.push({id:(this.listCompetence.length)+1 , titre: '' ,pourcentage: 0});

  }
  supprComp(idSuppr){
    console.log(idSuppr);
    this.listCompetence.splice(idSuppr,1);
  }

  changeMode() {

      if(this.mode == "notEdit"){  //On passe en Mode Editable
        this.classBtnModifier ="glyphicon glyphicon-ok";

        this.mode="Edit" ;
      }else{                        // On passe en mode Non Editable

        this.apollo.mutate({
          mutation: gql`
              mutation fichePerso {
                updateFichePersonnage(
                  id:"cj652cidpg09v0141lv4c2lig",
                  competences:[
                    {nameCompetence: "Vie",valeurCompetence: 30}
                  ]){
                    name
                		competences{
                      nameCompetence
                      valeurCompetence
                    }
                  }
              }
          `,
          variables: {
          },
        }).toPromise();





        this.classBtnModifier ="glyphicon glyphicon-pencil";
        this.mode="notEdit"

      }
    }

}
