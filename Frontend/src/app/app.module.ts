import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { PersonModule } from './app-modules/person/person.module';
import { ApiService, PersonService } from './core/services';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToolbarModule } from 'primeng/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ConfirmationService, MessageService } from 'primeng/api';
import { StoreModule } from '@ngrx/store';
import { PersonReducer } from './core/store/reducers/person.reducers';
import { BaseComponent } from './components/base/base.component';
import { PersonStoreService } from './core/services/store/person-store.service';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PersonModule,
    HttpClientModule,
    ToolbarModule,
    StoreModule.forRoot({person:PersonReducer }),
  ],
  providers: [
    HttpClient,
    ApiService,
    PersonService,
    ConfirmationService,
    MessageService,
    PersonStoreService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
