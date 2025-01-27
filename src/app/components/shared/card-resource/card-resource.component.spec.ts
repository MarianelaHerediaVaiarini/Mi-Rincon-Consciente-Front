import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardResourceComponent } from './card-resource.component';

describe('CardResourceComponent', () => {
  let component: CardResourceComponent;
  let fixture: ComponentFixture<CardResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardResourceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
