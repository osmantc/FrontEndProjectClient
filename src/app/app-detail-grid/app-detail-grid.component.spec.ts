import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailGridComponent } from './app-detail-grid.component';

describe('AppDetailGridComponent', () => {
  let component: AppDetailGridComponent;
  let fixture: ComponentFixture<AppDetailGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDetailGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDetailGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
