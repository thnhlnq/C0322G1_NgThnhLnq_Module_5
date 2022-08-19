import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
      this.id = +paramMap.get('id');
      const facility = this.getFacility(this.id);
      this.facilitiesForm = new FormGroup({
        id: new FormControl(facility.id),
        facilityType: new FormControl(facility.facilityType, [Validators.required]),
        name: new FormControl(facility.name, [Validators.required, Validators.pattern('^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$')]),
        area: new FormControl(facility.area, [Validators.required]),
        cost: new FormControl(facility.cost, [Validators.required]),
        maxPeople: new FormControl(facility.maxPeople, [Validators.required]),
        rentType: new FormControl(facility.rentType, [Validators.required]),
        standardRoom: new FormControl('Normal', [Validators.required]),
        descriptionOtherConvenience: new FormControl('No', [Validators.required]),
        poolArea: new FormControl(1, [Validators.required, Validators.pattern('^[1-9]+$')]),
        numberFloor: new FormControl(1, [Validators.required, Validators.pattern('^[1-9]+$')]),
        facilityFree: new FormControl('No', [Validators.required]),
        image: new FormControl(facility.image, [Validators.required])
      });
    });
  }

  type = '';

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

  selectType(value) {
    this.type = value;
  }
}
