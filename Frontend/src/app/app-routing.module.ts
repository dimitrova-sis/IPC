import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonMgmtComponent } from './app-modules/person/person-mgmt/person-mgmt.component';
import { PersonComponent } from './app-modules/person/person/person.component';

const routes: Routes = [
  {
    path: 'person-mgmt',
    component: PersonMgmtComponent
  },
  {
    path: 'person',
    component: PersonComponent
  },
  // otherwise redirect to person-mgmt
  {
    path: '**',
    redirectTo: 'person-mgmt' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
