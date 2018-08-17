import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {AppComponent} from './app.component'
import {ContainerStateModule} from './container-state/container-state.module'
import {HostDeclarativeModule} from './host-declarative/host-declarative.module'
import {HostModule} from './host/host.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    HostModule,
    HostDeclarativeModule,
    BrowserModule,
    ContainerStateModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
