import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuntpuppyComponent } from './stuntpuppy.component';

describe('StuntpuppyComponent', () => {
  let component: StuntpuppyComponent;
  let fixture: ComponentFixture<StuntpuppyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuntpuppyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuntpuppyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
