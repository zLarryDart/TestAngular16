import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from './store/store.module';
import { authGuard } from './auth.guard';


const authModule = () => import('./auth/auth.module').then(x => x.AuthModule);
const storeModule = () => import('./store/store.module').then(x => x.StoreModule);

const routes: Routes = [
  { path: '', loadChildren: authModule },
  { path: 'store', loadChildren: storeModule ,canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
