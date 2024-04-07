import { Component } from '@angular/core';
import { Person } from '../../../core/models';
import { PersonService } from '../../../core/services';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  entity: Person = {
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    address: '',
    iban: '',
    phoneNumber: ''
  }
 
  constructor(private personService: PersonService,
    private router: Router) {    
  }

  save() {   
    this.personService.create(this.entity)
      .pipe(first())
      .subscribe(data => this.router.navigate([`/person-mgmt`]))
  }
}
