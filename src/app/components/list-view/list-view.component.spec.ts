import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { DataService } from 'src/app/data.service';

import { ListViewComponent } from './list-view.component';

describe('editCustomer components', () => {
    let component: ListViewComponent;
    let fixture: ComponentFixture<ListViewComponent>;
    let services:DataService
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
            RouterTestingModule,
            HttpClientTestingModule
        ],
        declarations: [ ListViewComponent ]
      })
      .compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(ListViewComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });


    it('should call deleteCustomer',()=> {

      component.deleteCustomer
    })
   
    it('should call the ngOnInit',()=> {

      component.ngOnInit();
    })

    
   

})