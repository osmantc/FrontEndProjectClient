import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DxButtonModule, DxChartModule, DxCheckBoxModule, DxDataGridModule, DxMapModule, DxPivotGridModule, DxSelectBoxModule, DxTemplateModule } from 'devextreme-angular';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppDatagridComponent } from './app-datagrid/app-datagrid.component';
import { AppMiddlemainComponent } from './app-middlemain/app-middlemain.component';
import { AppLefsideComponent } from './app-lefside/app-lefside.component';
import { AppDetailGridComponent } from './app-detail-grid/app-detail-grid.component';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClientModule } from '@angular/common/http';
import { AppPivotComponent } from './app-pivot/app-pivot.component';
import { AppMapComponent } from './app-map/app-map.component';




@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppDatagridComponent,
    AppMiddlemainComponent,
    AppLefsideComponent,
    AppDetailGridComponent,
    AppPivotComponent,
    AppMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxTemplateModule,
    HttpClientModule,
    DxPivotGridModule,
    DxChartModule,
    DxMapModule,
    DxCheckBoxModule,
    DxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
