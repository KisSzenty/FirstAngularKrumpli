import { Component, OnInit } from '@angular/core';
import { MockData } from 'src/app/model/mock-data';
import { Bill } from 'src/app/model/bill';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  mockData: MockData = new MockData();
  bills: Bill[] = this.mockData.bills;
  title: string = "Bills";
  billKeys: any[];
  modalCounter: number = 0;
  selectedBill: {};
  showModal(selected): void {
    this.modalCounter++;
    this.selectedBill = selected;
  }
  constructor() {
    this.billKeys = Object.keys(this.bills[0]);
    for (let i = 0; i < this.billKeys.length; i++) {
      if (this.billKeys[i] === '_id') {
        this.billKeys[i] = 'id';
      }
    }
  }
  ngOnInit() {
  }

}
