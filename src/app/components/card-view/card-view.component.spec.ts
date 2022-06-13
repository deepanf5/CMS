import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed,inject, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from 'src/app/data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FilterPipe } from 'src/app/filter.pipe';
import { CardViewComponent } from './card-view.component';
import { of } from 'rxjs';






describe('editCustomer components', () => {

    let component: CardViewComponent;
    let fixture: ComponentFixture<CardViewComponent>;
    let services:DataService
   
    
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
            RouterTestingModule,
            HttpClientTestingModule,
            
        ],
        declarations: [ CardViewComponent,FilterPipe ],
        providers:[DataService,HttpClient,FilterPipe] 
      })
      .compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(CardViewComponent);
      component = fixture.componentInstance;
      services=TestBed.get(DataService)
      fixture.detectChanges();    
    });


    it('should call the ngOnInit',()=> {

      component.ngOnInit()
    })

    it('should exist', inject([DataService], (loggingService : DataService) => {
      expect(DataService).toBeDefined();
  }));

  
   
  it("should call getUsers and return list of users",fakeAsync(() => {
    const response=[{
      name: "David warner",
      nickname: "warner",
      email: "warner@a3345.biz",
      gender: "male",
      city: "abc",
      order: 2,
      state: "bxa",
      id: 6,
    }];

    spyOn(services, 'getData').and.returnValue(of(response))

    component.get();

    fixture.detectChanges();
  
    expect(component.customerData).toEqual(response);
  }));
    

})
