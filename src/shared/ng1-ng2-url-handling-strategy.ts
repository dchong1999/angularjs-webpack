import { UrlHandlingStrategy } from '@angular/router';

export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {

    shouldProcessUrl(url: any) {
        var urlStr:string = url.toString();
        console.log('TEST', urlStr);
        return urlStr == ("/") || urlStr == ("/#!/angular") || urlStr == ("/#!/view4");
    }

    extract(url: any) {
        return url;
    }

    merge(url: any, whole: any) {
        return url;
    }
}
