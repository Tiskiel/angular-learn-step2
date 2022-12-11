import { Component, OnInit } from '@angular/core';
import { ServiceExo3Service } from './service-exo3.service';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.scss']
})
export class Exo3Component implements OnInit {

  article!: string

  randomListeQty: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  constructor(private _serviceListe: ServiceExo3Service) { }

  ngOnInit(): void {
  }

  addArticleToList() {
    let findItem = this._serviceListe.itemList.filter(item => item.title === this.article)

    if (typeof findItem[0] === 'undefined') {
      this._serviceListe.addToItemList({
        title: this.article,
        stockQuantity: this.randomListeQty[Math.floor(Math.random() * this.randomListeQty.length)],
        quantityChoice: 1
      })
    } else {
      let indexOfItemNotFind = this._serviceListe.itemList.findIndex(item => item.title === this.article)
      if (this._serviceListe.itemList[indexOfItemNotFind].quantityChoice >= this._serviceListe.itemList[indexOfItemNotFind].stockQuantity) return alert('Pas assez en stock')
      this._serviceListe.itemList[indexOfItemNotFind].quantityChoice++
    }
  }

}
