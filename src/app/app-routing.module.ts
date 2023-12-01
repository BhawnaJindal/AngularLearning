import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {
    path:'home',
    component:MycomponentComponent
  },
  {
    path:'Astrology',
    component:SecondComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
