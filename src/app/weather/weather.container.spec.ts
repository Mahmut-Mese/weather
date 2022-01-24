
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WeatherContainer } from './weather.container';
import { Store, StoreModule } from '@ngrx/store';
import { reducers, State } from '../weather/store/reducers/weather';
import { SearchCity } from './store/actions/weather';
import { By } from '@angular/platform-browser';

describe('WeatherContainer', () => {
  let component: WeatherContainer;
  let fixture: ComponentFixture<WeatherContainer>;
  let store: Store<State>;

  const initalState = {
    weather: {
      allcities: []
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherContainer],
      imports: [
        StoreModule.forRoot({ 'weather': reducers } )],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    it('should include the accordion component', () => {
      const fixture = TestBed.createComponent(WeatherContainer);
  
      expect(fixture.debugElement.query(By.css('app-search')))
      .toBeTruthy()  
    }); 
  it('should dispatch action to search city data', () => {
    const actionSearch = SearchCity({city: 'test'});
    component.citySearch('test');
    expect(store.dispatch).toHaveBeenCalledWith(actionSearch);
  });
});

