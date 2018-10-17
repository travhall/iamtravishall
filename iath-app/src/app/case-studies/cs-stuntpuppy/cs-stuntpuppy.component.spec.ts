import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsStuntpuppyComponent } from './cs-stuntpuppy.component';

describe('CsStuntpuppyComponent', () => {
  let component: CsStuntpuppyComponent;
  let fixture: ComponentFixture<CsStuntpuppyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsStuntpuppyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsStuntpuppyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
