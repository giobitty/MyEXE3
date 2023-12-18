import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NetworkComponent } from './network/network.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
{path: 'Login', component: LoginComponent, title: 'Login component',},
{path: 'Network', component: NetworkComponent, title: 'Network component',},
{path: 'Profile', component: ProfileComponent, title: 'Profile component',},
{path: '', redirectTo: 'login', pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  title='MY EXE 3';
 }
