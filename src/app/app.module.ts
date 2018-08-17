import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component'
import {HostModule} from '@/host/host.module'
import {HostDeclarativeModule} from '@/host-declarative/host-declarative.module'
import {ContainerStateModule} from '@/container-state/container-state.module'
import {StoreModule} from '@ngrx/store'

@NgModule({
  declarations: [AppComponent],
  imports: [
    HostModule,
    HostDeclarativeModule,
    BrowserModule,
    ContainerStateModule,
    StoreModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
