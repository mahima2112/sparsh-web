import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  id:string;
  // constructor() { }
  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe(params => {
      console.log(params);
      this.id = params["id"]
    })
  }

  ngOnInit() {
  //   this.router.queryParams.subscribe(params => {
  //     console.log(params);
  // })
  }

}
