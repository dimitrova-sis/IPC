import { Injectable } from "@angular/core"
import { Store } from "@ngrx/store"
import { State } from "../../store/states"
import { Person } from "../../models"
import { Observable } from "rxjs"
import { personSelectors } from "../../store/states/person.states"
import { setPersonEdit } from "../../store/actions/person.actions"

@Injectable()
export class PersonStoreService {
    constructor(private store$: Store<State>) { }
   
    public get editPerson$(): Observable<Person | null> {
        return this.store$.select(personSelectors.getPersonEdit)
    }

    public set personEdit(person: Person | null) {
        this.store$.dispatch(setPersonEdit({payload: person}))
    }
}