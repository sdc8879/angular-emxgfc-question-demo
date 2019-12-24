import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit, AfterViewInit {


  @Input() optionArray = [];
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log('********', this.optionArray)
  }

  optionCheck(optId) {

    this.optionArray.map((element) => {

      if (element.opt_id == optId) {
        element.opt_status = true
        console.log('element----', element)
      } else {
        element.opt_status = false
      }

    });

  }
}