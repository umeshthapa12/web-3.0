import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing';

// Primeng components
import { AppComponent } from './app.component';

// custom modules/components
import { NavigationModule } from './modules/navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NavigationModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
