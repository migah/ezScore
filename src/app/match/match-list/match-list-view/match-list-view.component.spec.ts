import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchListViewComponent } from './match-list-view.component';

describe('MatchListViewComponent', () => {
  let component: MatchListViewComponent;
  let fixture: ComponentFixture<MatchListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
