import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { idocument } from 'src/app/interfaces/idocument';
import {UiService} from "../../services/ui.service";
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

 
  
  @Input() documents:idocument[] = []; // documents to list

  @Input() selected_index  : number = -1;

  @Output() OnDocumentClicked = new EventEmitter(); // called when single document clicked

  @Output() OnAddDocumet = new EventEmitter(); // called when add document button clicked

  @Output() OnRemoveDocumet = new EventEmitter(); // called when remove document button clicked

  faEllipsisV = faEllipsisV;
  faAngleRight = faAngleRight;

  constructor(private uiService : UiService ) { }




  ngOnInit(): void {
  }

  onAddDocumentClicked(){

      this.OnAddDocumet.emit();

  }


  documentSelected(document:idocument){
    this.OnDocumentClicked.emit(document);
  }

  RemoveDocument(document:idocument){
    this.OnRemoveDocumet.emit(document);
  }

}
