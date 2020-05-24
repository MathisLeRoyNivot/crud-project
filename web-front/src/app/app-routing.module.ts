import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { CanActivateRouteGuard } from './services/route-guard.service';
import { ColumnsPage } from './pages/columns/columns.page';
import { AppComponent } from './app.component';
import { TablesPage } from './pages/tables/tables.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [CanActivateRouteGuard],
    component: AppComponent
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'table/:table',
    // canActivate: [CanActivateRouteGuard],
    component: ColumnsPage
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
