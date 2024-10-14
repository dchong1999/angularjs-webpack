import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppRoutingModule } from './app-routing.module';
import { setUpLocationSync } from '@angular/router/upgrade';

import app from '../ajs/app.module.ajs';
import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { View3Component } from './view3/view3.component';
import { View4Component } from './view4/view4.component';
import { UrlHandlingStrategy } from '@angular/router';
import { Ng1Ng2UrlHandlingStrategy } from "../shared/ng1-ng2-url-handling-strategy";


@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        AngularComponent,
        View3Component,
        View4Component
    ],
    providers: [
        {
            provide: UrlHandlingStrategy,
            useClass: Ng1Ng2UrlHandlingStrategy
        }
    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) { }

    ngDoBootstrap(){
        this.upgrade.bootstrap(document.documentElement, [app]);
        setUpLocationSync(this.upgrade);
    }
}