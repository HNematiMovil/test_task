import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { iAlertData } from 'src/app/interfaces/iAlertData';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<AlertDialogComponent> , 
    @Inject(MAT_DIALOG_DATA) public data : iAlertData
    ) { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close();
  }
}
