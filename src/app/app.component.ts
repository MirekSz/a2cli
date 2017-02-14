import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
declare var $: any;
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app works!';

    ngOnInit() {
    }
}
