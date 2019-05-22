import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'news-details',
    loadChildren: './pages/news-details/news-details.module#NewsDetailsPageModule' },
  { 
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule'
  },
  {
    path: 'signup',
    loadChildren: './pages/signup/signup.module#SignupPageModule'
  },
  {
    path: 'about',
    loadChildren: './pages/about/about.module#AboutPageModule'
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
