import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-tcp',
  templateUrl: './test-tcp.component.html',
  styleUrls: ['./test-tcp.component.scss'],
})
export class TestTcpComponent implements OnInit {
  constructor(private http: HttpClient) {}
  response: any;
  ngOnInit(): void {}
  backHome() {
    window.location.href = '/';
  }
  getInfo() {
    // 调用服务端的方法
    try {
      this.http
        .post(
          'http://ws008448:8003/api/app/e-kan-ban/point-info?zone=PickingZone',
          {}
        )
        .subscribe(
          (res) => {
            console.log(res);
            this.response = JSON.stringify(res);
          },
          (err) => {
            console.log(err);
            this.response = JSON.stringify(err);
          }
        );
    } catch (err) {
      console.log(err);
    }
  }
}
