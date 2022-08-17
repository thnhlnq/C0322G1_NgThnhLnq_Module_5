import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  id: number;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = + paramMap.get('id');
      const customer = this.getCustomer(this.id);
      this.customerForm = new FormGroup({
        id: new FormControl(customer.id),
        name: new FormControl(customer.name),
        dateOfBirth: new FormControl(customer.dateOfBirth),
        gender: new FormControl(customer.gender),
        idCard: new FormControl(customer.idCard),
        phone: new FormControl(customer.phone),
        email: new FormControl(customer.email),
        address: new FormControl(customer.address),
        customerType: new FormControl(customer.customerType),
      });
    });
  }

  ngOnInit() {
  }

  getCustomer(id: number) {
    return this.customerService.findById(id);
  }

  editCustomer(id: number) {
    const customer = this.customerForm.value;
    this.customerService.editCustomer(id, customer);
    this.router.navigate(['customer/list']);
  }
}
