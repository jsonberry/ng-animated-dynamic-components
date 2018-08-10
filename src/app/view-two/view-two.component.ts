import {Component, OnInit, OnDestroy} from '@angular/core'

@Component({
  selector: 'app-view-two',
  templateUrl: './view-two.component.html',
  styleUrls: ['./view-two.component.css'],
})
export class ViewTwoComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    console.log('ViewTwoComponent Init')
  }

  ngOnDestroy() {
    console.log('ViewTwoComponent Destroy')
  }
}
