import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormDetailsComponent } from './form-details/form-details.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { FormCalculationComponent } from './form-calculation/form-calculation.component';
import { HttpRequestsService } from './http-requests.service';
import {DetailsComponent} from "./details/details.component";
import {UserFormComponent} from "./user-form/user-form.component";
import {RouterModule, Routes} from "@angular/router";
// import { AuthComponent } from './auth/auth.component';
// import { AuthEmployeeComponent } from './auth/auth-employee/auth-employee.component';

const appRoutes: Routes = [
  { path: '', component: FormCalculationComponent },
  { path: 'calculator', component: FormCalculationComponent },
  { path: 'client', component: UserFormComponent },
  // { path: 'login', component: AuthComponent },
  // { path: 'employee', component: AuthEmployeeComponent },
  ];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormDetailsComponent,
    FormContactComponent,
    FormCalculationComponent,
    DetailsComponent,
    UserFormComponent,
    // AuthComponent,
    // AuthEmployeeComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [HttpRequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
