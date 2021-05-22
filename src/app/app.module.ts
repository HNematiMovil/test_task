import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FormsModule} from "@angular/forms";

// angular material components
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDialog , MatDialogModule, MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { CollectionComponent } from './components/collection/collection.component';
import { DocumentComponent } from './components/document/document.component';
import { FieldComponent } from './components/field/field.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';

import { AddDocumentComponent } from './components/add-document/add-document.component';
import { SingleFieldComponent } from './components/single-field/single-field.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddFieldDialogComponent } from './components/add-field-dialog/add-field-dialog.component';

import { AddCollectionDialogComponent } from './components/add-collection-dialog/add-collection-dialog.component';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CollectionComponent,
    DocumentComponent,
    FieldComponent,
    IconButtonComponent,
    AddDocumentComponent,
    SingleFieldComponent,
    AddFieldDialogComponent,
    AddCollectionDialogComponent,
    AlertDialogComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
