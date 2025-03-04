import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
  standalone: false
})
export class PersonalInformationComponent implements OnInit {

  @Input() isEdit!: true;

  constructor() { }

  ngOnInit() { }

}
