import { Component, OnInit, Input } from '@angular/core';

import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs/Subscription';

import gql from 'graphql-tag';

import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-text-area-fiche',
  templateUrl: './text-area-fiche.component.html',
  styleUrls: ['./text-area-fiche.component.css']
})
export class TextAreaFicheComponent implements OnInit {
  //paramètre recue depuis le parent
  @Input("label")label;
  @Input("nameTextArea")nameTextArea;
  @Input("valTextArea")valTextArea;
//Variable
  classBtnModifier = "glyphicon glyphicon-pencil" ;
  mode="notEdit";



  constructor(  private apollo: Apollo
  ) {}

  ngOnInit() {
  }

  changeMode() {

      if(this.mode == "notEdit"){  //On passe en Mode Editable
        this.classBtnModifier ="glyphicon glyphicon-ok";

        this.mode="Edit" ;
      }else{                        // On passe en mode Non Editable

        this.apollo.mutate({
          mutation: gql`
              mutation fichePerso {
                updateFichePersonnage(id:"cj652cidpg09v0141lv4c2lig", ${this.nameTextArea}: "${this.valTextArea}"){
                    name
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
