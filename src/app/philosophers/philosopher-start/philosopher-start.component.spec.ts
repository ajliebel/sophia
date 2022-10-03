import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilosopherStartComponent } from './philosopher-start.component';

describe('PhilosopherStartComponent', () => {
  let component: PhilosopherStartComponent;
  let fixture: ComponentFixture<PhilosopherStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhilosopherStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhilosopherStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
