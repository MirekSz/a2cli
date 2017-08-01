import {NgModule, Component}             from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';

import {DashboardComponent}   from './dashboard.component';
import {HeroesComponent}      from './heroes.component';
import {HeroDetailComponent}  from './hero-detail.component';

@Component({
    template: `<h3 (click)="go()">Hello</h3>
<button [routerLink]="['./', {outlets: {b: 'b',c:'c'}}]">
    Show nested
</button>`
})
export class HelloComponent {
    constructor(private router: Router) {
    }

    go() {
        this.router.navigateByUrl("/heroes/(b:b)");
    }
}

const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'detail/:id', component: HeroDetailComponent},
    {
        path: 'heroes', component: HeroesComponent,
        children: [
            {path: '', component: HelloComponent},
            {path: 'b', component: HelloComponent, outlet: 'b'},
            {path: 'c', component: HelloComponent, outlet: 'c'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [HelloComponent]
})
export class AppRoutingModule {
}
