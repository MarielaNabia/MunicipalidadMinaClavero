import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { QuestionComponent } from './question/question.component';
import { LoginComponent } from './login/login.component';
import { ResponseComponent } from './response/response.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
  DashboardPageComponent,
  QuestionComponent,
  LoginComponent,
  ResponseComponent,
  NavbarComponent
  
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule
  ],
  exports: [
    DashboardPageComponent,
    QuestionComponent,
    LoginComponent,
    ResponseComponent,
    NavbarComponent,
    
  ],
  providers: [],
})
export class DashboardModule {}
