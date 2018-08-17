import {NgModule} from '@angular/core'
import {StoreModule} from '@ngrx/store'
import {reducers} from './+state'

@NgModule({
  imports: [StoreModule.forFeature('container', reducers)],
})
export class ContainerStateModule {}
