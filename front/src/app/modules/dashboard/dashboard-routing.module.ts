import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { QuestionComponent } from '../question/question.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionComponent,
    children: [
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
