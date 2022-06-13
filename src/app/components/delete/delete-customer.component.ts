import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  customerData :any;
  searchKey:string = "";

  constructor(private data:DataService) {

    this.data.getData().subscribe((result)=> {

      this.customerData = result;
      // console.log(this.customerData);
    })
   }

  ngOnInit(): void {

    
    this.data.search.subscribe((result)=> {

      this.searchKey = result;
    })

  }

  deleteCustomer(id:any) {

    // console.log(id);

    this.data.deleteCustomers(id).subscribe((result)=> {
      // console.log(result);

      location.reload();
    })

  }

}
