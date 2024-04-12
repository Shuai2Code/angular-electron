import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-usb',
  templateUrl: './test-usb.component.html',
  styleUrls: ['./test-usb.component.scss'],
})
export class TestUsbComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  backHome() {
    window.location.href = '/';
  }
}
