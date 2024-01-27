import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolReferenceComponent } from './school-reference.component';

describe('SchoolReferenceComponent', () => {
  let component: SchoolReferenceComponent;
  let fixture: ComponentFixture<SchoolReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolReferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
