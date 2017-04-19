import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMatchesViewComponent } from './my-matches-view.component';

describe('MyMatchesViewComponent', () => {
  let component: MyMatchesViewComponent;
  let fixture: ComponentFixture<MyMatchesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMatchesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMatchesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
