import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HeroDetailsComponent} from './hero-details/hero-details.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroService} from './hero.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        HeroDetailsComponent,
        HeroesComponent,
        DashboardComponent,
        HeroSearchComponent,
    ],
    providers: [
        HeroService,
    ],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule {
}
