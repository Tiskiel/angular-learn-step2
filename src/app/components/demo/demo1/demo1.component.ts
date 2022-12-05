import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {

  // public get myprop() : string {
  //   return this._myprop;
  // }

  // public set myprop(value : string) {
  //   this._myprop = value
  // }
  myprop : string;
  nbr : number = 0
  test : boolean = false
  madate : Date = new Date()
  nimporte : any = { nom : "toto"} //On peut tout mettre, ne force pas l'initialisation
  jesaispas : unknown
  monuser : User = { nom : "marcel", prenom : "gustave", bd : new Date()}

  monTableau : object[] = [this.madate, this.monuser]

  monArticle : Article = new Article()
  constructor() {
    this.myprop = "Hello les gars"
    this.nimporte.nom
   }

  changeValue() : void {
    this.myprop = "nouvelle valeur"
  }

  ngOnInit(): void {

    this.monTableau.push(new String("toto"));

    for(let i = 0; i<10; i++){
      let x = i;
      console.log(x)
    }
  }

}

export interface User {
  nom : string
  prenom : string
  bd : Date
}

export class Article {
  prix? : number;

  // constructor(pr : number) {
  //   this.prix = pr
  // }
}
