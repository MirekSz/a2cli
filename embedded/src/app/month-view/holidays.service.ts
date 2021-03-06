import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Http} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class HolidaysService {

    constructor(private http: Http) {
    }

    getHilidays(): Promise<Holiday[]> {
        return this.http.get('http://localhost:3000/holidays').toPromise();
    }


}

export class Holiday {
    constructor(public start: Date, public end: Date) {

    }
}
