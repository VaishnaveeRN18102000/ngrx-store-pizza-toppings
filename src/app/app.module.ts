import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EffectsModule } from "@ngrx/effects";

import { MetaReducer, StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from "../environments/environment";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const metaReducers: MetaReducer<any>[] = !environment.production
 ? [storeFreeze]
 : [];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule { }
