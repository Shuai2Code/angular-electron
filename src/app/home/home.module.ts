import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { TestTcpComponent } from './test-tcp/test-tcp.component';
import { TestUsbComponent } from './test-usb/test-usb.component';
import { TestFileComponent } from './test-file/test-file.component';

@NgModule({
  declarations: [HomeComponent, TestTcpComponent, TestUsbComponent, TestFileComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule]
})
export class HomeModule {}
