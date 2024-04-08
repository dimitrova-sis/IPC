import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../../core/services';
import { catchError, first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Person } from '../../../core/models';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PersonStoreService } from '../../../core/services/store/person-store.service';

@Component({
  selector: 'app-person-mgmt',
  templateUrl: './person-mgmt.component.html',
  styleUrls: ['./person-mgmt.component.scss']
})
export class PersonMgmtComponent implements OnInit {
  people: any[] = []

  constructor(private personService: PersonService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private personStoreService: PersonStoreService,
    private router: Router) {

  }
  ngOnInit(): void {
    this.personService.getAll()
      .pipe(first())
      .subscribe(data => this.people = [...data])
  }

  new() {
    this.personStoreService.personEdit = null
    this.router.navigate([`/person`])
  }

  delete(person: Person) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => this.acceptDelete(person),
      reject: () => this.rejectDelete()
    });
  }

  acceptDelete(person: Person) {
    this.personService.delete(person.id)
      .pipe(first())
      .subscribe(data => {
        var msg = `Person ${person.firstName} ${person.lastName} was successfully deleted!`
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: msg, life: 3000 });

        const index = this.people.findIndex(p => p.id === person.id)
        if (index > -1) {
          this.people.splice(index, 1);
        }
      })
  }

  rejectDelete() {
    console.log("reject deletion")
  }

  edit(person: Person) {
    this.personStoreService.personEdit = person
    this.router.navigate([`/person`])
  }
}
