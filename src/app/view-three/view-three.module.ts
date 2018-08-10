import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {ViewThreeComponent} from './view-three.component'

@NgModule({
  declarations: [ViewThreeComponent],
  exports: [ViewThreeComponent],
  imports: [CommonModule],
})
export class ViewThreeModule {}
