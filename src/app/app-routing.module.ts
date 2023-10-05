import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from '../admin/admin.module';
import { UserModule } from '../user/user.module';

const routes: Routes = [
  {
    path:'admin',loadChildren:()=>import('../admin/admin.module').then(mod=>AdminModule)
  },
  {
    path:'user',loadChildren:()=>import('../user/user.module').then(mod=>UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
