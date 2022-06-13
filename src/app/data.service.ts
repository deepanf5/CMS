import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = "http://localhost:3000/post"

 search = new BehaviorSubject<string>("")

  constructor(private http:HttpClient) { }


  getData() {
      
    return this.http.get(this.url)
  }

  
  putData(data:any) {
    // console.log(data);
    
    return this.http.post(this.url,data)

  }
  deleteCustomers(id : any) {

    return this.http.delete(`${this.url}/${id}`)

  }
 
  getCustomerbyid(id:number) {
    return this.http.get(`${this.url}/${id}`)
  }

  updatecustomer(id:number,data:any) {
    return this.http.put(`${this.url}/${id}`,data)

  }

  singleCustomer(id:any) {
    return this.http.get(`${this.url}/${id}`)
  }
  
  
}
