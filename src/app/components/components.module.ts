import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

import { CardAccountComponent } from './card-account/card-account.component';
import { CardUserComponent } from './card-user/card-user.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StepProgressBarComponent } from './step-progress-bar/step-progress-bar.component';
import { NotificationBadgeComponent } from './notification-badge/notification-badge.component';
import { CardComponent } from './card/card.component';
import { BtnSubmitComponent } from './btn-submit/btn-submit.component';



@NgModule({
  declarations: [
    CardAccountComponent,
    CardUserComponent,
    HeaderComponent,
    SidebarComponent,
    StepProgressBarComponent,
    NotificationBadgeComponent,
    CardComponent,
    BtnSubmitComponent,
  ],
  exports: [
    CardAccountComponent,
    CardUserComponent,
    HeaderComponent,
    SidebarComponent,
    StepProgressBarComponent,
    NotificationBadgeComponent,
    CardComponent,
    BtnSubmitComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
