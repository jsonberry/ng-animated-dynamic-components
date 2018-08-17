import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostDeclarativeComponent } from './host-declarative.component';

describe('HostDeclarativeComponent', () => {
  let component: HostDeclarativeComponent;
  let fixture: ComponentFixture<HostDeclarativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostDeclarativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostDeclarativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
