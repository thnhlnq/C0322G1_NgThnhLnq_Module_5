import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FacilityService} from '../facility.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {

  facilitiesForm: FormGroup = new FormGroup({
    id: new FormControl(),
    facilityType: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.pattern('^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$')]),
    area: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required]),
    maxPeople: new FormControl('', [Validators.required, Validators.pattern('^[1-9]+\\d$')]),
    rentType: new FormControl('', [Validators.required]),
    standardRoom: new FormControl('', [Validators.required]),
    descriptionOtherConvenience: new FormControl('', [Validators.required]),
    poolArea: new FormControl('', [Validators.required, Validators.pattern('^[1-9]+\\d$')]),
    numberFloor: new FormControl('', [Validators.required, Validators.pattern('^[1-9]+\\d$')]),
    facilityFree: new FormControl(''),
    image: new FormControl('')
  });

  constructor(private facilitiesService: FacilityService,
              private toast: ToastrService,
              private router: Router) {
  }

  type = '';

  ngOnInit() {
  }

  submit() {
    const facility = this.facilitiesForm.value;
    this.facilitiesService.saveFacility(facility).subscribe(() => {
      this.facilitiesForm.reset();
      this.toast.success('Added Facility Success..', 'Notification..');
      this.router.navigate(['/facility/list']);
    }, e => {
      console.log(e);
    });
  }

  selectType(value) {
    this.type = value;
  }
}
