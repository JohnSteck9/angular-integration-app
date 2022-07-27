import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularShopQqComponent } from './angular-shop-qq.component';

describe('AngularShopQqComponent', () => {
  let component: AngularShopQqComponent;
  let fixture: ComponentFixture<AngularShopQqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularShopQqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularShopQqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
