import {Injectable} from '@angular/core';
import {Facility} from '../model/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  facilities: Facility[] = [{
    id: 1,
    facilityType: 'Villa',
    name: 'Phòng Suite Hướng Biển',
    area: 85.8,
    cost: 1000,
    maxPeople: 5,
    rentType: 'Year',
    standardRoom: 'Vip',
    descriptionOtherConvenience: 'Có TV',
    poolArea: 50,
    numberFloor: 5,
    facilityFree: '',
    image: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg'
  }, {
    id: 2,
    facilityType: 'House',
    name: 'Phòng Superior Hướng Hồ',
    area: 40.1,
    cost: 800,
    maxPeople: 7,
    rentType: 'Month',
    standardRoom: 'Normal',
    descriptionOtherConvenience: 'Có Hồ Bơi',
    poolArea: null,
    numberFloor: 2,
    facilityFree: '',
    image: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-F-370x239.jpg'
  }, {
    id: 3,
    facilityType: 'Room',
    name: 'Phòng Superior Hướng Hồ',
    area: 40.1,
    cost: 800,
    maxPeople: 7,
    rentType: 'Month',
    standardRoom: 'Normal',
    descriptionOtherConvenience: 'Có Hồ Bơi',
    poolArea: null,
    numberFloor: 2,
    facilityFree: '',
    image: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg'
  }, {
    id: 4,
    facilityType: 'Villa',
    name: 'Biệt Thự Hướng Vườn Có Hồ Bơi',
    area: 300,
    cost: 1200,
    maxPeople: 7,
    rentType: 'Month',
    standardRoom: 'Normal',
    descriptionOtherConvenience: 'Có Hồ Bơi',
    poolArea: null,
    numberFloor: 2,
    facilityFree: '',
    image: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Pool_Villas-F-370x239.jpg'
  }, {
    id: 5,
    facilityType: 'Villa',
    name: 'Biệt Thự Hướng Biển Có Hồ Bơi',
    area: 900,
    cost: 1500,
    maxPeople: 7,
    rentType: 'Month',
    standardRoom: 'Normal',
    descriptionOtherConvenience: 'Có Hồ Bơi',
    poolArea: null,
    numberFloor: 2,
    facilityFree: '',
    image: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Beach_Pool_Villas-_Exterior-1-F-370x239.jpg'
  }, {
    id: 6,
    facilityType: 'Villa',
    name: 'Phòng Suite Hướng Biển',
    area: 40.1,
    cost: 800,
    maxPeople: 7,
    rentType: 'Month',
    standardRoom: 'Normal',
    descriptionOtherConvenience: 'Có Hồ Bơi',
    poolArea: null,
    numberFloor: 2,
    facilityFree: '',
    image: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg'
  }];

  constructor() {
  }

  getAll() {
    return this.facilities;
  }

  saveFacility(facility) {
    this.facilities.push(facility);
  }
  findById(id: number) {
    return this.facilities.find(facility => facility.id === id);
  }

  editFacility(id: number, facility: Facility) {
    for (let i = 0; i < this.facilities.length; i++) {
      if (this.facilities[i].id === id) {
        this.facilities[i] = facility;
      }
    }
  }

  deleteFacility(id: number) {
    this.facilities = this.facilities.filter(facility => {
      return facility.id !== id;
    });
  }
}
