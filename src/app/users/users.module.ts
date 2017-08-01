import {NgModule, Directive, PipeTransform, Pipe, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './user-list/user-list.component';
import {UserFormComponent} from './user-form/user-form.component';
import {HttpModule} from "@angular/http";
import {FormsModule, NG_VALIDATORS, FormControl} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {UserService} from "./user.service";


function validateEmail(c: FormControl) {
    let optionalParams: string = c.value;

    if (!optionalParams) {
        return null;
    }
    let firstUpperLetter = optionalParams.substr(0, 1).toUpperCase();
    if (optionalParams.substr(0, 1) == firstUpperLetter) {
        return null;
    }
    return {
        validateEmail: {
            valid: false
        }
    };
}


@Directive({
    selector: '[firstLetterUpperValidate]',
    providers: [
        {provide: NG_VALIDATORS, useValue: validateEmail, multi: true}
    ]
})
export class EmailValidator {
}

@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
    transform(value: number, exponent: string): number {
        let exp = parseFloat(exponent);
        return Math.pow(value, isNaN(exp) ? 1 : exp);
    }
}

@Component({
    template: '<h3>Hello</h3>'
})
export class HelloComponent {
}

@NgModule({
    imports: [CommonModule, HttpModule, FormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: UserListComponent,
                children: [
                    {path: ':id/details', component: UserFormComponent}
                ]
            },
            {
                path: ':id',
                component: UserFormComponent,
                children: []
            }

        ])],
    declarations: [UserListComponent, UserFormComponent, EmailValidator, ExponentialStrengthPipe, HelloComponent],
    providers: [UserService]
})
export class UsersModule {
}
