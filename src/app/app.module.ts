import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes, PreloadAllModules, PreloadingStrategy, Route} from '@angular/router';
import {AppComponent} from './app.component';
import {HighlightDirective} from './highlight.directive';
import {JobsModule} from "./jobs/jobs.module";
import {Observable} from "rxjs";
import {of} from "rxjs/observable/of";


@Component({
    template: '<h2>Page not found</h2>'
})
export class PageNotFoundComponent {
}

@Component({
    template: '<h3>Hello</h3>'
})
export class HelloComponent {
}

const appRoutes: Routes = [
    {
        path: '', component: HelloComponent
    },
    {
        path: 'default', component: HelloComponent
    },
    {
        path: 'jobs', loadChildren: 'app/jobs/jobs.module#JobsModule', data: {preload: true}
    },
    {
        path: 'users',
        loadChildren: 'app/users/users.module#UsersModule'
    },
    {path: '**', component: PageNotFoundComponent, data: {notFound: true}}
];

export class CustomPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
        let data: any = route.data;
        return data && data.preload ? load() : of(null);
    }
}

@NgModule({
    declarations: [
        AppComponent, PageNotFoundComponent, HelloComponent, HighlightDirective
    ],
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: CustomPreloadingStrategy}),
        BrowserModule,
        FormsModule,
        HttpModule,
    ],
    providers: [CustomPreloadingStrategy],
    bootstrap: [AppComponent]
})
export class AppModule {
}
