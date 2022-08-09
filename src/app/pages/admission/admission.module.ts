import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxMaskModule } from 'ngx-mask';
import { AdmissionComponent } from './admission.component';
import { ComponentsModule } from '../../components/components.module';
import { Router } from './router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AdmissionComponent
  ],
  exports: [
    AdmissionComponent
  ],
  imports: [
    CommonModule,
    Router,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
    MatIconModule
  ]
})
export class AdmissionModule { }
