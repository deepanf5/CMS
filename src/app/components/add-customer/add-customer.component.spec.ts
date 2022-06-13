import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from'@angular/common/http/testing'
import { AddCustomerComponent } from './add-customer.component';



describe('AddCustomerComponent', () => {
    let component: AddCustomerComponent;
    let fixture: ComponentFixture<AddCustomerComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
            RouterTestingModule,
            HttpClientTestingModule
        ],
        declarations: [ AddCustomerComponent ]
      })
      .compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(AddCustomerComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    describe('Testing addCustomer form component',()=> {

        it(' should have name control',()=> {
            expect(component.addCustomer.contains('name')).toBe(true);
            
        })

        it(' should have nickname control',()=> {
            expect(component.addCustomer.contains('nickname')).toBe(true);
            
        })

        it(' should have email control',()=> {
            expect(component.addCustomer.contains('email')).toBe(true);
            
        })
        it(' should have gender control',()=> {
            expect(component.addCustomer.contains('gender')).toBe(true);
            
        })
        it(' should have city control',()=> {
            expect(component.addCustomer.contains('city')).toBe(true);
            
        })
        it(' should have sate control',()=> {
            expect(component.addCustomer.contains('order')).toBe(true);
            
        })
        it(' should have state control',()=> {
            expect(component.addCustomer.contains('state')).toBe(true);
            
        })

        it('should have valid values', () => {
            component.addCustomer.setValue({
              "name":'jack',
              "nickname":'jacky',
              "email":'exampleGmail.com',
              "city":'city',
              "order":'order',
              "state":'state',
              "gender":'male'
            });
        
            expect(component.addCustomer.valid).toBe(true);
          });

          it('should have valid values', () => {
            component.addCustomer.setValue({
              "name":'',
              "nickname":'',
              "email":'',
              "city":'',
              "order":'',
              "state":'',
              "gender":''
            });
        
            expect(component.addCustomer.valid).toBe(false);
          });

          it('should  have false  value for message ' ,()=> {
            let valid = component.message

            expect(valid).toBe(false)
          })  
          
        
          it('should change the value after click',()=> {
            component.message
          })

          it('it should remove message function',()=> {

            component.removemessage()

            expect(component.message).toBe(false)
          })


          it('should call add user function',()=> {

            component.addcustomer()

            expect(component.message).toBe(false)
          })


          it('it should have call the ngOnInit',()=> {

            component.ngOnInit();
          })
        
    })
});