import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.customers = this.customerService.getAll();
  }
}
