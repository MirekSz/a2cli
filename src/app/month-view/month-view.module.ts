import {MonthSelectorModule} from './month-selector/month-selector.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MonthViewComponent} from "./month-view.component";
import {CommonModule} from '@angular/common';
import {NgModule, Directive, PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'hideZero'})
export class ZeroHiddenPipe implements PipeTransform {
    transform(value: number, exponent: string): string {
        return value == 0 ? '' : value + '';
    }
}

@NgModule({
    imports: [CommonModule,
        FormsModule, ReactiveFormsModule, MonthSelectorModule],
    declarations: [MonthViewComponent, ZeroHiddenPipe], exports: [MonthViewComponent]
})
export class MonthViewModule {
}
