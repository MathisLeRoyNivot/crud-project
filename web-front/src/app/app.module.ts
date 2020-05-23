import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { TablesPage } from './pages/tables/tables.page';
import { ColumnsPage } from './pages/columns/columns.page';
import { CanActivateRouteGuard } from './services/route-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    TablesPage,
    ColumnsPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CanActivateRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
