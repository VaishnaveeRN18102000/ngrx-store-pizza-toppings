import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { MetaReducer, StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from "../environments/environment";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers, effects, CustomSerializer } from './store';
import { ToppingsModule } from './toppings/toppings.module';

export const metaReducers: MetaReducer<any>[] = !environment.production
 ? [storeFreeze]
 : [];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot(),
    AppRoutingModule,
    ToppingsModule,
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule { }
