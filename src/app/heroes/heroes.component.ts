import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService, private router: Router) {
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail() {
        this.router.navigate(['/details', this.selectedHero.id]);
    }
}
