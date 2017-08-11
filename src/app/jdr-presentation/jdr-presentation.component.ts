import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jdr-presentation',
  templateUrl: './jdr-presentation.component.html',
  styleUrls: ['./jdr-presentation.component.css']
})
export class JdrPresentationComponent implements OnInit {
  title="Le jeu de rôle c'est quoi ?";
  titleSec1="Définition générale";
  titleSec2="Modernistation";
  constructor() { }

  ngOnInit() {
  }

}
