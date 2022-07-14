import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPivotComponent } from './app-pivot.component';

describe('AppPivotComponent', () => {
  let component: AppPivotComponent;
  let fixture: ComponentFixture<AppPivotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPivotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPivotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
