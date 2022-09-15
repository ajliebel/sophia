import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilosopherItemComponent } from './philosopher-item.component';

describe('PhilosopherItemComponent', () => {
  let component: PhilosopherItemComponent;
  let fixture: ComponentFixture<PhilosopherItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhilosopherItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhilosopherItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
