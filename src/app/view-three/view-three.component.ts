import {Component, OnInit, OnDestroy} from '@angular/core'

@Component({
  selector: 'app-view-three',
  templateUrl: './view-three.component.html',
  styleUrls: ['./view-three.component.css'],
})
export class ViewThreeComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    console.log('ViewThreeComponent Init')
  }

  ngOnDestroy() {
    console.log('ViewThreeComponent Destroy')
  }
}
