import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {ViewTwoComponent} from './view-two.component'

@NgModule({
  declarations: [ViewTwoComponent],
  exports: [ViewTwoComponent],
  imports: [CommonModule],
})
export class ViewTwoModule {}
