import {Component, OnDestroy, OnInit} from '@angular/core'

@Component({
  selector: 'app-view-one',
  templateUrl: './view-one.component.html',
  styleUrls: ['./view-one.component.css'],
})
export class ViewOneComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    console.log('ViewOneComponent Init')
  }

  ngOnDestroy() {
    console.log('ViewOneComponent Destroy')
  }
}
