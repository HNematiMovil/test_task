import { Component, OnInit,Input , Output , EventEmitter } from '@angular/core';
import { faPlus , faMinusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {

  @Input() text:string = "Click"; // default text
  @Input() icon:string = "";

  @Input() extra_class= "btn-icon";

  @Input() uppercase:boolean = true; // by default make text uppercase
  @Output() OnButtonClicked = new EventEmitter();



  faPlus = faPlus;
  faMinusCircle = faMinusCircle;


  constructor() { }

  ngOnInit(): void {
  }


  OnClick() {
    this.OnButtonClicked.emit();
  }


}
