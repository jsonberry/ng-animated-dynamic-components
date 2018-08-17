import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component'
import {HostModule} from '@/host/host.module'
import {HostDeclarativeModule} from '@/host-declarative/host-declarative.module'

@NgModule({
  declarations: [AppComponent],
  imports: [HostModule, HostDeclarativeModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
