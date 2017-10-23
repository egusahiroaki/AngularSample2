import { TestBed, async } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { By } from '@angular/platform-browser';

import { HeroService } from './hero.service';
import { Hero } from './hero';
import { ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';
import { HEROES } from './mock-heroes';

describe('Dashboard Component', () => {
  let service: HeroService;
  let comp: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let de: DebugElement;


  // load & compile template 
  beforeEach(async(() => {

    // HeroServiceStub
    let serviceStub = {
      getHeroes() {
        return Promise.resolve(HEROES);
      }
    };

    TestBed.configureTestingModule({
      imports: [ RouterTestingModule],
      declarations: [ DashboardComponent ]
    }).
    // override component configuration
    overrideComponent(DashboardComponent, {
      set: {
        providers: [
          { provide: HeroService, useValue: serviceStub}
        ]
      }
    });

    // create component instance
    fixture = TestBed.createComponent(DashboardComponent);
    comp = fixture.componentInstance;

    // get Dependency Service
    service = fixture.debugElement.injector.get(HeroService);
  }));

  it('should create the dashboard component', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have hero names', async(() => {
    fixture.detectChanges(); // THIS IS IMPORTANT!!
    let des = fixture.debugElement.queryAll(By.css('h4'));
    expect(des.length).toEqual(0);

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      des = fixture.debugElement.queryAll(By.css('h4'));
      expect(des.length).toEqual(10);
    });
  }));
});
