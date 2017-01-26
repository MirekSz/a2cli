import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobsComponent} from './jobs/jobs.component';
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild([
            {
                path: '',
                component: JobsComponent,
            }

        ])],
    declarations: [JobsComponent]
})
export class JobsModule {
}
