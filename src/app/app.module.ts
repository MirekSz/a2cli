import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';


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
        path: 'users',
        loadChildren: 'app/users/users.module#UsersModule',
    },
    {path: '**', component: PageNotFoundComponent, data: {notFound: true}}
];

@NgModule({
    declarations: [
        AppComponent, PageNotFoundComponent, HelloComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        FormsModule,
        HttpModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
