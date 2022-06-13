import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterPipe } from 'src/app/filter.pipe';

import { UpdateCustomerComponent } from './update-customer.component';

describe('AddCustomerComponent', () => {
    let component: UpdateCustomerComponent;
    let fixture: ComponentFixture<UpdateCustomerComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
            RouterTestingModule,
            HttpClientTestingModule
        ],
        declarations: [ UpdateCustomerComponent,FilterPipe ]
      })
      .compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(UpdateCustomerComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('it should have call the ngOnInit',()=> {

      component.ngOnInit();
    })


    

})