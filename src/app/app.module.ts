import { EffectsModule } from '@ngrx/effects'
import { ComponentsModule } from './components/components.module'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Material } from 'src/libs'
import { ReactiveFormsModule } from '@angular/forms'
import { GraphQLModule } from './shared/graphql/graphql.module'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { SharedModule } from './shared/shared.module'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { StoreModule } from '@ngrx/store'
import { _userReducer } from './store/app.reducer'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import { appReducer } from './store/app.state'
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    Material,
    RouterModule,
    GraphQLModule,
    HttpClientModule,
    ComponentsModule,
    SharedModule,
    InfiniteScrollModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
