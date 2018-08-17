import {ViewOneModule} from '@/view-one'
import {ViewThreeModule} from '@/view-three'
import {ViewTwoModule} from '@/view-two'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {HostDeclarativeComponent} from './host-declarative.component'

@NgModule({
  imports: [
    CommonModule,
    ViewOneModule,
    ViewTwoModule,
    ViewThreeModule,
    BrowserAnimationsModule,
  ],
  exports: [HostDeclarativeComponent],
  declarations: [HostDeclarativeComponent],
})
export class HostDeclarativeModule {}
