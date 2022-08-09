import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'card-account',
  templateUrl: './card-account.component.html',
  styleUrls: ['./card-account.component.scss']
})
export class CardAccountComponent {

  @Input() accountNumber: any;
  @Output() accountDuplicate = new EventEmitter();

}
