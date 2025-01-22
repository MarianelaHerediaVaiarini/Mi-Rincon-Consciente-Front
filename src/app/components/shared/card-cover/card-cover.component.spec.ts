import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCoverComponent } from './card-cover.component';

describe('CardCoverComponent', () => {
  let component: CardCoverComponent;
  let fixture: ComponentFixture<CardCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
