import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
declare var $: any;

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  allOrder:any;
  dtOptions:DataTables.Settings = {}

  constructor(private data:DataService) {
    this.dtOptions = {
      pagingType:'full_numbers',
      lengthMenu:[5,10,20,30],
      pageLength:5,
      processing:true
    }

  
   }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.data.getData().subscribe((result)=> {

      this.allOrder = result;
    })
  }

}
