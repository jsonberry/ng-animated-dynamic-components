import {
  animate,
  AnimationEvent,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations'
import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core'
import {ViewOneComponent} from '../view-one'
import {ViewThreeComponent} from '../view-three'
import {ViewTwoComponent} from '../view-two'

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css'],
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
export class HostComponent implements OnInit {
  @ViewChild('tmp1', {read: TemplateRef})
  public tmp1: TemplateRef<any>
  @ViewChild('tmp2', {read: TemplateRef})
  public tmp2: TemplateRef<any>
  @ViewChild('tmp3', {read: TemplateRef})
  public tmp3: TemplateRef<any>
  @ViewChild('vcr', {read: ViewContainerRef})
  public viewContainerRef: ViewContainerRef
  public templateToLoad: TemplateRef<any>

  public animationDone(e: AnimationEvent): void {
    if (e.toState === 'void') {
      this.embedView(this.templateToLoad)
    }
  }

  public loadTemplate(templateToLoad): void {
    this.viewContainerRef.clear()
    this.templateToLoad = templateToLoad
  }

  public embedView(tmp): void {
    this.viewContainerRef.createEmbeddedView(tmp)
  }

  ngOnInit() {
    this.embedView(this.tmp1)
  }
}
