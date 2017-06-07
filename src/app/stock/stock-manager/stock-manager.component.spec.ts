import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockManagerComponent } from './stock-manager.component';

describe('StockManagerComponent', () => {
  let component: StockManagerComponent;
  let fixture: ComponentFixture<StockManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
