import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

customerData:any;
searchKey:string = "";


  constructor(private data : DataService) { 

    this.data.getData().subscribe((result)=> {

      this.customerData  = result;

      // console.log(this.customerData);
    })
  }

  ngOnInit(): void {
  
    this.data.search.subscribe((result)=> {

      this.searchKey = result;
    })
    
  }

}
