import {Component, OnInit, OnDestroy, EventEmitter} from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../user";
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
    private count: number = 0;
    private users: User[];
    private as: Observable<User[]>;
    private message$: Observable<string>;
    private byby: Subscription;
    private showDetails: boolean;
    private listener: Subscription;
    private selectedUser: User;

    constructor(private service: UserService,
                private router: Router) {
    }

    ngOnDestroy() {
        this.byby.unsubscribe();
        this.listener.unsubscribe();
    }


    select(user: User) {
        let eventEmitter = new EventEmitter();
        console.log('user: ', user, eventEmitter);

        this.selectedUser = user;
        this.router.navigate(['/users', user.id, 'details'], {queryParams: {a: 5}});
    }

    ngOnInit() {
        this.listener = this.service.modelChange.subscribe(() => {
            this.readData();
            this.selectedUser = null;
        });

        this.readData();
        this.message$ = Observable.interval(500)
            .map(i => {
                // console.log('i: ', i);

                return i + ""
            });
        this.byby = this.message$.subscribe((data) => {
            // console.log('data: ', data);

        })
    }

    readData() {
        this.as = this.service.getUsers();
        this.service.getUsers().subscribe((users) => {
            console.log(users);
            this.count = users.length;
            this.users = users;
        });
    }

}
