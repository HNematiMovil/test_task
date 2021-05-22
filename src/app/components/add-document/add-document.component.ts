import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { icollection } from 'src/app/interfaces/icollection';
import { idocument } from 'src/app/interfaces/idocument';
import { ifield } from 'src/app/interfaces/ifield';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit {


  error = "Please enter a proper name"; // display document name errors

  @Input() ShowAddDocument: Boolean = false

  @Input() collection: icollection = {
    name: "",
    documents: []
  }; // to show parent path

  faTrashAlt = faTrashAlt;
  faPlusSquare = faPlusSquare;


  @Input() document: idocument = {
    name: "",
    fields: []
  }


  fields: ifield[] = [
    { fieldName: "", fieldType: "String", fieldValue: "" },

  ];

  /**
   * Event Handlers 
   */
  @Output() CancelClicked = new EventEmitter();
  @Output() SaveClicked = new EventEmitter();


  document_name_error: boolean = false;


  constructor(private uiService: UiService) { }

  ngOnInit(): void {
  }

  AddField() {
    this.fields.push({ fieldName: "", fieldType: "String", fieldValue: "" });
  }
  RemoveField(index: number) {
    // console.log(index);
    this.fields.splice(index, 1);
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  Save(doClose: boolean) {




    /**
     * check if document name is duplicate
     */

    let _documentNames = this.collection.documents.map(doc => doc.name);
    let index = _documentNames.findIndex(name => {
      return name == this.document.name;
    })

    console.log(_documentNames, index);

    if (index !== -1) {
      this.document_name_error = true;
      this.error = "document name must be unique";
      return;
    } else {
      this.document_name_error = false;
    }


    /**
     * check if document name is proper 
     */

    if ((/[\s\&*()^%$#@!-\/\'\"\;\+]+/gmi.test(this.document.name) || this.document.name == "")) {
      this.document_name_error = true;
      this.error = "Please enter a proper name";
      return;
    } else {
      this.document_name_error = false;
    }




    /**
     * check if field names is duplicate
     */
    let fieldNames = this.fields.map(field => field.fieldName);
    if ((new Set(fieldNames)).size != fieldNames.length) {
      // field names have duplicate values
      this.uiService.showAlert({ title: 'Error', message: "<p class='alert-danger'>Field names of a document must be unique</p>" })
      return;
    }

    /**
     * check if fields are added
     */

    if (this.fields.length < 1) {
      this.uiService.showAlert({ title: "Warning", message: "Add at leat one field" });
    } else {


      /**
       * check if field data is set completely
       */
      if (!this.checkFields()) {
        this.uiService.showAlert({ title: 'Wrong Data', message: 'Complete all the fields' })
        return;
      }

      // bind fields to document
      this.document.fields = this.fields;
      // send data back
      this.SaveClicked.emit({ document: this.document, doClose: doClose });
      // reset the form
      this.reset();
    }

  }

  Cancel() {
    // reset
    this.document_name_error = false;
    this.reset();
    this.CancelClicked.emit();
  }


  reset() {
    this.document = {
      name: "",
      fields: []
    }
    this.fields = [{ fieldName: "", fieldType: "String", fieldValue: "" }];
  }


  checkFields() {
    // check all the entered fields
    let fields_status: boolean = true; // true for all fields are set properly false otherwise
    this.fields.forEach((val: ifield, index) => {
      if ((/[\s\&*()^%$#@!-\/\'\"\;\+]+/gmi.test(val.fieldName) || val.fieldName == "") || ((/[\s\&*()^%$#@!-\/\'\"\;\+]+/gmi.test(val.fieldType) || val.fieldType == "")) || ((/[\s\&*()^%$#@!-\/\'\"\;\+]+/gmi.test(val.fieldValue) || val.fieldValue == ""))) {
        fields_status = false;
      }
    });

    return fields_status;
  }

}
