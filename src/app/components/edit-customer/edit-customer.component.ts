import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  message:any

  editCustomer = new FormGroup({
    name: new FormControl('', Validators.required),
    nickname : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    gender : new FormControl('', Validators.required),
    city : new FormControl('', Validators.required),
    order : new FormControl('', Validators.required),
    state : new FormControl('', Validators.required)

  });

  constructor(private addData: DataService,private router: ActivatedRoute) { }

  ngOnInit(): void {

    // console.log(this.router.snapshot.params['id']);

    this.addData.getCustomerbyid(this.router.snapshot.params['id']).subscribe((result:any)=>{

      // console.log(result);
      this. editCustomer = new FormGroup({
        name: new FormControl(result['name'], Validators.required),
        nickname : new FormControl(result['nickname'], Validators.required),
        email : new FormControl(result['email'], Validators.required),
        gender : new FormControl(result['gender'], Validators.required),
        city : new FormControl(result['city'], Validators.required),
        order : new FormControl(result['order'], Validators.required),
        state : new FormControl(result['state'], Validators.required)
    
      });
    })
  }


  updatecustomers() {

    // console.log(this.editCustomer.value);

    this.addData.updatecustomer(this.router.snapshot.params['id'],this.editCustomer.value).subscribe((result)=> {

      // console.log(result);
      this.message = true;
    })

  }

  removemessage() {
    this.message = false;
  }

  

}
