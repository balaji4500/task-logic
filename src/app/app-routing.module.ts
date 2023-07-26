import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MytaskComponent } from './mytask/mytask.component';
import { CompleteComponent } from './complete/complete.component';
import { DeleteComponent } from './delete/delete.component';
import { ImportantComponent } from './important/important.component';

const routes: Routes = [
  { path:"task",component:MytaskComponent },
  {path:"complete",component:CompleteComponent},
  {path:'delete',component:DeleteComponent},
  {path:"important",component:ImportantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
