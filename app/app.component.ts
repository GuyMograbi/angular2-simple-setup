
import { Component, Inject, Injectable } from '@angular/core'
import {Http} from '@angular/http'
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';


@Component({
    selector: 'my-app',
    template: `
        <h1> My first angular app</h1>
    `
})

// @Injectable() // - why is this not working?
export class AppComponent{
    constructor(@Inject(Http) /* remove @Inject once @Injectable works */ public http:Http){
        http.get('https://api.travis-ci.org/config')
        // http.get('https://api.travis-ci.org/config').toPromise().then((response => console.log(response.json().data) )
            .map(res => res.text())
            .subscribe(
            data => console.log(data),
            err => console.error(err),
            () => console.log('Random Quote Complete')
        );
    }
}