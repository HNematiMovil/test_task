import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { AddCollectionDialogComponent } from '../components/add-collection-dialog/add-collection-dialog.component';
import { AddFieldDialogComponent } from '../components/add-field-dialog/add-field-dialog.component';
import { AlertDialogComponent } from '../components/alert-dialog/alert-dialog.component';
import { iAlertData } from '../interfaces/iAlertData';
import { icollection } from '../interfaces/icollection';
import { idocument } from '../interfaces/idocument';
import { ifield } from '../interfaces/ifield';


@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(private dialog: MatDialog) { }

    /**
     * opens add collection dialog 
     * 
     * @param collections string array of collection names to check if the collection name is duplicate
     * @returns the observable of string name of new collection 
     */
  openAddCollectionDialog(collections:string[]): Observable<string> {

    const dialogRef = this.dialog.open(AddCollectionDialogComponent, {
      data: {collection_names : collections},

    });

    return dialogRef.afterClosed();

  }


  
  /**
   * opens add Field name
   * @param fieldnames string name of field names to check if field name is duplicate
   * @returns observale of field in ifield interface
   */
  openAddFieldDialog(fieldnames:string[]): Observable<ifield> {
    const dialogRef = this.dialog.open(AddFieldDialogComponent, {
      width: 'auto',
      data: {fieldnames : fieldnames}
    });

    return dialogRef.afterClosed();
  }


  /**
   * 
   * @param data the title and message to show in iAlertData interface {title:'YOUR TITLE', message:'YOUR MESSAGE'}
   * 
   */
  showAlert(data: iAlertData) {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      width: "auto",
      data: data
    });

   
  }


}
