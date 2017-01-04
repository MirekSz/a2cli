import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {User} from "../user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../user.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class UserFormComponent implements OnInit {
    userAsJSON: any;
    user: User;

    constructor(private route: ActivatedRoute, private router: Router, private service: UserService) {
    }

    save() {
        console.log('this.user: ', this.user);
        this.service.update(this.user);
        this.router.navigate(['/users']);
    }

    ngOnInit() {
        this.route.params.forEach((param) => {
            var id = param['id'];
            this.service.getUsers().flatMap(arr => Observable.from(arr)).find((user) => user.id == id).subscribe((op) => {
                this.userAsJSON = JSON.stringify(op);
                this.user = op;
            });
        });
    }

}
