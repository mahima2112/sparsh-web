import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addschool',
  templateUrl: './addschool.component.html',
  styleUrls: ['./addschool.component.css']
})
export class AddschoolComponent implements OnInit {

  Data:any = [];
  schoolName:string;
  district:string;
  state:string;
  address:string;
  checkoutForm;
  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.checkoutForm = this.formBuilder.group({
      school_name: '',
      district:'',
      state:'',
      address: ''
    });
  }
  ngOnInit() {
    this.getSchools()
  }
  getSchools(){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    let options = { headers: headers };
    this.http.post('http://localhost:3000/get_schools',JSON.stringify({"type":"STATIONARY"}),options).subscribe((data)=>{
      console.log(data)
      this.Data = data['data']
      // for(let i in data){
      //   console.log(data[i])
      // }
      
    })
  }

  BackToHome(){
    let url = '/home'
    this.router.navigateByUrl(url);
  }
  insertSchool(data){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    let options = { headers: headers };
    // console.warn(data)
    this.http.post('http://localhost:3000/enter_school',JSON.stringify(data),options).subscribe((responseData)=>{
      // console.log(responseData)
      if(responseData['success'] == true)
      {
        this.getSchools();
      }
    })
  }
}
