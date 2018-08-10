import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {ViewOneComponent} from './view-one.component'

@NgModule({
  declarations: [ViewOneComponent],
  exports: [ViewOneComponent],
  imports: [CommonModule],
})
export class ViewOneModule {}
