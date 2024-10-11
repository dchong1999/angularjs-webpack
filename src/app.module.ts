import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import app from './app.module.ajs';
import { View3Component } from './angular/view3/view3.component';

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule
    ],
    declarations: [
        View3Component
    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) { }

    ngDoBootstrap(){
        this.upgrade.bootstrap(document.documentElement, [app]);
    }
}