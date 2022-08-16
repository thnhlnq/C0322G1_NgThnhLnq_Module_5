import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './customer/list/list.component';
import {CreateComponent} from './customer/create/create.component';
import {HomeComponent} from './home/home.component';

// const routes: Routes = [];
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customer/list', component: ListComponent},
  {path: 'customer/create', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
