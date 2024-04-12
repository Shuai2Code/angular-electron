import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
const { shell } = require('electron');

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
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('HomeComponent INIT');
  }
  openFileManagement() {
    console.log(this.path);
    let path1 = this.path;
    shell.openPath(path1 + '/');
  }
}
