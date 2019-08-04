import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  string: string = '';
  /**
   * Az adatok, amelyek megjelennek a modális ablakban.
   */
  @Input() modalData: any = {};

  /**
   * Ha a showCounter property változik, akkor fut le a setter.
   * Amennyiben a számláló nem 0, akkor megjeleníti az ablakot.
   */
  @Input() set showCounter(counter) {
    if (counter > 0) {
      for (let k in this.modalData) {
        if (typeof this.modalData[k] === 'object') {
          for (let j in this.modalData[k]) {
            this.string += `<p>${j}: ${this.modalData[k][j]}</p>`
          }
        } else {
          this.string += `<p>${k}: ${this.modalData[k]}</p>`
        }
      }
      this.show();
    }
  }

  isShow: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  show(): void {
    this.isShow = true;
  }

  hide(): void {
    this.string = '';
    this.isShow = false;
  }

  getDisplay(): string {
    return this.isShow ? 'block' : 'none';
  }

}
