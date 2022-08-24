import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../customer.service';
import {ToastrService} from 'ngx-toastr';
import {Customer} from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];

  id: number;

  name: string;

  nameSearch: string;

  page = 1;

  constructor(private customerService: CustomerService,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
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
    return this.customerService.searchCustomer(this.nameSearch).subscribe(listSearch => {
      this.customers = listSearch;
      this.page = 1;
    });
  }
}
