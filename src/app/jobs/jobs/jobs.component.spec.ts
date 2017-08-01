/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BrowserModule, By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {JobsComponent} from './jobs.component';
import {JobsDetailsComponent} from '../jobs-details/jobs-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BrowserTestingModule} from "@angular/platform-browser/testing";


describe('JobsComponent', () => {
    let component: JobsComponent;
    let fixture: ComponentFixture<JobsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [JobsComponent, JobsDetailsComponent],
            imports: [FormsModule, HttpModule, ReactiveFormsModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(JobsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
    it('should create component with name', () => {
        component.name = 'Mirek';
        fixture.detectChanges();

        let de = fixture.debugElement.query(By.css('p'));
        let el = de.nativeElement;

        expect(el.textContent).toContain('Mirek')
    });
});
