import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  public names = [];
  Data:any = [];
  filteredData:any = []
  itemform;
  isbook:boolean;
  updateitemform;
  public typeofitem = 'Stationary'
  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    this.itemform = this.formBuilder.group({
      item_name: '',
      item_type:'',
      publisher:''
    });
    this.updateitemform = this.formBuilder.group({
      item_name: '',
      item_type:'',
      publisher:''
    });
    this.isbook = false;
   }

  ngOnInit() {
    this.getItems()
  }

  BackToHome(){
    let url = '/home'
    this.router.navigateByUrl(url);
  }

  filterresult(data){
    this.typeofitem = data;
    this.filteredData = [];
    if(this.typeofitem == 'Stationary'){
      for(let i in this.Data){
        if(this.Data[i]['item_type'] == 'STATIONARY'){
          this.filteredData.push(this.Data[i])
        }
      }
    }
    if(this.typeofitem == 'NoteBook'){
      for(let i in this.Data){
        if(this.Data[i]['item_type'] == 'NOTEBOOK'){
          this.filteredData.push(this.Data[i])
        }
      }
    } 

    if(this.typeofitem == 'Books'){
      for(let i in this.Data){
        if(this.Data[i]['item_type'] == 'BOOK'){
          this.filteredData.push(this.Data[i])
        }
      }
    } 

  }
  getItems(){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    let options = { headers: headers };
    this.http.post('http://localhost:3000/getitems',JSON.stringify({"type":"STATIONARY"}),options).subscribe((data)=>{
      // console.log(data)
      this.Data = data['data']
      console.log(this.Data)
      for(let i in this.Data){
        if(this.Data[i]['item_type'] == 'STATIONARY'){
          this.filteredData.push(this.Data[i])
        }
      }
      
    })
  }

  insertItem(data){
    console.log(data)
    // enter_item
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    let options = { headers: headers };
    this.http.post('http://localhost:3000/enter_item',JSON.stringify(data),options).subscribe((responsedata)=>{
      console.log(responsedata)
      this.getItems()
    })
  }

  isbookentered(data){
    console.log(this.itemform.item_type)
    if(data == 'BOOK'){
      this.isbook = true;
    }
    else{
      this.isbook = false;
    }
  }

}
