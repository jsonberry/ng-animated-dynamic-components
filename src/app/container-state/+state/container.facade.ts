import {Injectable} from '@angular/core'
import {Store} from '@ngrx/store'
import {containerActions} from './container.actions'
import {State} from './container.reducers'
import {containerQuery} from './container.selectors'

@Injectable()
export class ContainerFacade {
  public currentComponent$ = this.store.select(containerQuery.getCurrentComponent)

  constructor(private store: Store<State>) {}

  public loadComponent(component: string) {
    this.store.dispatch(new containerActions.LoadComponent(component))
  }
}
