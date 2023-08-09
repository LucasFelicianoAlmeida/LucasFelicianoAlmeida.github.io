import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillfilterComponent } from './pillfilter.component';

describe('PillfilterComponent', () => {
  let component: PillfilterComponent;
  let fixture: ComponentFixture<PillfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PillfilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PillfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
