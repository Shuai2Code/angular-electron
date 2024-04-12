import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTcpComponent } from './test-tcp.component';

describe('TestTcpComponent', () => {
  let component: TestTcpComponent;
  let fixture: ComponentFixture<TestTcpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestTcpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestTcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
