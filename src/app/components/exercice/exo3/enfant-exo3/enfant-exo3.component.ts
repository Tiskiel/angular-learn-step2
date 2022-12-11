import { Component, OnInit } from '@angular/core';
import { item } from 'src/app/shared/models/item.model';
import { ServiceExo3Service } from '../service-exo3.service';


@Component({
  selector: 'app-enfant-exo3',
  templateUrl: './enfant-exo3.component.html',
  styleUrls: ['./enfant-exo3.component.scss']
})
export class EnfantExo3Component implements OnInit {



  constructor(private _serviceListe: ServiceExo3Service) { }

  listeItem: item[] = this._serviceListe.itemList


  ngOnInit(): void {
  }

  addArticle(index: number) {
    if (this.listeItem[index].stockQuantity === 0) return alert('No stock')
    if (this.listeItem[index].quantityChoice >= this.listeItem[index].stockQuantity) return alert("Out of stock")

    this.listeItem[index].quantityChoice++
    this.listeItem[index].stockQuantity--

  }

  removeArticle(index: number) {
    if (this.listeItem[index].quantityChoice === 0) this._serviceListe.removeItemFromList(index)

    this.listeItem[index].quantityChoice--

    if (this.listeItem[index].quantityChoice === 0) this._serviceListe.removeItemFromList(index)

    this.listeItem[index].stockQuantity++

  }

}
