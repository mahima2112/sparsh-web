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
    // this.Data = [{"school_id":"s_AC","school_name":"A B C","district":"Panipat","state":"haryana","address":"New Bazar Road"},{"school_id":"s_AS","school_name":"Ajay School","district":"Balasore","state":"Delhi","address":"Plot-771,Gram Sabha,Pooth Kalan"},{"school_id":"s_DS","school_name":"DAV model school","district":"Delhi","state":"delhi","address":"shalimar bagh"},{"school_id":"s_E","school_name":"emp1","district":"temp","state":"Delhi","address":"Plot-771,Gram Sabha,Pooth Kalan"},{"school_id":"s_M","school_name":"mp1","district":"temp","state":"Delhi","address":"Plot-771,Gram Sabha,Pooth Kalan"},{"school_id":"s_T","school_name":"temp","district":"temp","state":"temp","address":"temp"},{"school_id":"s_XZ","school_name":"x y z","district":"sonipat","state":"haryana","address":"New Bazar Road"}]
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
  toSchoolPage(data){
    let url = 'school/'+data
    this.router.navigateByUrl(url);
    }
    
}

