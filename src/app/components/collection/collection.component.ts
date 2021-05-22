import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { icollection } from 'src/app/interfaces/icollection';
import { UiService } from '../../services/ui.service';

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  // declares which button is clicked

  @Input() collections: icollection[] = [
   
  ];

  @Input() selected_index : number = -1;

  @Output() OnCollectionSelected = new EventEmitter() ; // called when single collection clicked

  @Output() OnAddCollection  =new EventEmitter(); // called when start collection clicked


  @Output() OnRemoveCollection = new EventEmitter(); // called when remove collection clicked


  faEllipsisV = faEllipsisV;
  faAngleRight = faAngleRight;

 
  constructor(private uiService: UiService) { }

  ngOnInit(): void {
  }

  onAddCollectionClicked() {
   
      this.OnAddCollection.emit();
  }


  collectionSelected(collection:icollection){
   
    this.OnCollectionSelected.emit(collection);
  }


 
  RemoveCollection(collection:icollection){
  
    this.OnRemoveCollection.emit(collection); 
  }


}
