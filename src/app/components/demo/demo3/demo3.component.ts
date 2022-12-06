import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  isVisible! : boolean

  maliste : string[] = ["Je", "vous", "soupçonne", "d'être", "un", "gros nul"]

  liste2 : any = [
    {nom : "toto", age : "42"},
    {nom : "Arthur", age : "27"},
    {nom : "Merlin", age : "824"},
  ]

  mavaleur! : string
  constructor() { }

  ngOnInit(): void {
  }

  toggleVisible() {
    this.isVisible = !this.isVisible
  }

}
