import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobsComponent} from './jobs/jobs.component';
import {JobsDetailsComponent} from './jobs-details/jobs-details.component';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
    imports: [
        FormsModule, ReactiveFormsModule,
        CommonModule, RouterModule.forChild([
            {
                path: '',
                component: JobsComponent,
            }

        ])],
    declarations: [JobsComponent, JobsDetailsComponent]
})
export class JobsModule {
}
