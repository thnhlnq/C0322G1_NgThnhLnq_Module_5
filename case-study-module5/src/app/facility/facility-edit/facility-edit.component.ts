import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FacilityService} from '../../service/facility.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  facilitiesForm: FormGroup;
  id: number;

  constructor(private facilitiesService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = + paramMap.get('id');
      const facility = this.getFacility(this.id);
      this.facilitiesForm = new FormGroup({
        id: new FormControl(facility.id),
        facilityType: new FormControl(facility.facilityType),
        name: new FormControl(facility.name),
        area: new FormControl(facility.area),
        cost: new FormControl(facility.cost),
        maxPeople: new FormControl(facility.maxPeople),
        rentType: new FormControl(facility.rentType),
        standardRoom: new FormControl(facility.standardRoom),
        descriptionOtherConvenience: new FormControl(facility.descriptionOtherConvenience),
        poolArea: new FormControl(facility.poolArea),
        numberFloor: new FormControl(facility.numberFloor),
        facilityFree: new FormControl(facility.facilityFree),
        image: new FormControl(facility.image)
      });
    });
  }

  ngOnInit() {
  }

  getFacility(id: number) {
    return this.facilitiesService.findById(id);
  }

  editFacility(id: number) {
    const facility = this.facilitiesForm.value;
    this.facilitiesService.editFacility(id, facility);
    this.router.navigate(['facility/list']);
  }
}
