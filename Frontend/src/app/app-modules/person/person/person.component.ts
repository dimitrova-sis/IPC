import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../../core/services';
import { Router } from '@angular/router';
import { first, takeWhile } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonStoreService } from '../../../core/services/store/person-store.service';
import { BaseComponent } from '../../../components/base/base.component';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent extends BaseComponent implements OnInit {
  personForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required, Validators.maxLength(50)]],
    lastName: ['', [Validators.required, Validators.maxLength(50)]],
    address: ['', [Validators.required, Validators.maxLength(500)]],
    dateOfBirth: [new FormControl<Date | null>(null), Validators.required],
    iban: ['', [Validators.required, Validators.maxLength(34),
    Validators.pattern('^[A-Z]{2}(?:[ ]?[0-9]){18,20}$')]],
    phoneNumber: ['', [Validators.required, Validators.maxLength(13), Validators.minLength(3),
    Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')]],
  });

  personId: string | null = null

  constructor(private personService: PersonService,
    private personStoreService: PersonStoreService,
    private router: Router,
    private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.personStoreService.editPerson$
      .pipe(takeWhile(_ => this.isAlive))
      .subscribe(data => {
        if (data) {
          this.personId = data.id

          let date = new Date(data.dateOfBirth)
          this.personForm.patchValue({
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,
            dateOfBirth: date,
            iban: data.iban,
            phoneNumber: data.phoneNumber
          });
        }
      })
  }

  save() {
    let person = this.personForm.value
    const date = new Date(Date.UTC(person.dateOfBirth.getFullYear(), person.dateOfBirth.getMonth(), person.dateOfBirth.getDate()))
    person.dateOfBirth = date
    this.personService.save(person, this.personId)
      .pipe(first())
      .subscribe(_ => this.router.navigate([`/person-mgmt`]))
  }

  showError(controlName: string) {
    return this.personForm.get(controlName)?.invalid && this.personForm.get(controlName)?.dirty
  }

  getErrorMsg(controlName: string, label: string) {
    var msg: string = ''

    var errors = this.personForm.get(controlName)?.errors
    if (errors) {
      Object.keys(errors).forEach(keyError => {
        if (msg !== '') {
          msg += '\n'
        }
        switch (keyError) {
          case 'required':
            msg += `${label} is required`;
            break;
          case 'maxlength':
            msg += `${label} should be no more than ${errors ? [keyError][0] : ''} symbols`;
            break;
          case 'minlength':
            msg += `${label} should be no less than ${errors ? [keyError][0] : ''} symbols`;
            break;
          case 'pattern':
            msg += `${label} is not valid`;
            break;
        }
      });
    }

    return msg;
  }
}
