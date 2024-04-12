import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-test-file',
  templateUrl: './test-file.component.html',
  styleUrls: ['./test-file.component.scss'],
})
export class TestFileComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}
  mySrc: any;
  ngOnInit(): void {}
  chooseFile() {
    // const { dialog } = require('electron');
    // console.log(
    //   dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] })
    // );
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }
  getFile(e: any) {
    console.log(e);
    console.log(e.target.files[0]);
    // this.mySrc = URL.createObjectURL(e.target.files[0]);
    // document.getElementById('file').setAttribute('src', this.mySrc);
    // console.dir(fileInput);
    const windowURL = window.URL || window.webkitURL; // 兼容操作
    let fileObj = e.target.files[0];
    let url = this.sanitizer.bypassSecurityTrustUrl(
      windowURL.createObjectURL(fileObj)
    );
    this.mySrc = url;
  }
  backHome() {
    window.location.href = '/';
  }
}
