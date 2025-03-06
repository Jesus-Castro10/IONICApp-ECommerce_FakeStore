import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymetInformation } from '../../interfaces/paymet-information';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
  standalone: false
})
export class PersonalInformationComponent implements OnInit {

  @Input() payment!: PaymetInformation;
  @Input() total = 0;
  constructor() { }

  ngOnInit() {
    console.log("payment" + this.payment);
  }

}
