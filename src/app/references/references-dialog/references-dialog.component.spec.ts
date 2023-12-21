import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesDialogComponent } from './references-dialog.component';

describe('ReferencesDialogComponent', () => {
  let component: ReferencesDialogComponent;
  let fixture: ComponentFixture<ReferencesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferencesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferencesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
