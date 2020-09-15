import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

export const ROUTES : Routes = [
    {path:'post', component: PostComponent},
    {path:'home', component: HomeComponent},
    {path:'register', component: RegisterComponent},
    {path:'login', component: LoginComponent},
    {path:'**', pathMatch : 'full', redirectTo:'home'}

];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);