import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsArrowComponent } from './cs-arrow.component';

describe('CsArrowComponent', () => {
  let component: CsArrowComponent;
  let fixture: ComponentFixture<CsArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
