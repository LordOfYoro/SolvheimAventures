import { Component, OnInit, Input } from '@angular/core';

import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs/Subscription';

import gql from 'graphql-tag';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-input-text-fiche',
  templateUrl: './input-text-fiche.component.html',
  styleUrls: ['./input-text-fiche.component.css']
})
export class InputTextFicheComponent implements OnInit {
  //Variable GraphQl
  loading = true;
  fichePerso: any;
  fichePersoSub: Subscription;
  name:string = "Dylan";

  //paramètre recue depuis le parent
  @Input("label")label;
  @Input("valueComp")valueComp;
  @Input("degDe")degDe;
  @Input("typeInput")typeInput;
  @Input("typeComponent")typeComponent;
  @Input("nameInput")nameInput;
  @Input("nbDeType")nbDeType;
  @Input("degDeType")degDeType;



  //Variable utile
  imgModifier= "../../assets/images/icone_modifier.jpg";
  mode="notEdit" ;


//Classe des elements html
  classBtnModifier = "glyphicon glyphicon-pencil visibleLabel" ;
  inputClass= "form-control hidden";
  labelClass= "visible";
  errorTextHidden = "hidden" ;
  errorNumHidden = "hidden" ;
  errorPourcentageHidden = "hidden" ;
  validForm = 0 ;

  //tableau de dé
  listDe = [{value: 3},{value: 4},{value: 6},{value: 8},{value: 10},{value: 12},{value: 14},{value: 16},{value: 20},{value: 30},{value: 60},{value: 100}];


  constructor(  private apollo: Apollo
  ) {}

  ngOnInit() {
  }


  ngOnDestroy() {
    this.fichePersoSub.unsubscribe();
  }

  recupDe(deFace){
      console.log(this.degDe);
      this.degDe = deFace;

  }

  changeMode() {
    if(this.mode == "notEdit"){  //On passe en Mode Editable
      this.classBtnModifier ="glyphicon glyphicon-ok";
      this.inputClass="form-control visible";
      /* Ne pas oublier de  Mettre un focus */
      this.labelClass="hidden";

      this.mode="Edit" ;
    }else{                        // On passe en mode Non Editable
      if(this.typeComponent == "text"){      //Verification pour les types textes
          if(this.valueComp == "" || this.valueComp.length < 3){    // S'il n'est pas vide et qu'il fait minimum 3 caractères
                console.log("On passe");
            this.validForm++;
            this.errorTextHidden = "visible" ;
          }

      }else if(this.typeComponent == "number" || this.typeComponent == "de"){        // Vérification pour les type number
          if(this.valueComp < 0 ){               // Quand il est inférieur à 0
            this.validForm++;
            this.errorNumHidden = "visible";
          }
      }else if(this.typeComponent == "pourcentage"){
        if(this.valueComp < 0 || this.valueComp > 100){               // Quand il est inférieur à 0
          this.validForm++;
          this.errorPourcentageHidden = "visible";
        }
      }

      if(this.validForm == 0){          // Si aucune erreur rencontrer
        this.classBtnModifier = "glyphicon glyphicon-pencil";
        this.inputClass="form-control hidden";
        this.errorTextHidden = "hidden" ;
        this.errorNumHidden = "hidden";
        this.errorPourcentageHidden = "hidden" ;
        this.labelClass="visible";

      if(this.typeComponent == "de"){
            this.apollo.mutate({
              mutation: gql`
                  mutation fichePerso {
                    updateFichePersonnage(id:"cj652cidpg09v0141lv4c2lig", ${this.nbDeType}:${this.valueComp},${this.degDeType}:${this.degDe} ){
                        name
                      }
                  }
              `,
              variables: {
              },
            }).toPromise();
       }else if(this.typeComponent == "number"){
             this.apollo.mutate({
               mutation: gql`
                   mutation fichePerso {
                     updateFichePersonnage(id:"cj652cidpg09v0141lv4c2lig", ${this.nameInput}: ${this.valueComp}){
                         name
                       }
                   }
               `,
               variables: {
               },
             })
               .toPromise();
           }else if(this.typeComponent == "text"){
                 this.apollo.mutate({
                   mutation: gql`
                       mutation fichePerso {
                         updateFichePersonnage(id:"cj652cidpg09v0141lv4c2lig", ${this.nameInput}: "${this.valueComp}"){
                             name
                           }
                       }
                   `,
                   variables: {
                   },
                 })
                   .toPromise();
          }



        this.mode="notEdit";
      }else{
        this.validForm = 0;            //Sinon on remet validForm à 0 pour une prochaine vérification
      }
    }
  }
}
