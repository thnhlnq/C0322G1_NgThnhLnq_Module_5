import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../facility.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {

  facilities: Facility[] = [];

  id: number;

  name: string;

  nameSearch: string;

  page = 1;

  constructor(private facilityService: FacilityService,
              private toast: ToastrService) {
  }

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
      this.toast.error('Delete Facility Success..', 'Notification..');
      this.getAll();
    }, e => {
      console.log(e);
    });
  }

  search() {
    return this.facilityService.searchFacility(this.nameSearch).subscribe(listSearch => {
      this.facilities = listSearch;
      this.page = 1;
    });
  }
}
