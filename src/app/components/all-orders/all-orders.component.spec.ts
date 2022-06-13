import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { DataService } from 'src/app/data.service';

import { AllOrdersComponent } from './all-orders.component';

describe('AddCustomerComponent', () => {
    let component: AllOrdersComponent;
    let fixture: ComponentFixture<AllOrdersComponent>;
    let services:DataService
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
            RouterTestingModule,
            HttpClientTestingModule
        ],
        declarations: [ AllOrdersComponent ]
      })
      .compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(AllOrdersComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it("should call the dataOptions",()=> {

        component.dtOptions

        expect(component.dtOptions).toBeTruthy
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
    //   }];
  
    //   spyOn(services, 'getData').and.returnValue(of(response))
  
    //   component.get();
  
    //   fixture.detectChanges();
    
    //   expect(component.allOrder).toEqual(response);
    // }));

})