import {NgModule} from '@angular/core'
import {StoreModule} from '@ngrx/store'
import {reducers, ContainerFacade} from './+state'

@NgModule({
  imports: [StoreModule.forFeature('container', reducers)],
  providers: [ContainerFacade],
})
export class ContainerStateModule {}
