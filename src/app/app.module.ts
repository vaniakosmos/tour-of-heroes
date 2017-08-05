import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
