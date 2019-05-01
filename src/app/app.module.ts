import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { registerLocaleData } from '@angular/common';
import { ConvertToSpacesPipe } from "./shared/convert-to-spaces";
import { StarComponent } from "./shared/star.component";
import { ProductService } from "./products/product.service";
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

@NgModule({
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR',
  },
  ProductService],
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
