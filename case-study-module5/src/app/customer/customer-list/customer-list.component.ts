import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../customer.service';
import {ToastrService} from 'ngx-toastr';
import {CustomerTypeService} from '../customer-type.service';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];

  customerTypes: CustomerType[] = [];

  id: number;

  name: string;

  nameSearch1 = '';

  nameSearch2 = '';

  page = 1;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    });
    this.customerTypeService.getAll().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    });
  }

  openDelete(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.toast.success('Delete Customer Success..', 'Notification');
      this.getAll();
    }, e => {
      console.log(e);
    });
  }

  search() {
    return this.customerService.searchCustomer(this.nameSearch1, this.nameSearch2).subscribe(listSearch => {
      this.customers = listSearch;
      this.nameSearch2 = '';
      this.page = 1;
    });
  }
}
