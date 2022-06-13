import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  customerData : any;
  searchKey:string = ""

  constructor(private data : DataService) {

   }

  ngOnInit(): void {

    this.data.search.subscribe((result)=> {

      this.searchKey = result;
    })

    this.get();
  }


  get(){
    
    this.data.getData().subscribe((response)=> {
      this.customerData = response
    })
  }
}
