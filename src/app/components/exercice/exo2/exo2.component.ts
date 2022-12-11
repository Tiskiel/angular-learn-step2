import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.scss']
})
export class Exo2Component implements OnInit {

  article!: string
  listeArticleParent: string[] = []
  responseEvent!: number

  constructor() { }

  ngOnInit(): void {
  }

  listeAjoute(article: string) {
    this.listeArticleParent.push(article)
  }

  listeSupprime(index: number) {
    this.listeArticleParent.splice(index, 1)
  }

  receptionIndexToKill(response: number) {
    this.listeSupprime(response)
  }
}
