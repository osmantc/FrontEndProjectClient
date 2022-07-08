import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppDatagridComponent } from './app-datagrid/app-datagrid.component';
import { AppMiddlemainComponent } from './app-middlemain/app-middlemain.component';
import { AppLefsideComponent } from './app-lefside/app-lefside.component';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppDatagridComponent,
    AppMiddlemainComponent,
    AppLefsideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    DxSelectBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
