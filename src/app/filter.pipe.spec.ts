import { filter, pipe } from 'rxjs';
import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });


  it('it should create a pipe',()=> {

    expect(pipe).toBeTruthy();
  })

  it("filter pipe should be instanciated", () => {
    expect(filter).toBeDefined();
  });


  

});
