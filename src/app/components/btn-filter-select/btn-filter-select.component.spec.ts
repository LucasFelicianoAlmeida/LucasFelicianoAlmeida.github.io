import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFilterSelectComponent } from './btn-filter-select.component';

describe('BtnFilterSelectComponent', () => {
  let component: BtnFilterSelectComponent;
  let fixture: ComponentFixture<BtnFilterSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnFilterSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnFilterSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
