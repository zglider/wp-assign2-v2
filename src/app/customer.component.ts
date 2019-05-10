import { Component } from '@angular/core';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})


export class CustomerComponent {
  cIdCounter: number = 0;
  ListX: CustomerList[] = [];

  addCustomer(inName: string) {
    this.ListX.push({ name: inName, cID: this.cIdCounter++, balance: 0 });
  }

  delCustomer(inID: number) {
    this.ixOf(inID) === -1 ? {} : this.ListX.splice(this.ixOf(inID), 1);
  }

  transact(inID: number, inAmount: number, withdraw: number) {
    this.ixOf(inID) === -1 ? {} : this.ListX[this.ixOf(inID)].balance += (withdraw) * (inAmount * 1);
  }

  ixOf(ix: number): number {
    for (let entry of this.ListX) {
      if (entry.cID == ix) {
        return this.ListX.indexOf(entry);
      }
    }
    return -1;
  }

}
interface CustomerList {
  cID: number;
  name: string;
  balance: number;
}


