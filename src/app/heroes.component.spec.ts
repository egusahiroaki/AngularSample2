import { TestBed, async } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';

import { HeroService } from './hero.service';
import { ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { HEROES} from './mock-heroes';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('HeroDetail Component', () => {
  let service: HeroService;
  let comp: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    // HeroServiceStub
    let serviceStub = {
      getHeroes() {
        return Promise.resolve(HEROES);
      }
    };

    TestBed.configureTestingModule({
      imports: [ RouterTestingModule],
      declarations: [ HeroesComponent ]
    }).
    // override component configuration
    overrideComponent(HeroesComponent, {
      set: {
        providers: [
          { provide: HeroService, useValue: serviceStub}
        ]
      }
    });

    // create component instance
    fixture = TestBed.createComponent(HeroesComponent);
    comp = fixture.componentInstance;

    // get Dependency Service
    service = fixture.debugElement.injector.get(HeroService);
  }));


  it('should create the heroes component', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('getHeroes Method is called and 10 badge class element should exist.', async(() => {
    fixture.detectChanges(); // THIS IS IMPORTANT!!
    let des = fixture.debugElement.queryAll(By.css('span.badge'));
    expect(des.length).toEqual(0);

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      des = fixture.debugElement.queryAll(By.css('span.badge'));
      expect(des.length).toEqual(10);
    });
  }));

  it('When select Hero at the top is called, h2 element should appear.', async(() => {
    fixture.detectChanges(); // THIS IS IMPORTANT!!
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const heroLiElement = fixture.debugElement.nativeElement.querySelectorAll('li')[0];
      heroLiElement.click();
      fixture.detectChanges();
      let des = fixture.debugElement.queryAll(By.css('h3'));
      expect(des.length).toEqual(1);
    });
  }));

  it('When select Hero at the top is called, h2 element should have "MR. NICE is my hero".', async(() => {
    fixture.detectChanges(); // THIS IS IMPORTANT!!
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const heroLiElement = fixture.debugElement.nativeElement.querySelectorAll('li')[0];
      heroLiElement.click();
      fixture.detectChanges();
      let des = fixture.debugElement.query(By.css('h3'));
      let el = des.nativeElement;
      expect(el.textContent).toContain('MR. NICE is my hero');
    });
  }));


  it('When click View Details button, current view should go to ', async(() => {

  }));    
});