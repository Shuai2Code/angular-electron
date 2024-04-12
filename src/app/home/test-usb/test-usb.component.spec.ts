import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUsbComponent } from './test-usb.component';

describe('TestUsbComponent', () => {
  let component: TestUsbComponent;
  let fixture: ComponentFixture<TestUsbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestUsbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestUsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
