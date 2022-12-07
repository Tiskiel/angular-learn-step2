import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit {

  texteDuParent : string = "Bien le bonjour cher ami du monde réel !"

  reponseDeEnfant! : string
  constructor() { }

  ngOnInit(): void {
  }

  receptionReponseDeEnfant(reponse : string){
    this.reponseDeEnfant = reponse
  }
}
