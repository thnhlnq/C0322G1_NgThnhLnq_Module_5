import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../facility.service';

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
    this.facilityService.getAll().subscribe(facilities => {
      this.facilities = facilities;
    });
  }

  openDelete(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  deleteFacility(id: number) {
    this.facilityService.deleteFacility(id).subscribe(() => {
      this.getAll();
    }, e => {
      console.log(e);
    });
  }
}
