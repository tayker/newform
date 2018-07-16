import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  @Input() myForm: any;
  @Input() prop: any;
  @Input() options: any;
  @Input() case: string;
  constructor() { }

  ngOnInit() {
  }

}
