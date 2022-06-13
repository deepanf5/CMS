import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EditCustomerComponent } from './edit-customer.component';
import { FilterPipe } from 'src/app/filter.pipe';
import { DataService } from 'src/app/data.service';
import { of } from 'rxjs';


describe('editCustomer components', () => {
    let component: EditCustomerComponent;
    let fixture: ComponentFixture<EditCustomerComponent>;
    let services:DataService
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
            RouterTestingModule,
            HttpClientTestingModule
        ],
        declarations: [ EditCustomerComponent,FilterPipe ]
      })
      .compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(EditCustomerComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    
    it(' should have name control',()=> {
        expect(component.editCustomer.contains('name')).toBe(true);
        
    })

    it(' should have nickname control',()=> {
        expect(component.editCustomer.contains('nickname')).toBe(true);
        
    })

    it(' should have email control',()=> {
        expect(component.editCustomer.contains('email')).toBe(true);
        
    })
    it(' should have gender control',()=> {
        expect(component.editCustomer.contains('gender')).toBe(true);
        
    })
    it(' should have city control',()=> {
        expect(component.editCustomer.contains('city')).toBe(true);
        
    })
    it(' should have sate control',()=> {
        expect(component.editCustomer.contains('order')).toBe(true);
        
    })
    it(' should have state control',()=> {
        expect(component.editCustomer.contains('state')).toBe(true);
        
    })

    it('should have valid values', () => {
        component.editCustomer.setValue({
          "name":'jack',
          "nickname":'jacky',
          "email":'exampleGmail.com',
          "city":'city',
          "order":'order',
          "state":'state',
          "gender":'male'
        });
    
        expect(component.editCustomer.valid).toBe(true);
      });

      it('should have invalid values', () => {
        component.editCustomer.setValue({
          "name":'',
          "nickname":'',
          "email":'',
          "city":'',
          "order":'',
          "state":'',
          "gender":''
        });
    
        expect(component.editCustomer.valid).toBe(false);
      });
      
      it('it should call the remove message',()=> {

          expect(component).toBeTruthy();
      })


      it('should call the remove function',()=> {
        component.removemessage()

        expect(component.message).toBe(false)

      })

      it('should call the update customer',()=> {

        component.updatecustomers()

        expect(component.updatecustomers).toBeTruthy
      })

      it('should have the remove method',()=> {

        component.removemessage()

        expect(component.removemessage).toBeTruthy
      })

      it('it should have call the ngOnInit',()=> {

        component.ngOnInit();
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
    
      //   component.updatecustomers();
    
      //   fixture.detectChanges();
      
      //   expect(component.updatecustomers).toEqual(response);
      // }));

      
      
})

