import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-addclass',
  templateUrl: './addclass.component.html',
  styleUrls: ['./addclass.component.css']
})
export class AddclassComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  BackToHome(){
    let url = '/'
    this.router.navigateByUrl(url);
  }
}
