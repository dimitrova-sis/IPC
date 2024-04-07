import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../../core/services';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-mgmt',
  templateUrl: './person-mgmt.component.html',
  styleUrls: ['./person-mgmt.component.scss']
})
export class PersonMgmtComponent implements OnInit {
  people: any[] = []

  constructor(private personService: PersonService,
    private router: Router) {

  }
  ngOnInit(): void {
    this.personService.getAll()
      .pipe(first())
      .subscribe(data => this.people = [...data])
  }

  new() {
    this.router.navigate([`/person`])
    // var person = {
    //   "firstName": "First",
    //   "lastName": "Test",
    //   "dateOfBirth": "1995-04-06",
    //   "address": "my address",
    //   "phoneNumber": "11225355",
    //   "iban": "BG2323"
    // }

    // this.personService.create(person)
    //   .pipe(first())
    //   .subscribe(data => console.log(data))
  }
}
