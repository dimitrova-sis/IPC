import { Action, createReducer, on } from '@ngrx/store';
import * as person from '../actions/person.actions'
import { PersonState, initialState } from '../states/person.states'

const reducer = createReducer(
  initialState,
  on(person.setPersonEdit, (state, action) => {
     return Object.assign({}, state, {
      itemEdit: action.payload
    })
  })
);

export function PersonReducer(state: PersonState = initialState , action: Action): PersonState {
  return reducer(state, action);
}