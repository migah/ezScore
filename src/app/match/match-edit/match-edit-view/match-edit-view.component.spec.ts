import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchEditViewComponent } from './match-edit-view.component';

describe('MatchEditViewComponent', () => {
  let component: MatchEditViewComponent;
  let fixture: ComponentFixture<MatchEditViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchEditViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
