import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalebannerComponent } from './salebanner.component';

describe('SalebannerComponent', () => {
  let component: SalebannerComponent;
  let fixture: ComponentFixture<SalebannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalebannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalebannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
