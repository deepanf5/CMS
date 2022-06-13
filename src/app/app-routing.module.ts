import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeleteCustomerComponent } from './components/delete/delete-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { LoginComponent } from './components/login/login.component';
import { SingleCustomerComponent } from './components/single-customer/single-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"dashboard/card-view",component:CardViewComponent},
  {path:"dashboard/list-view",component:ListViewComponent},
  {path:"dashboard/add-customer",component:AddCustomerComponent},
  {path:"dashboard/delete-customer",component:DeleteCustomerComponent},
  {path:"dashboard/update-customer",component:UpdateCustomerComponent},
  {path:"dashboard/update-customer/:id",component:EditCustomerComponent},
  {path:"dashboard/all-orders",component:AllOrdersComponent},
  {path:"customer-orders/:id",component:SingleCustomerComponent},
  


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
