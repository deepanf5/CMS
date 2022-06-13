import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { RouterModule } from '@angular/router';
import { ListViewComponent } from './components/list-view/list-view.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { DeleteCustomerComponent } from './components/delete/delete-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { DataTablesModule } from 'angular-datatables';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { SingleCustomerComponent } from './components/single-customer/single-customer.component';
import { FilterPipe } from './filter.pipe';
import { SearchBarComponent } from './components/search-bar/search-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CardViewComponent,
    ListViewComponent,
    AddCustomerComponent,
    DeleteCustomerComponent,
    UpdateCustomerComponent,
    EditCustomerComponent,
    AllOrdersComponent,
    SingleCustomerComponent,
    FilterPipe,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
