import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TestTcpComponent } from './test-tcp/test-tcp.component';
import { TestUsbComponent } from './test-usb/test-usb.component';
import { TestFileComponent } from './test-file/test-file.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [],
  },
  // 更多的路由配置...
  {
    path: 'test-tcp',
    component: TestTcpComponent,
  },
  {
    path: 'test-usb',
    component: TestUsbComponent,
  },
  {
    path: 'test-file',
    component: TestFileComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
