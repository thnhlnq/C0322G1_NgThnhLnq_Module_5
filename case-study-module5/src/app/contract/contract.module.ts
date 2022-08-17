import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContractRoutingModule} from './contract-routing.module';
import {ContractListComponent} from './contract-list/contract-list.component';
import {ContractCreateComponent} from './contract-create/contract-create.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ContractListComponent,
    ContractCreateComponent
  ], imports: [
    CommonModule,
    ContractRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContractModule {
}
