import {ActionReducerMap, Action} from '@ngrx/store'
import {Type} from '@angular/core'
import {
  ContainerActionsUnion,
  ContainerActionTypes,
} from '@/container-state/+state/container.actions'
import {ViewOneComponent} from '@/view-one'
import {ViewTwoComponent} from '@/view-two'
import {ViewThreeComponent} from '@/view-three'

export interface State {
  components: Type<any>[]
  currentComponent: Type<any>
}

export const initialState: State = {
  components: [ViewOneComponent, ViewTwoComponent, ViewThreeComponent],
  currentComponent: null,
}

export function components(
  state = initialState.components,
  action: ContainerActionsUnion,
): Type<any>[] {
  switch (action.type) {
    case ContainerActionTypes.LoadComponent:
      return [...state]

    default:
      return state
  }
}

export function currentComponent(
  state = initialState.currentComponent,
  action: ContainerActionsUnion,
): Type<any> {
  switch (action.type) {
    case ContainerActionTypes.LoadComponent:
      return ViewOneComponent

    default:
      return state
  }
}

export const reducers: ActionReducerMap<State> = {
  components,
  currentComponent,
}
