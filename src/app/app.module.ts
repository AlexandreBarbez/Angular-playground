import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import {WelcomeComponent} from "./home/welcome.component";
import {RouterModule} from "@angular/router";
import {ProductModule} from "./products/product.module";
import {ProductService} from "./products/product.service";

registerLocaleData(localeFr);

@NgModule({
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR',
  },ProductService],
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'},
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
