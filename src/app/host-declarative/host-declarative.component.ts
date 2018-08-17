import {
  Component,
  ViewChild,
  ViewContainerRef,
  Type,
  TemplateRef,
  OnInit,
} from '@angular/core'
import {ViewOneComponent} from '../view-one'
import {ViewTwoComponent} from '../view-two'
import {ViewThreeComponent} from '../view-three'
import {
  animate,
  AnimationEvent,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations'
import {ContainerFacade, initialState} from '../container-state/+state'
import {Observable} from 'rxjs'

@Component({
  selector: 'app-host-declarative',
  templateUrl: './host-declarative.component.html',
  styleUrls: ['./host-declarative.component.css'],
  entryComponents: [initialState.components],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition(':enter', [
        style({transform: 'translateX(-100%)', opacity: 0}),
        animate(500),
      ]),
      transition(':leave', [
        animate(200, style({transform: 'translateX(100%)', opacity: 0})),
      ]),
    ]),
  ],
})
export class HostDeclarativeComponent implements OnInit {
  @ViewChild(TemplateRef)
  public tpl: TemplateRef<any>
  @ViewChild('vcr', {read: ViewContainerRef})
  public vcr: ViewContainerRef
  public currentComponent$: Observable<Type<ViewOneComponent | ViewTwoComponent | ViewThreeComponent>>

  constructor(private facade: ContainerFacade) {}

  public loadComponent(component) {
    this.vcr.clear()
    this.facade.loadComponent(component)
  }

  public handleAnimationDone(e: AnimationEvent) {
    if (e.toState !== 'in') {
      this.vcr.createEmbeddedView(this.tpl)
    }
  }

  ngOnInit() {
    this.currentComponent$ = this.facade.currentComponent$
  }
}
