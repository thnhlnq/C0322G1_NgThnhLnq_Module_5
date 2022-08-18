import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {

  facilities: Facility[] = [];

  id: number;

  name: string;

  constructor(private facilityService: FacilityService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.facilities = this.facilityService.getAll();
  }

  openDelete(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  delete(id: number) {
    this.facilityService.deleteFacility(id);
    this.facilities = this.facilityService.getAll();
  }
}
