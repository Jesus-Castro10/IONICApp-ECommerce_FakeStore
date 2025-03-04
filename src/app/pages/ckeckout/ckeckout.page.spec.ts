import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CkeckoutPage } from './ckeckout.page';

describe('CkeckoutPage', () => {
  let component: CkeckoutPage;
  let fixture: ComponentFixture<CkeckoutPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CkeckoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
