/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {JobsComponent} from './jobs.component';

describe('JobsComponent', () => {
    let component: JobsComponent;
    let fixture: ComponentFixture<JobsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [JobsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(JobsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
    it('should create component2', () => {
        component.name = 'Mirek';
        fixture.detectChanges();

        let de = fixture.debugElement.query(By.css('p'));
        let el = de.nativeElement;

        expect(el.textContent).toContain('Mirek')
    });
});
