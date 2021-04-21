import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Material } from 'src/libs';
import { PagesModule } from './pages/pages.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GraphQLModule } from './shared/graphql/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    ReactiveFormsModule,
    Material,
    RouterModule,
    GraphQLModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
