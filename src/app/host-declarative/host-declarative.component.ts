import {
  Component,
  ViewChild,
  ViewContainerRef,
  ContentChild,
  ComponentRef,
  Type,
  TemplateRef,
  EmbeddedViewRef,
} from '@angular/core'
import {ViewOneComponent} from '@/view-one'
import {ViewTwoComponent} from '@/view-two'
import {ViewThreeComponent} from '@/view-three'
import {
  animate,
  AnimationEvent,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations'

@Component({
  selector: 'app-host-declarative',
  templateUrl: './host-declarative.component.html',
  styleUrls: ['./host-declarative.component.css'],
  entryComponents: [ViewOneComponent, ViewTwoComponent, ViewThreeComponent],
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
export class HostDeclarativeComponent {
  @ViewChild(TemplateRef) public tpl: TemplateRef<any>

  @ViewChild('vcr', {read: ViewContainerRef})
  public vcr: ViewContainerRef

  @ContentChild('child')
  public contentChildRef: ContentChild

  public comp1 = ViewOneComponent
  public comp2 = ViewTwoComponent
  public comp3 = ViewThreeComponent
  public component: ComponentRef<
    ViewOneComponent | ViewTwoComponent | ViewThreeComponent
  >
  public componentToLoad: Type<
    ViewOneComponent | ViewTwoComponent | ViewThreeComponent
  > = this.comp1
  public embededViewRef: EmbeddedViewRef<any>

  constructor() {}

  public queueComponent(componentToLoad) {
    this.vcr.clear()
    this.componentToLoad = componentToLoad
  }

  public handleAnimationDone(e: AnimationEvent) {
    if (e.toState !== 'in') {
      this.vcr.createEmbeddedView(this.tpl)
    }
  }
}
