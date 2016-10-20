import {NgModule, Type} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, ConnectionBackend} from '@angular/http';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {BuildUrlPipe} from './build-url.pipe';
import 'rxjs/add/operator/map';

@NgModule({
    imports: [ BrowserModule, HttpModule, FormsModule ],
    declarations: [AppComponent, BuildUrlPipe],
    bootstrap: [AppComponent],
    providers: [ConnectionBackend]
}) 
export class AppModule extends Type<AppModule>{}