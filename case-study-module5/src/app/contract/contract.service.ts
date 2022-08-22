import {Injectable} from '@angular/core';
import {Contract} from '../model/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  contracts: Contract[] = [{
    id: 1,
    customer: {
      id: 1,
      name: 'Nguyễn Văn A'
    },
    facility: {
      id: 1,
      name: 'Phòng Suite Hướng Biển'
    },
    startDate: '10/10/2019',
    endDate: '11/18/2019',
    deposit: 1500
  }, {
    id: 2,
    customer: {
      id: 1,
      name: 'Trần Thị B'
    },
    facility: {
      id: 1,
      name: 'Biệt Thự Hướng Biển Có Hồ Bơi'
    },
    startDate: '10/11/2021',
    endDate: '11/11/2021',
    deposit: 2000
  }];

  constructor() {
  }

  getAll() {
    return this.contracts;
  }

  saveContract(contract) {
    this.contracts.push(contract);
  }
}
