import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ViewOneModule} from '../view-one'
import {ViewThreeModule} from '../view-three'
import {ViewTwoModule} from '../view-two'
import {HostComponent} from './host.component'

@NgModule({
  declarations: [HostComponent],
  exports: [HostComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ViewOneModule,
    ViewThreeModule,
    ViewTwoModule,
  ],
})
export class HostModule {}
