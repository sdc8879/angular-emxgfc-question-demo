import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  examArray: any = [];
  currentIndex: any = 0;

  constructor() {

  }
  ngOnInit() {
    this.examArray = [
      {
        "question_id": '1',
        "question": "Who is The PM of India for the year 2019 ?",
        "options": [
          {
            "opt_id": 1,
            "opt_name": "Dr.Manmohan Singh",
            "opt_status": false
          },
          {
            "opt_id": 2,
            "opt_name": "Indira Gandhi",
            "opt_status": false
          },
          {
            "opt_id": 3,
            "opt_name": "Venkayya Naidu",
            "opt_status": false
          },
          {
            "opt_id": 4,
            "opt_name": "Narendra Modi",
            "opt_status": false
          }
        ]

      },

      {
        "question_id": '2',
        "question": "What is the name of national animal of India ?",
        "options": [
          {
            "opt_id": 1,
            "opt_name": "Lion",
            "opt_status": false
          },
          {
            "opt_id": 2,
            "opt_name": "Panther",
            "opt_status": false
          },
          {
            "opt_id": 3,
            "opt_name": "Tiger",
            "opt_status": false
          },
          {
            "opt_id": 4,
            "opt_name": "Elephant",
            "opt_status": false
          }
        ]

      }
      ,
      {
        "question_id": '3',
        "question": "What is the name of national bird of India ?",
        "options": [
          {
            "opt_id": 1,
            "opt_name": "Indian peacock",
            "opt_status": false
          },
          {
            "opt_id": 2,
            "opt_name": "Sparrow",
            "opt_status": false
          },
          {
            "opt_id": 3,
            "opt_name": "Kingfisher",
            "opt_status": false
          },
          {
            "opt_id": 4,
            "opt_name": "Parrot",
            "opt_status": false
          }
        ]

      },
      {
        "question_id": '4',
        "question": "What is the name of national currency of India ?",
        "options": [
          {
            "opt_id": 1,
            "opt_name": "Indian Doller",
            "opt_status": false
          },
          {
            "opt_id": 2,
            "opt_name": "Indian Rupees",
            "opt_status": false
          },
          {
            "opt_id": 3,
            "opt_name": "Indian Pound",
            "opt_status": false
          },
          {
            "opt_id": 4,
            "opt_name": "Indian Yen",
            "opt_status": false
          }
        ]

      },

      {
        "question_id": '5',
        "question": "Who is the highest run scorer in cricket ?",
        "options": [
          {
            "opt_id": 1,
            "opt_name": "Sachin Patil",
            "opt_status": false
          },
          {
            "opt_id": 2,
            "opt_name": "Sachin Mahatre",
            "opt_status": false
          },
          {
            "opt_id": 3,
            "opt_name": "Sachin Tendulkar",
            "opt_status": false
          },
          {
            "opt_id": 4,
            "opt_name": "Sachin Gavskar",
            "opt_status": false
          }
        ]

      }
    ];

    this.currentIndex = 0;
  }

  previousClick() {
    if (this.currentIndex != 0) {
      this.currentIndex = this.currentIndex - 1;
    }
  }
  nextClick() {
    if (this.currentIndex < this.examArray.length) {
      this.currentIndex = this.currentIndex + 1;
    }
  }
}
