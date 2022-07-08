import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLefsideComponent } from './app-lefside.component';

describe('AppLefsideComponent', () => {
  let component: AppLefsideComponent;
  let fixture: ComponentFixture<AppLefsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLefsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLefsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
