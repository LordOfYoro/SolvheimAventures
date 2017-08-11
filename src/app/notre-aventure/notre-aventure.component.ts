import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notre-aventure',
  templateUrl: './notre-aventure.component.html',
  styleUrls: ['./notre-aventure.component.css']
})
export class NotreAventureComponent implements OnInit {
    title = "Notre Aventure : Solvheim";
    perso1="Nokomis";
    racePerso1="Wolfans";
  constructor() { }

  ngOnInit() {
  }

}
