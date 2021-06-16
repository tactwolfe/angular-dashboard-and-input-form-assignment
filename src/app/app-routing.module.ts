import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './auth.guard';
import { DashboardcontainerComponent } from './dashboardcontainer/dashboardcontainer.component';

const routes: Routes = [
  { 
    path : '' , 
    component : LoginComponent
  },
  {
     path : 'signup' , 
     component : SignUpComponent
  },
  { 
    path : 'dashboard' , 
    component : DashboardcontainerComponent , 
    canActivate : [AuthGuard] ,
    children : [
      { path : '' , component : DashboardComponent },
      { path : 'product' ,component : ProductListComponent },
      { path : 'product_create',component : CreateProductComponent },
      { path : 'product_edit/:id',component : EditProductComponent },
      { path : 'product_view/:id',component : ViewProductComponent },
      { path : 'user' , component : UserListComponent },
      { path : 'user_create' , component : CreateUserComponent },
      { path : 'user_edit/:id' , component : EditUserComponent },
      { path : 'user_view/:id', component : ViewUserComponent },
    ]
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
