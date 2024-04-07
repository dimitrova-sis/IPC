import { Component } from '@angular/core';
import { Person } from '../../../core/models';
import { PersonService } from '../../../core/services';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  personForm = this.fb.group({
    firstName: ['', Validators.required], 
    lastName: ['', Validators.required],
    address:  ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    iban:  ['', Validators.required],
    phoneNumber: ['', Validators.required],
  });
 
  constructor(private personService: PersonService,
    private router: Router,
    private fb: FormBuilder) {    
  }

  save() {   
    this.personService.create(this.personForm.value)
      .pipe(first())
      .subscribe(data => this.router.navigate([`/person-mgmt`]))
  }
}
