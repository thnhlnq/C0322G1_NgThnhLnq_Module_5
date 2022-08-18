import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  customers: Customer[] = [{
    id: 1,
    name: 'Nguyễn Văn A',
    dateOfBirth: '10/10/1999',
    gender: 'Male',
    idCard: 124563987,
    phone: 901452369,
    email: 'vana@gmail.com',
    address: 'Đà Nẵng',
    customerType: 'Diamond'
  }, {
    id: 2,
    name: 'Trần Thị B',
    dateOfBirth: '1997-10-10',
    gender: 'Female',
    idCard: 784563129,
    phone: 741256394,
    email: 'thib@gmail.com',
    address: 'Quảng Nam',
    customerType: 'Gold'
  }];

  constructor() {
  }

  getAll() {
    return this.customers;
  }

  saveCustomer(customer) {
    this.customers.push(customer);
  }

  findById(id: number) {
    return this.customers.find(customer => customer.id === id);
  }

  editCustomer(id: number, customer: Customer) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id === id) {
        this.customers[i] = customer;
      }
    }
  }

  deleteCustomer(id: number) {
    this.customers = this.customers.filter(customer => {
      return customer.id !== id;
    });
  }
}
