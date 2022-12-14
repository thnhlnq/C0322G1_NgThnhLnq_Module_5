import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../facility.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  facilitiesForm: FormGroup;
  id: number;

  constructor(private facilitiesService: FacilityService,
              private toast: ToastrService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getFacility(this.id);
    });
  }

  type = '';

  ngOnInit() {
  }

  getFacility(id: number) {
    return this.facilitiesService.findById(id).subscribe(facility => {
      this.facilitiesForm = new FormGroup({
        id: new FormControl(facility.id),
        facilityType: new FormControl(facility.facilityType, [Validators.required]),
        name: new FormControl(facility.name, [Validators.required, Validators.pattern('^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$')]),
        area: new FormControl(facility.area, [Validators.required]),
        cost: new FormControl(facility.cost, [Validators.required]),
        maxPeople: new FormControl(facility.maxPeople, [Validators.required, Validators.pattern('^[1-9]+\\d$')]),
        rentType: new FormControl(facility.rentType, [Validators.required]),
        standardRoom: new FormControl('Normal', [Validators.required]),
        descriptionOtherConvenience: new FormControl('No', [Validators.required]),
        poolArea: new FormControl(11, [Validators.required, Validators.pattern('^[1-9]+\\d$')]),
        numberFloor: new FormControl(11, [Validators.required, Validators.pattern('^[1-9]+\\d$')]),
        facilityFree: new FormControl('No'),
        image: new FormControl(facility.image)
      });
    });
  }

  editFacility(id: number) {
    const facility = this.facilitiesForm.value;
    this.facilitiesService.editFacility(id, facility).subscribe(() => {
      this.router.navigate(['/facility/list']);
      this.toast.success('Edited Facility Success..', 'Notification..');
    }, e => {
      console.log(e);
    });
  }

  selectType(value) {
    this.type = value;
  }
}
