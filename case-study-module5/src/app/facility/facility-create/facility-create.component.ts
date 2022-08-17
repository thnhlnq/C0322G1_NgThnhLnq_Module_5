import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {

  facilitiesForm: FormGroup = new FormGroup({
    id: new FormControl(),
    facilityType: new FormControl(),
    name: new FormControl(),
    area: new FormControl(),
    cost: new FormControl(),
    maxPeople: new FormControl(),
    rentType: new FormControl(),
    standardRoom: new FormControl(),
    descriptionOtherConvenience: new FormControl(),
    poolArea: new FormControl(),
    numberFloor: new FormControl(),
    facilityFree: new FormControl(),
    image: new FormControl()
  });

  constructor(private facilitiesService: FacilityService, private router: Router) {
  }

  ngOnInit() {
  }

  submit() {
    const facility = this.facilitiesForm.value;
    this.facilitiesService.saveFacility(facility);
    this.facilitiesForm.reset();
    this.router.navigate(['facility/list']);
  }
}
