import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchTerm:string = "";

  constructor(private data : DataService) {

    this.data
   }

  ngOnInit(): void {
  }

  search(event:any) {

    this.searchTerm = (event.target as HTMLInputElement).value;
    // console.log(this.searchTerm);
    this.data.search.next(this.searchTerm)
   

  }

}
