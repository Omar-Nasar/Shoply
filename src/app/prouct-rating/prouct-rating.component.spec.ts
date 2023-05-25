import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuctRatingComponent } from './prouct-rating.component';

describe('ProuctRatingComponent', () => {
  let component: ProuctRatingComponent;
  let fixture: ComponentFixture<ProuctRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProuctRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProuctRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
