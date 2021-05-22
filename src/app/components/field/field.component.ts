import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ifield } from 'src/app/interfaces/ifield';
import { UiService } from '../../services/ui.service';
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";


@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  // declares which button is clicked

  @Input() fields: ifield[] = []

  @Output() OnAddField = new EventEmitter();
  @Output() OnAddCollection = new EventEmitter(); // because Start collection is repeated in fields box we should emit its function on main Component so we need a emitter
  @Output() OnRemoveField = new EventEmitter();


  faTrashAlt = faTrashAlt;
  
  constructor(private uiService: UiService) { }

  ngOnInit(): void {
  }

  onAddFieldClicked() {
    this.OnAddField.emit();
  }
  onAddCollectionClicked() {
    this.OnAddCollection.emit();
  }


  RemoveField(field:ifield){
    this.OnRemoveField.emit(field);
  }

}
