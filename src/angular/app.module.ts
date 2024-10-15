import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';
import { UIRouterModule } from '@uirouter/angular';

import './app.css';
import { appStates } from './app.states';
import { appJSModule } from '../ajs/app.module.ajs';
import { AngularComponent } from './angular/angular.component';
import { View3Component } from './view3/view3.component';
import { View4Component } from './view4/view4.component';


@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,
        UIRouterUpgradeModule,
        UIRouterModule.forChild({ states: appStates}),    
    ],
    declarations: [
        AngularComponent,
        View3Component,
        View4Component
    ],
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) { }

    ngDoBootstrap(){
        this.upgrade.bootstrap(document.documentElement, [appJSModule.name]);
    }
}