import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../contract.service';
import {Router} from '@angular/router';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../customer/customer.service';
import {FacilityService} from '../../facility/facility.service';
import {Facility} from '../../model/facility';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractForm: FormGroup = new FormGroup({
    id: new FormControl(),
    customer: new FormControl(),
    facility: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl(),
    deposit: new FormControl('', [Validators.pattern('^[1-9]+$')])
  });

  customers: Observable<Customer[]> = this.customerService.getAll();

  facilities: Facility[] = this.facilitiesService.getAll();

  constructor(private contractService: ContractService,
              private customerService: CustomerService,
              private facilitiesService: FacilityService,
              private router: Router) {
  }

  ngOnInit() {
  }

  submit() {
    const contract = this.contractForm.value;
    this.contractService.saveContract(contract);
    this.contractForm.reset();
    this.router.navigate(['contract/list']);
  }
}
