import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDatagridComponent } from './app-datagrid.component';

describe('AppDatagridComponent', () => {
  let component: AppDatagridComponent;
  let fixture: ComponentFixture<AppDatagridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDatagridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDatagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
