import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: MemberDetailComponent },
  { path: 'members', component: MembersComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) // アプリケーション全体にroutes情報を渡す
  ],
  exports: [
    RouterModule // routingモジュールが読み込まれるapp.modulesでルーティング機能を使えるようにする
  ]
})
export class AppRoutingModule { }
