import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-customer',
  templateUrl: './single-customer.component.html',
  styleUrls: ['./single-customer.component.css']
})
export class SingleCustomerComponent implements OnInit {


  singleCustomer :any;

  constructor(private data:DataService,private router:ActivatedRoute) { 
    

    
  }

  ngOnInit(): void {

    this.singleCustomers();
    
    
  }


  singleCustomers() {
    // console.log(this.router.snapshot.params['id']);
    this.data.singleCustomer(this.router.snapshot.params['id']).subscribe((result)=>{
      // console.log(result);
      this.singleCustomer = result;
    })
  }

}
