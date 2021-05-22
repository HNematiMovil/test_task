import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ifield } from "../../interfaces/ifield";

@Component({
  selector: 'app-single-field',
  templateUrl: './single-field.component.html',
  styleUrls: ['./single-field.component.scss'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:SingleFieldComponent,
      multi:true
    }
  ]
})
export class SingleFieldComponent implements OnInit ,ControlValueAccessor {

  field: ifield = {
    fieldName: "",
    fieldType: "String",
    fieldValue: ""
  };

  onChange: any = (value : ifield) => {}
  onTouch: any = (value : ifield) => {}

  constructor() { }
  writeValue(obj: ifield): void {
   this.field = obj;
  }
  registerOnChange(fn: any): void {
   this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  ngOnInit(): void {
  }


}
