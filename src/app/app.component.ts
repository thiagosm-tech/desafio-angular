import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'desafio-angular';

  statusSidebar: boolean = true

  getStatusSidebar(event: boolean) {
    this.statusSidebar = event;
  }
}
