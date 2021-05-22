import { Component, OnInit , Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ifield } from 'src/app/interfaces/ifield';

@Component({
  selector: 'app-add-field-dialog',
  templateUrl: './add-field-dialog.component.html',
  styleUrls: ['./add-field-dialog.component.scss']
})
export class AddFieldDialogComponent implements OnInit {

  field:ifield = {
    fieldName :"",
    fieldType :"String",
    fieldValue : null
  }

  error :string = "";
  has_error : boolean = false;
  

  constructor(
    public dialogRef: MatDialogRef<AddFieldDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {fieldnames : string[]}) {}

  ngOnInit(): void {
  }


  closeDialog(){
    this.dialogRef.close();
  }

  Save(){

    // reset error
    this.has_error = false;

    /**
     * check if field name is unique
     */

    let index = this.data.fieldnames.findIndex(name =>{
      return name == this.field.fieldName
    })

    if(index !== -1){
      this.has_error = true;
      this.error = "field names must be unique";

      return;
    }

    /**
     * check if field name is proper
     */

     if ((/[\s\&*()^%$#@!-\/\'\"\;\+]+/gmi.test(this.field.fieldName) || this.field.fieldName == "")) {
       this.has_error=true;
       this.error = "Please enter a proper field name";
       return;
     }

     

     this.dialogRef.close(this.field);
  }

}
