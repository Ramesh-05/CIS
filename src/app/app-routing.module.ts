import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { CardListComponent } from './card-list/card-list.component';
import { AddCardComponent } from './add-card/add-card.component';
import { UpdateCardComponent } from './update-card/update-card.component';
import { ViewCardComponent } from './view-card/view-card.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { ViewCompanyComponent } from './view-company/view-company.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { AddOrganizationComponent } from './add-organization/add-organization.component';
import { UpdateOrgComponent } from './update-org/update-org.component';
import { ViewOrgComponent } from './view-org/view-org.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  { path:"home",component:HomeComponent,canActivate:[AuthGuard]},
  { path:'admin', component:AdminComponent},
  { path:'user', component:UserComponent},
  { path:"",redirectTo:"admin",pathMatch:'full'},
  { path:"user-list",component:UserListComponent,canActivate:[AuthGuard]},
  { path:"add-user",component:AddUserComponent,canActivate:[AuthGuard]},
  { path:"update-user/:memberId",component:UpdateUserComponent,canActivate:[AuthGuard]},
  { path:"view-user/:memberId",component:ViewUserComponent,canActivate:[AuthGuard]},
  { path:"category-list",component:CategoryListComponent,canActivate:[AuthGuard]},
  { path:"add-category",component:AddCategoryComponent,canActivate:[AuthGuard]},
  { path:"category-list",component:CategoryListComponent,canActivate:[AuthGuard]},
  { path:"update-category/:categoryId",component:UpdateCategoryComponent,canActivate:[AuthGuard]},
  { path:"view-category/:categoryId",component:ViewCategoryComponent,canActivate:[AuthGuard]},
  { path:"card-list",component:CardListComponent,canActivate:[AuthGuard]},
  { path:"add-card",component:AddCardComponent,canActivate:[AuthGuard]},
  { path:"update-card/:cardId",component:UpdateCardComponent,canActivate:[AuthGuard]},
  { path:"view-card/:cardId",component:ViewCardComponent,canActivate:[AuthGuard]},
  { path:"company-list",component:CompanyListComponent,canActivate:[AuthGuard]},
  { path:"add-company",component:AddCompanyComponent,canActivate:[AuthGuard]},
  { path:"update-company/:companyId",component:UpdateCompanyComponent,canActivate:[AuthGuard]},
  { path:"view-company/:companyId",component:ViewCompanyComponent,canActivate:[AuthGuard]},
  { path:"org-list",component:OrganizationListComponent,canActivate:[AuthGuard]},
  { path:"add-organization",component:AddOrganizationComponent,canActivate:[AuthGuard]},
  { path:"update-organization/:id",component:UpdateOrgComponent,canActivate:[AuthGuard]},
  { path:"view-organization/:id",component:ViewOrgComponent,canActivate:[AuthGuard]},
  { path:"change-password",component:ChangePasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
