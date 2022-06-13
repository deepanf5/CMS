import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { data } from 'jquery';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let id:any;

  beforeEach(() => { 
  
    TestBed.configureTestingModule({
      imports :[
        HttpClientModule, 
        
      ],
      providers:[HttpClient]   
    });

    service = TestBed.inject(DataService);
  
  });

  it('should  call data',()=> {

    expect(service).toBeTruthy();
    service.getData
  })
  it('should  call putData',()=> {

    expect(service).toBeTruthy();
    service.putData
  })
  it('should  call deleteCustomers',()=> {

    expect(service).toBeTruthy();
    service.deleteCustomers
  })
  it('should  call getCustomerbyid',()=> {

    expect(service).toBeTruthy();
    service.getCustomerbyid
  })
  it('should  call updatecustomer',()=> {

    expect(service).toBeTruthy();
    service.updatecustomer
  })
  it('should  get singleCustomer',()=> {

    expect(service).toBeTruthy();
    service.singleCustomer(id)
  })
  


 

  

 
  
  
});
