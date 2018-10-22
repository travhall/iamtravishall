import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LacekComponent } from './lacek.component';

describe('LacekComponent', () => {
  let component: LacekComponent;
  let fixture: ComponentFixture<LacekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LacekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LacekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
