import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewuserComponent } from './pages/newuser/newuser.component';
import { UpdateuserComponent } from './pages/updateuser/updateuser.component';
import { UserdetailsComponent } from './pages/userdetails/userdetails.component';

const routes: Routes = [
  { path: '', redirectTo: 'home/1', pathMatch: 'full' },
  { path: 'home/:page', component: HomeComponent},
  { path: 'newuser', component: NewuserComponent },
  { path: 'updateuser/:userId', component: UpdateuserComponent },
  { path: 'userdetails/:userId', component: UserdetailsComponent},
  { path: '**', redirectTo: 'home/1', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
