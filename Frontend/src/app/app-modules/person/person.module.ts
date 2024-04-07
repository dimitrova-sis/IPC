import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonMgmtComponent } from './person-mgmt/person-mgmt.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { AnimateModule } from 'primeng/animate';
import { PersonComponent } from './person/person.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PersonMgmtComponent,
    PersonComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    AnimateModule,
    InputNumberModule
  ]
})
export class PersonModule { }
