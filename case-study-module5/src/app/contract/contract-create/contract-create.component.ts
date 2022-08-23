import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../contract.service';
import {Router} from '@angular/router';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../customer/customer.service';
import {FacilityService} from '../../facility/facility.service';
import {Facility} from '../../model/facility';
import {ToastrService} from 'ngx-toastr';

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
    deposit: new FormControl('', [Validators.pattern('^[1-9]+\\d$')])
  });

  customers: Customer[] = [];

  facilities: Facility[] = [];

  constructor(private contractService: ContractService,
              private customerService: CustomerService,
              private facilitiesService: FacilityService,
              private toast: ToastrService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCustomer();
    this.getFacility();
  }

  getCustomer() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    });
  }

  getFacility() {
    this.facilitiesService.getAll().subscribe(facilities => {
      this.facilities = facilities;
    });
  }

  submit() {
    const contract = this.contractForm.value;
    contract.customer = {
      name: contract.customer
    };

    contract.facility = {
      name: contract.facility
    };

    this.contractService.saveContract(contract).subscribe(() => {
      this.contractForm.reset();
      this.toast.success('Added Contract Success..', 'Notification..');
      this.router.navigate(['/contract/list']);
    }, e => {
      console.log(e);
    });
  }
}
