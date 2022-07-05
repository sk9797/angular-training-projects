import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRadionComponent } from './custom-radion.component';

describe('CustomRadionComponent', () => {
  let component: CustomRadionComponent;
  let fixture: ComponentFixture<CustomRadionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomRadionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomRadionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
