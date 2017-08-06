import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {HeroService} from '../hero.service';
import {Hero} from '../hero';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-details.component.html',
    styleUrls: ['./hero-details.component.sass']
})

export class HeroDetailsComponent implements OnInit {
    @Input() hero: Hero;

    constructor(private heroService: HeroService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
            .subscribe(hero => this.hero = hero);
    }
}
