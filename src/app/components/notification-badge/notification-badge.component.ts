import { Component, Input } from '@angular/core';

@Component({
  selector: 'notification-badge',
  templateUrl: './notification-badge.component.html',
  styleUrls: ['./notification-badge.component.scss']
})
export class NotificationBadgeComponent {

  @Input() notification!: number;

}
