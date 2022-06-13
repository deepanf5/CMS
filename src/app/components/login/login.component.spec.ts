import { ComponentFixture, flush, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';


import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe(' testing the login form ',()=> {

    it('should have the two form controls',()=> {

      expect(component.form.contains('emailId')).toBe(true)
      expect(component.form.contains('password')).toBe(true)
    })

    
    it('should have valid values', () => {
      component.form.setValue({
        "emailId":'123@gmail.com',
        "password":'admin',
      });
  
      expect(component.form.valid).toBe(true);
    });

    it('should have invalid values', () => {
      component.form.setValue({
        "emailId":'',
        "password":'',
      });
  
      expect(component.form.valid).toBe(false);
    });  


    it('should call the function',()=> {

      component.login()

      expect(component.form.value).toBeTruthy();
    })
    it('should call the function',()=> {

      component.login()

      expect(component.form.value).toBeTruthy();
    })
    it('should call the function',()=> {

      component.login()

      expect(component.form.value).toBeTruthy();
    })

    it('it should call the function list view',()=> {

      component.login()
    })
    
  })

});
