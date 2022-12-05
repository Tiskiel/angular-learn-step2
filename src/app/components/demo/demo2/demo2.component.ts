import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {

  monTexte : string = "SaluT lEs gars"
  monNombre : number = 10.474
  maDate : Date = new Date()


  maValeur : number = 198237569

  myObject : any =  {nom : "steve", role : "formateur"}

  constructor() { }

  ngOnInit(): void {
  }

}
