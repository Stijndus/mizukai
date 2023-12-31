import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'products',  loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
  { path: '**', loadChildren: () => import('./pages/errors/not-found/not-found.module').then(m => m.NotFoundModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
