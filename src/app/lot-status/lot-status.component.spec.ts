import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotStatusComponent } from './lot-status.component';

describe('LotStatusComponent', () => {
  let component: LotStatusComponent;
  let fixture: ComponentFixture<LotStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
