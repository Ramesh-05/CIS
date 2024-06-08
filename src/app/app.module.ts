import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UserListComponent,
    AddUserComponent,
    UpdateUserComponent,
    ViewUserComponent,
    CategoryListComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    ViewCategoryComponent,
    CardListComponent,
    AddCardComponent,
    UpdateCardComponent,
    ViewCardComponent,
    CompanyListComponent,
    AddCompanyComponent,
    UpdateCompanyComponent,
    ViewCompanyComponent,
    OrganizationListComponent,
    AddOrganizationComponent,
    UpdateOrgComponent,
    ViewOrgComponent,
    AdminComponent,
    UserComponent,
    ChangePasswordComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
