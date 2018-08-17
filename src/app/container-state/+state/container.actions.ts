import {Action} from '@ngrx/store'

export enum ContainerActionTypes {
  LoadComponent = '[Container] Load Component',
}

export class LoadComponent implements Action {
  readonly type = ContainerActionTypes.LoadComponent
}

export const containerActions = {
  LoadComponent,
}

export type ContainerActionsUnion = LoadComponent
