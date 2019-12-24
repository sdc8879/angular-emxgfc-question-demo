import { Component, OnInit, Input,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit,AfterViewInit {


  @Input() questionObj: any;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log('question-----',this.questionObj)
  }
}