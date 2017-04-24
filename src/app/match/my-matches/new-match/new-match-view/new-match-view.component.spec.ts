import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMatchViewComponent } from './new-match-view.component';

describe('NewMatchViewComponent', () => {
  let component: NewMatchViewComponent;
  let fixture: ComponentFixture<NewMatchViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMatchViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMatchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
