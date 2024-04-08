import { createAction, props } from '@ngrx/store'
import { Person } from '../../models'

export const setPersonEdit = createAction(
  '[Person] Edit',
  props<{ payload: Person | null }>()
);
