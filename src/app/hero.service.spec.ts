import { TestBed, async } from '@angular/core/testing';
import { HeroService } from './hero.service';
import { Hero } from './hero';

describe('Hero Service Test', () => {
    let service: HeroService;
    let getHeroesReturnValue: Hero[]; 
    let getHeroReturnValue: Hero; 

    beforeEach(() => {
        service =  new HeroService();
    })

    beforeEach((done) => {
        service.getHeroes().then((hero) => {
            getHeroesReturnValue = hero;
            done();
        });
    });

    beforeEach((done) => {
        service.getHero(11).then((hero) => {
            getHeroReturnValue = hero;
            done();
        });
    });

    it('getHeroes return 10 heroes', (done) => {
        expect(getHeroesReturnValue.length).toEqual(10);
        done();
    });

    it('getHero return Mr. Nice by id :11', (done) => {
        expect(getHeroReturnValue.name).toEqual('Mr. Nice');
        done();
    });
});