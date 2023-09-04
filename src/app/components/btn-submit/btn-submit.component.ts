import { Component, Input } from '@angular/core';

@Component({
  selector: 'btn-submit',
  templateUrl: './btn-submit.component.html',
  styleUrls: ['./btn-submit.component.scss']
})
export class BtnSubmitComponent {

  @Input() isLoading = false;

}
