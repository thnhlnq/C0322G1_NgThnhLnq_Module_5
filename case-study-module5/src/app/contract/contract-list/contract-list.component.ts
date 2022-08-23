import {Component, OnInit} from '@angular/core';
import {Contract} from '../../model/contract';
import {ContractService} from '../contract.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  contracts: Contract[] = [];

  keySearch: string;

  page = 1;

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.contractService.getAll().subscribe(contracts => {
      this.contracts = contracts;
    });
  }

  search() {
    return this.contractService.searchContract(this.keySearch).subscribe(listSearch => {
      this.contracts = listSearch;
      this.page = 1;
    });
  }
}
