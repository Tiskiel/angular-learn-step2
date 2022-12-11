import { Injectable } from '@angular/core';
import { item } from 'src/app/shared/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceExo3Service {
  itemList: item[] = []
  constructor() { }

  addToItemList(item: item) {
    this.itemList.push(item)
  }

  removeItemFromList(index: number) {
    this.itemList.splice(index, 1)
  }
}
