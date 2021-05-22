import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDocumentComponent } from './components/add-document/add-document.component';
import { AddFieldDialogComponent } from './components/add-field-dialog/add-field-dialog.component';
import { MainComponent } from './components/main/main.component';
import { SingleFieldComponent } from './components/single-field/single-field.component';


const routes: Routes = [
  {path: '' , component:MainComponent},
  {path: 'document' , component:AddDocumentComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
