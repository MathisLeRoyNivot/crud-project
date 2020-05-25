import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { CanActivateRouteGuard } from './services/route-guard.service';
import { ColumnsPage } from './pages/columns/columns.page';
import { AppComponent } from './app.component';
import { TablesPage } from './pages/tables/tables.page';
import { AddRowPage } from './pages/add-row/add-row.page';
import { UpdateRowPage } from './pages/update-row/update-row.page';

const routes: Routes = [
  {
    path: '',
    // canActivate: [CanActivateRouteGuard],
    component: TablesPage
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'table/:table',
    // canActivate: [CanActivateRouteGuard],
    component: ColumnsPage,
    children : [
      {
        path: 'add',
        component: AddRowPage
      },
      {
        path: 'update/:id',
        component: UpdateRowPage
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
