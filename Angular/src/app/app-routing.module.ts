import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

////////components
import { HomeComponent } from './components/home/home.component';
import { ApplyToJobComponent } from './components/apply-to-job/apply-to-job.component';
import { FollowUpComponent } from './components/follow-up/follow-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'apply-to-job', component: ApplyToJobComponent },
  { path: 'follow-up', component: FollowUpComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
