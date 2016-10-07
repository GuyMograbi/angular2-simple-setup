
import { Component, Inject/*, Injectable */} from '@angular/core'
import {Http} from '@angular/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
// import { Observable }     from 'rxjs/Observable';


//



//     


@Component({
    selector: 'my-app',
    template: `
        <h1> My first angular app</h1>
        Repository: <input [(ngModel)]="repository" /><br/>
         <button (click)="refresh()">Refresh</button>
         <table *ngIf="builds.length > 0">
            <tr>
                <td>Branch</td>
                <td>Message</td>
                <td>State</td>
                
            </tr>
            <tr *ngFor="let build of builds">
                <td><a [href]="'https://travis-ci.org/' + repository + '/builds/' + build.id">{{build.branch}}</a></td>
                <td>{{build.message}}</td>
                <td>{{build.state}}</td>
            </tr>
         </table>
         <div *ngIf="builds.length === 0">
            No builds. Try clicking refresh to load builds 
        </div>  
    `
})

// @Injectable() // - why is this not working?
export class AppComponent{
    public repository:string = 'GuyMograbi/mograblog'
    public builds = [];
    constructor(@Inject(Http) /* remove @Inject once @Injectable works */ public http:Http){ }

    refresh(){
        this.http.get('https://api.travis-ci.org/repos/' + this.repository + '/builds.json')
            .map(res => res.json())
            .subscribe(
                data => this.builds = data,
                err => console.error(err),
                () => console.log('Travis Fetch Completed')
            )
    }
}