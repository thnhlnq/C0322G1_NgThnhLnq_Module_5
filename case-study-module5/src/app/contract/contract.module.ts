import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContractRoutingModule} from './contract-routing.module';
import {ContractListComponent} from './contract-list/contract-list.component';
import {ContractCreateComponent} from './contract-create/contract-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    ContractListComponent,
    ContractCreateComponent
  ], imports: [
    CommonModule,
    ContractRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class ContractModule {
}
