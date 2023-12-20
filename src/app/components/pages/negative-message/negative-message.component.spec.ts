import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeMessageComponent } from './negative-message.component';

describe('NegativeMessageComponent', () => {
  let component: NegativeMessageComponent;
  let fixture: ComponentFixture<NegativeMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NegativeMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NegativeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
