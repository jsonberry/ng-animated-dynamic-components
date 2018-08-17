import {createFeatureSelector, createSelector} from '@ngrx/store'
import {State} from './container.reducers'

export const getContainer = createFeatureSelector<State>('container')

export const getCurrentComponent = createSelector(
  getContainer,
  ({currentComponent}) => currentComponent,
)

export const containerQuery = {
  getContainer,
  getCurrentComponent,
}
