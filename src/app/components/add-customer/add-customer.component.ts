import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {


  message : boolean = false;

  addCustomer = new FormGroup({
    name: new FormControl('', Validators.required),
    nickname : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    gender : new FormControl('', Validators.required),
    city : new FormControl('', Validators.required),
    order : new FormControl('', Validators.required),
    state : new FormControl('', Validators.required)

  });

  constructor(private addData: DataService) { }

  ngOnInit(): void {
  }

  addcustomer() {
    // console.log(this.addCustomer.value);

    this.addData.putData(this.addCustomer.value).subscribe((response)=>{

      this.message = true;
      this.addCustomer.reset({});


    })

  }

  removemessage() {
    this.message = false;
  }

}
