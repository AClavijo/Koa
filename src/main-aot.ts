import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';
import { environment } from './environments/environment';
if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModuleFactory(AppModuleNgFactory);
