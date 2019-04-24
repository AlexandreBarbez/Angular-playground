// requis pour display les choses sur des navigateurs (import des ngIf, ngFor, des bindings simples via {{}})
import { BrowserModule } from '@angular/platform-browser';
// requis pour le binding bidirectionnel (ngModel [()] "banana in the box)
import { FormsModule } from '@angular/forms';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localeFr);

@NgModule({
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR'
  }],
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
