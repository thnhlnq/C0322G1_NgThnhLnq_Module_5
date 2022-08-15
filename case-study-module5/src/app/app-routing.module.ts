import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';

const routes: Routes = [{
  path: 'customer/list',
  component: CustomerListComponent
}, {
  path: 'customer/create',
  component: CustomerCreateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
