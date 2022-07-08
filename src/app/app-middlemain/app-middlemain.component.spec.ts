import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMiddlemainComponent } from './app-middlemain.component';

describe('AppMiddlemainComponent', () => {
  let component: AppMiddlemainComponent;
  let fixture: ComponentFixture<AppMiddlemainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMiddlemainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppMiddlemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
