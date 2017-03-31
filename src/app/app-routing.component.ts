import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Login} from "./Account/Login";
import {HomeRouter} from "./Account/home.routing";
import {home} from "./Account/home";
import {AuthGuard} from "./Auth/Auth";


/**
 * Route constant
 */
const routes: Routes = [
  { path: 'login', component:Login},
  { path: '', component:home,canActivate: [AuthGuard],children:HomeRouter},
  { path: '**', component:home,canActivate: [AuthGuard],children:HomeRouter},
];

/**
 * App routing module
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
