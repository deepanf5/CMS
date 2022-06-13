import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  CustomerData: any;
  dtOptions:DataTables.Settings = {}
  editCustomer = new FormGroup({
    name: new FormControl('', Validators.required),
    nickname : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    gender : new FormControl('', Validators.required),
    city : new FormControl('', Validators.required),
    order : new FormControl('', Validators.required),
    state : new FormControl('', Validators.required)

  });

  constructor(private data:DataService) {
    this.dtOptions = {
      pagingType:'full_numbers',
      lengthMenu:[5,10,20,30],
      pageLength:5,
      processing:true
    }

    this.data.getData().subscribe((response)=> {

      this.CustomerData = response;
    })


   }

  ngOnInit(): void {
    
  }

  deleteCustomer(id:any) {

    // console.log(id);

    this.data.deleteCustomers(id).subscribe((result)=> {
      // console.log(result);

      location.reload();
    })

 

  }
  



  

}
