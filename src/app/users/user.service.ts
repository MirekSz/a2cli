import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {User} from "./user";
import {Http} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class UserService {

    public modelChange: Subject<number> = new Subject();

    constructor(private http: Http) {
    }

    getUsers(): Observable<User[]> {
        // return this.http.get('http://strumyk-next-build:3000/users').flatMap(x => Observable.from(x.json())).zip(Observable.interval(2000)).map((res) => {
        //     return [res[0]];
        // })
        return this.http.get('http://strumyk-next-build:3000/users').map((res) => {
            return res.json();
        })
    }

    update(user: User): any {
        return this.http.put('http://strumyk-next-build:3000/users', user).toPromise().then(() => {
            this.modelChange.next(new Date().getDate());
        });
    }

}
