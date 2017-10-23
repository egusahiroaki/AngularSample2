import { TestBed, async } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';
import { Hero } from './hero';


describe('Dashboard Test', () => {

  let HeroServiceStub: {
    getHeroes(): Promise<Hero[]>;
  };

  beforeEach(async(() => {

    HeroServiceStub.getHeroes

    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent
      ],
      providers: [ {provide: HeroService, useValue: HeroServiceStub } ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
