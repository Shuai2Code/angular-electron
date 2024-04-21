import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
const { shell } = require('electron');
const { Notification } = require('electron');
const { release } = require('os');
declare type NodeRequire = any;

interface window {
  require: NodeRequire;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  path: string = '';
  url: string = '';
  noticeMsg: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('HomeComponent INIT');
  }
  openFileManagement() {
    console.log(this.path);
    let path1 = this.path;
    shell.openPath(path1 + '/');
  }
  openUrlWithPopwindow() {
    console.log(this.url);
    window.open(
      this.url,
      '_blank',
      'top=500,left=200,frame=false,nodeIntegration=no'
    );
  }
  openNotice() {
    // notice(
    //   `通知演示程序`,
    //   `程序启动完成，本次初始化耗时 ${Math.ceil(Math.random() * 1000)} ms`
    // );
    // @ts-ignore

    const options = {
      title: '标题',
      body: '正文文本，显示在标题下方',
      silent: true, // 系统默认的通知声音
      icon: '', // 通知图标
    };
    const notification = new Notification(options);
    notification.on('click', () => {});
    notification.on('show', () => {});
    notification.on('close', () => {});
    notification.show();
  }
}

const notice = (title, body) =>
  new Promise((ok, fail) => {
    let ps = typeof title == 'object' ? title : { title, body };
    let n = new Notification(ps);
    n.on('click', ok);
    n.show();
  });
