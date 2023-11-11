import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilosopherReferenceComponent } from './philosopher-reference.component';

describe('PhilosopherReferenceComponent', () => {
  let component: PhilosopherReferenceComponent;
  let fixture: ComponentFixture<PhilosopherReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhilosopherReferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhilosopherReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
