import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizableMenuComponent } from './resizable-menu.component';

describe('ResizableMenuComponent', () => {
  let component: ResizableMenuComponent;
  let fixture: ComponentFixture<ResizableMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResizableMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResizableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
