import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  @Input() myForm;
  @Input() prop;
  @Input() case;
  @Output() onRemoveControl = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  removeControl(arrayField, i) {
    this.onRemoveControl.emit({arrayField: arrayField, i: i});
  }
}
