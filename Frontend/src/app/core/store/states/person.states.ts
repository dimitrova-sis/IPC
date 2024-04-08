import { createFeatureSelector, createSelector } from '@ngrx/store'
import { Person } from '../../models'

export interface PersonState {
    itemEdit: Person | null
}

export const initialState: PersonState = {
    itemEdit: null
}

export namespace personSelectors {
    export const getPersonState = createFeatureSelector<PersonState>('person')
    export const getPersonEdit = createSelector(getPersonState, state => state.itemEdit)
}