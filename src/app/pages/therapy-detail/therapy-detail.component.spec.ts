import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapyDetailComponent } from './therapy-detail.component';

describe('TherapyDetailComponent', () => {
  let component: TherapyDetailComponent;
  let fixture: ComponentFixture<TherapyDetailComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TherapyDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TherapyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
