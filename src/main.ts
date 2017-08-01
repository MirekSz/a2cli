import './polyfills.ts';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {environment} from './environments/environment';
import {AppModule} from './app/app.module';

import * as r from 'superagent';


r.get('asd').then((s) => {
    let bo = s.body;
}).catch((e) => {
    let s = e.status1;
});

interface Ok {
    data: string,
    s: number;
}

interface Error {
    msg: string,
    error: number;
}


class A {
    hello(): Promise<Ok> {
        return new Promise((res, rej) => {
            res("sads");
        });
    }
}

new A().hello().then((a) => {
    let datas = a.data;
}).catch((e) => {
    let yo = e.yo;
});

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
