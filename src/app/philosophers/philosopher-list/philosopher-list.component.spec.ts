import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilosopherListComponent } from './philosopher-list.component';

describe('PhilosopherListComponent', () => {
  let component: PhilosopherListComponent;
  let fixture: ComponentFixture<PhilosopherListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhilosopherListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhilosopherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
