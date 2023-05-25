import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellWithUsComponent } from './sell-with-us.component';

describe('SellWithUsComponent', () => {
  let component: SellWithUsComponent;
  let fixture: ComponentFixture<SellWithUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellWithUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
