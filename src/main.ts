import 'jquery';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as angular from 'angular'; //must come before setAngualrJSGlobal
import { setAngularJSGlobal  } from '@angular/upgrade/static';
import { UIRouter, UrlService } from '@uirouter/core';
import { visualizer } from '@uirouter/visualizer';
import 'zone.js';
import 'reflect-metadata';

import { AppModule } from './angular/app.module';
import { appJSModule } from './ajs/app.module.ajs';

setAngularJSGlobal(angular);

// delay initial URL sync until all bootstrapping completes
appJSModule.config(['$urlServiceProvider', ($urlService: UrlService) => $urlService.deferIntercept()]);

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(platformRef => {
        // initalize the router
        const urlService: UrlService = platformRef.injector.get(UIRouter).urlService;

        // tell router to listen to URL changes
        urlService.listen();
        urlService.sync();
    });

// show ui-router-visualizer
appJSModule.run(['$uiRouter', ($uiRouter: UIRouter) => visualizer($uiRouter)]);