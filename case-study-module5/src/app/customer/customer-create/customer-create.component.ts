import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    dayOfBirth: new FormControl(),
    gender: new FormControl(),
    idCard: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    customerType: new FormControl()
  });

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.saveCustomer(customer);
    this.customerForm.reset();
  }
}
