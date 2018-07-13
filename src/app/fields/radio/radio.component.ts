import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  @Input() myForm: any;
  @Input() key: any;
  @Input() options: any;
  constructor() { }

  ngOnInit() {
  }

}
