import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilosopherEditComponent } from './philosopher-edit.component';

describe('PhilosopherEditComponent', () => {
  let component: PhilosopherEditComponent;
  let fixture: ComponentFixture<PhilosopherEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhilosopherEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhilosopherEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
