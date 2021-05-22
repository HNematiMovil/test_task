import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { icollection } from 'src/app/interfaces/icollection';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-collection-dialog',
  templateUrl: './add-collection-dialog.component.html',
  styleUrls: ['./add-collection-dialog.component.scss']
})
export class AddCollectionDialogComponent implements OnInit {


  new_name :string = "";


  hasError:boolean = false;
  error :string = "";


  constructor(private dialogRef: MatDialogRef<AddCollectionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {collection_names:string[];}, private uiService: UiService
  ) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  Save() {

    // check if collection name is uique
    let index = this.data.collection_names.findIndex(name =>{
      return name == this.new_name
    });

    if(index !== -1){
      // collection name is duplicate
      this.hasError = true;
      this.error = "collection name must be unique";
      return;
    }


    // check if name is valid
    if (!(/[\s\&*()^%$#@!-\/\'\"\;\+]+/gmi.test(this.new_name) || this.new_name == ''))
      this.dialogRef.close(this.new_name);
    else{
      this.error = "Entered value is not a propper collection name";
      this.hasError = true;
    }
   
  }
}
