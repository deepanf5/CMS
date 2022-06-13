import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterPipe } from 'src/app/filter.pipe';
import { DataService } from 'src/app/data.service';
import { SingleCustomerComponent } from './single-customer.component';
import { of } from 'rxjs';
import { AppComponent } from 'src/app/app.component';


describe('SingleCustomerComponent', () => {
    let component: SingleCustomerComponent;
    let fixture: ComponentFixture<SingleCustomerComponent>;
    let services : DataService
    
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
            RouterTestingModule,
            HttpClientTestingModule
        ],
        declarations: [ SingleCustomerComponent,FilterPipe ],
        providers:[DataService]
      })
      .compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(SingleCustomerComponent);
      component = fixture.componentInstance;
      services=TestBed.get(DataService)
      fixture.detectChanges();
    });


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


    // it("It should call the ngOnInit",()=> {

    //   expect(component.singleCustomer).toBeDefined();
    // })


    
  
})


