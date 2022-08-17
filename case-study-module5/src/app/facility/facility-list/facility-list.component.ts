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

  constructor(private facilityService: FacilityService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.facilities = this.facilityService.getAll();
  }
}
