import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoClickerShopComponent } from './auto-clicker-shop.component';

describe('AutoClickerShopComponent', () => {
  let component: AutoClickerShopComponent;
  let fixture: ComponentFixture<AutoClickerShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoClickerShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoClickerShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
