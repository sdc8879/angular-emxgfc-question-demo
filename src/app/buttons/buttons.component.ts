import { Component, OnInit, Input,Output,EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit, AfterViewInit {

  @Input() myStyle: any;
  @Input() btnLabel: any;
  @Input() btnClass:any;
  @Output() steptype=new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('mystyle--', this.myStyle)
  }


  onClick() {
    this.steptype.emit()
  }
}