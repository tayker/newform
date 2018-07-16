import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Input() prop;
  @Input() myForm;
  @Input() case;
  @Output() onRemoveControl = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  removeControl(arrayField, i) {
    this.onRemoveControl.emit({arrayField: arrayField, i: i});
  }
}
