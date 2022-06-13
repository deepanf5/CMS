import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DeleteCustomerComponent } from './delete-customer.component';
import { FilterPipe } from 'src/app/filter.pipe';
import { DataService } from 'src/app/data.service';
import { of } from 'rxjs';


describe('AddCustomerComponent', () => {
    let component: DeleteCustomerComponent;
    let fixture: ComponentFixture<DeleteCustomerComponent>;
    let id:any;
    let services:DataService
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
            RouterTestingModule,
            HttpClientTestingModule
        ],
        declarations: [ DeleteCustomerComponent,FilterPipe ],
        providers:[DataService]
      })
      .compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(DeleteCustomerComponent);
      component = fixture.componentInstance;
      services=TestBed.get(DataService)
      fixture.detectChanges();
    });


    it('it should have call the ngOnInit',()=> {

      component.ngOnInit();
    })

    it('It should call the delete customer',()=> {

      component.deleteCustomer(id)
    })
    it('It should call the delete customer',()=> {

      component.deleteCustomer(id);

      expect(component.deleteCustomer).toBeTruthy();
     
    })


    // it("should call getUsers and return list of users",fakeAsync(() => {
    //   const response=[{
    //     name: "David warner",
    //     nickname: "warner",
    //     email: "warner@a3345.biz",
    //     gender: "male",
    //     city: "abc",
    //     order: 2,
    //     state: "bxa",
    //     id: 6,
    //     orderdetails: [
    //       {
    //         product1: "bat",
    //         quantity: 1,
    //         price1: 350,
    //         date: "12/01/2022"
    //       },
    //       {
    //         product2: "shoe",
    //         quantity: 2,
    //         price1: 700,
    //         date: "12/01/2022"
    //       }
    //     ]
    //   }];
  
    //   spyOn(services, 'singleCustomer').and.returnValue(of(response))
  
    //   component.singleCustomers();
  
    //   fixture.detectChanges();
    
    //   expect(component.singleCustomer).toEqual(response);
    // }));

})