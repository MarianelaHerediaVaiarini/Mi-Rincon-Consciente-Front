import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCardsResourceComponent } from './carousel-cards-resource.component';

describe('CarouselCardsResourceComponent', () => {
  let component: CarouselCardsResourceComponent;
  let fixture: ComponentFixture<CarouselCardsResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselCardsResourceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselCardsResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
