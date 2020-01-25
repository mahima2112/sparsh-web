import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
// import { MatDialog, MatDialogConfig } from "@angular/material";
// import {AddschooldialogComponent} from '../addschooldialog/addschooldialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Data:any = [];
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { 
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    let options = { headers: headers };
    this.http.post('http://localhost:3000/generate_order',JSON.stringify({"type":"STATIONARY"}),options).subscribe((data)=>{
      this.Data = data['data']
      // for(let i in data){
      //   console.log(data[i])
      // }
    })
  }
  ngOnInit() {
  }

  AddSchool(){
    let url = '/addSchool'
    this.router.navigateByUrl(url);
  }
  AddClass(){
    let url = '/addClass'
    this.router.navigateByUrl(url);
  }
  AddItem(){
    let url = '/addItem'
    this.router.navigateByUrl(url);
  }

  // openDialog() {
  //   var dialogRef;
  //   // let dataDialog = { "statename": this.Location.state.toUpperCase(), "statecode": parseInt(this.stateID) }
  //   dialogRef = this.dialog.open(AddschooldialogComponent,
  //   {
  //     "height": "82%",
  //     "width": "66%"
  //   });
  //   // else if (this.mobileScreen) {
  //   //   dialogRef = this.dialog.open(LocationDialogComponent,
  //   //     {
  //   //       "height": "100%",
  //   //       "width": "100%",
  //   //       maxWidth: "100%",
  //   //       "data": dataDialog
  //   //     });
  //   // }

  //   dialogRef.afterClosed().subscribe(
  //     res => {
  //       if (res) {
  //         // this._router.navigateByUrl('/overview');
  //         console.log('bond')
  //       }
  //     }
  //   );
  // }

}
