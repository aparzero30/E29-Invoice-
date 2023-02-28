import { Injectable } from '@angular/core';
import { item, items } from '../../app/interface/item';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  items = items;

  constructor() {}

  addItem(itemToBeAdded: item) {
    this.items.push(itemToBeAdded);
  }

  getTotal(): number {
    let total = 0;
    for (const curr of items) {
      total = total + curr.total;
    }
    return total;
  }
}
