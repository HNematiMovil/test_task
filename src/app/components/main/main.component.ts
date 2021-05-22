/**
 * Main Component
 * this component is the base route of this project
 * the component contains the main 3 components collections, documents and fields
 * 
 * 
 */

import { Component, Input, OnInit } from '@angular/core';
import { iAddDocumentResult } from 'src/app/interfaces/iAddDocumentResult';
import { icollection } from 'src/app/interfaces/icollection';
import { idocument } from 'src/app/interfaces/idocument';
import { ifield } from 'src/app/interfaces/ifield';
import { UiService } from 'src/app/services/ui.service';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  ShowAddDocument: Boolean = false; // used to toggle the add document panel

  
  selected_collection_index: number = -1; // used to add css classes to html 
  selected_document_index: number = -1;

  // used to identify the selected collection to show the documents and fields
  @Input() __collection: icollection = {
    name: "",
    documents: []
  };

  // the current selected document to show the fields ro remove
  @Input() __document: idocument = {
    name: "",
    fields : []
  }


  /**
   * all the collection is stored here
   * to init the project i've added some fake data
   */
  @Input() collections: icollection[] = [
    {
      name: "collection1",
      documents: [
        { name: "c1doc1", fields: [{ fieldName: "f11", fieldType: "String", fieldValue: "v11" }] },
        { name: "c1doc2", fields: [{ fieldName: "f21", fieldType: "String", fieldValue: "v21" }] },
      ]
    },
    {
      name: "collection2",
      documents: [
        { name: "c2doc1", fields: [{ fieldName: "f12", fieldType: "String", fieldValue: "v12" }] },
        {
          name: "c2doc2", fields: [
            { fieldName: "f22", fieldType: "String", fieldValue: "v22" },
            { fieldName: "f62", fieldType: "String", fieldValue: "v22" },
            { fieldName: "f72", fieldType: "String", fieldValue: "v22" },
          ]
        },
      ]
    }

  ];


  // font awesome inits
  faAngleRight = faAngleRight;

  // init ui service 
  constructor(private uiService: UiService) { }


  ngOnInit(): void {
  }


 /**
  * when user clicks on single collection the collection is stored in __collection variable
  * @param collection 
  */
  CollectionSelected(collection: icollection) {
    
    this.__document = { // reset the selected document
      name: "",
      fields : []
    }
    this.__collection = collection;

    this.selected_collection_index = this.FindCollectionByName(collection.name);
    this.selected_document_index = -1; // reset selected document index to remove correspoing css classes

  }

  /**
   * 
   * @param document 
   */
  DoucmentSelected(document: idocument) {

    this.__document = document;
    this.selected_document_index = this.FindDocumentByName(document.name);


  }

  /**
   * Called when Start collection button clicked 
   */
  AddCollection() {

    // call add collection dialog to get the name of new collection
    
    this.uiService.openAddCollectionDialog(this.collections.map(collection=>collection.name)).subscribe(name => {

      if (name == '' || name == undefined)
        return;

      // check if name is unique
      if (this.FindCollectionByName(name) !== -1) {
        this.uiService.showAlert({ title: "warning", message: "<p class='alert-danger'> Collection name must be unique </p>" });
        return;
      }
      // if is unique add to collections
      this.collections.push({
        name: name,
        documents: []
      });

    });

  }

  /**
   * removes a collection 
   * @param collection the collection to remove
   */
  RemoveCollection(collection: icollection) {

    // find index to remove
    let index = this.FindCollectionByName(collection.name);
    this.collections.splice(index, 1);

    // reset the selected collection and document
    this.__collection = {
      name: "",
      documents: []
    }
    this.__document = {
      name: "",
      fields: []
    }
  }

  /**
   * Open Add Document panel to add a document to current collection
   */
  AddDocument() {

    if (this.__collection.name == "")
      this.uiService.showAlert({ title: "Warning", message: "No collection selected" });
    else
      this.ShowAddDocument = true;

  }

/**
 * removes a document
 * @param document the document to remove
 */
  RemoveDocument(document: idocument) {
    // get the index to remove
    let index = this.FindDocumentByName(document.name);
    this.__collection.documents?.splice(index, 1);

    // update the current collection
    this.updateCollection();

    // reset the selected document
    this.__document = {
      name: "",
      fields: []
    }
  }


  /**
   * called when save button in add document panel clicked
   * there is two status to save 
   * 1. save and close 
   * 2. save only 
   * @param params the data of new document and panel closing status in iAddDocumentResult interface {doClose , document}
   */
  AddDocumentSaveClicked(params: iAddDocumentResult) {
    // get the document and add to collection
    // params = {document , doClose}
    if (params.doClose)
      this.ShowAddDocument = false; // close the add document 
    // add to current collection
    this.__collection.documents?.push(params.document);
    this.updateCollection();
  }

  AddDocumentCancelClicked() {
    this.ShowAddDocument = false;
  }


  /**
   * opens add field dialog 
   * the field is added to current document
   */
  AddField() {

    if (this.__document.name == "")
      this.uiService.showAlert({ title: "Warning", message: "No document selected" });
    else
      this.uiService.openAddFieldDialog(this.__document.fields?.map(field=>field.fieldName)).subscribe(field => {


          if (field.fieldName != "") {
            this.__document.fields.push(field);
            this.updateDocument();
          }


      });
  }

  /**
   * removes a field
   * @param field the field to remove
   */
  RemoveField(field: ifield) {
    // find the index to remove
    let index = this.FindFieldByName(field.fieldName);
    this.__document.fields.splice(index, 1);

    // update the document 
    this.updateDocument();
  }


  /**
   * 
   * @param name the name of collection to find
   * @returns index number
   */
  FindCollectionByName(name: string): number {

    return  this.collections.findIndex(col=>{
      return col.name == name;
    })

  }

  /**
   * 
   * @param name the name of document to find
   * @returns index number
   */
  FindDocumentByName(name: string): number {
    
      return this.__collection.documents.findIndex(doc=>{
        return doc.name == name;
      });

  
  }

  /**
   * 
   * @param name the name of field to find
   * @returns index number
   */
  FindFieldByName(name: string): number {
 
     return this.__document.fields.findIndex(field=>{
        return field.fieldName == name;
      })


  }

  /**
   * each time the __collection and its data changed -> update the collections
   */
  updateCollection() {
    
    let index: number = this.FindCollectionByName(this.__collection.name);
    this.collections[index] = this.__collection;

  }

  /**
   * each time the __document and its data changed -> update the documents an collections
   */
  updateDocument() {
    
    let Col_index: number = this.FindCollectionByName(this.__collection.name);
    let Doc_index: number = this.FindDocumentByName(this.__document.name);
    if (this.__collection.documents !== undefined) {
      this.__collection.documents[Doc_index] = this.__document;
      this.collections[Col_index] = this.__collection;
    }
  }




}

