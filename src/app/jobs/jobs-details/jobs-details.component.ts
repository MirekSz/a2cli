import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
export interface Customer {
    name: string; // required field with minimum 5 characters
    addresses: Address[]; // user can have one or more addresses
}

export interface Address {
    street: string;  // required field
    postcode: string;
}

// const form = new FormGroup({
//   first: new FormControl('Nancy', Validators.minLength(2)),
//   last: new FormControl('Drew'),
// });

@Component({
    selector: 'job-details',
    templateUrl: './jobs-details.component.html',
    styleUrls: ['./jobs-details.component.css']
})
export class JobsDetailsComponent implements OnInit {
    public myForm: FormGroup;
    @Input() details: string;
    @Output() onResult = new EventEmitter<Reaction>();

    constructor(private _fb: FormBuilder) {
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
            address: new FormGroup({
                street: new FormControl('', <any>Validators.required),
                postcode: new FormControl('8000')
            })
        });
        this.myForm.controls['name'].setValue('John', {onlySelf: true});
        this.myForm.controls['name'].valueChanges.subscribe(x => {
            console.log({event: 'STATUS CHANGED', object: x});
            let control: FormGroup = <FormGroup>this.myForm.controls['address'];
            control.controls['street'].setValue(x, {onlySelf: true});

            // (<FormGroup>this.myForm).setValue(people, {onlySelf: true});
        });
        const people = {
            name: 'Jane',
            address: {
                street: 'High street',
                postcode: '94043'
            }
        };

        (<FormGroup>this.myForm)
            .setValue(people, {onlySelf: true});

        // const myFormValueChanges$ = this.myForm.valueChanges;
        //
        // myFormValueChanges$.subscribe(x => {
        //     console.log({event: 'STATUS CHANGED', object: x});
        //     people.name = new Date() + '';
        // });
    }

    save() {
        this.onResult.emit({reset: false, newValue: this.details});
    }
}
export interface Reaction {
    reset: boolean
    newValue: string;
}
