import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enfant-exo2',
  templateUrl: './enfant-exo2.component.html',
  styleUrls: ['./enfant-exo2.component.scss']
})
export class EnfantExo2Component implements OnInit {

  @Input() listeArticle!: string[]

  @Output() reponseEvent: EventEmitter<number> = new EventEmitter

  constructor() { }

  ngOnInit(): void {

  }

  envoiReponse(articleIndex: number) {
    this.reponseEvent.next(articleIndex)
  }

}
