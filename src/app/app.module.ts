import { ComponentsModule } from './components/components.module'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Material } from 'src/libs'
import { PagesModule } from './pages/pages.module'
import { ReactiveFormsModule } from '@angular/forms'
import { GraphQLModule } from './shared/graphql/graphql.module'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { SharedModule } from './shared/shared.module'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { StoreModule } from '@ngrx/store'
import { _userReducer } from './store/app.reducer'
import { reducers } from './me/store/reducers'
import { MeRoutingModule } from './me/me.routing'
import { MeModule } from './me/me.module'
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    ReactiveFormsModule,
    Material,
    MeModule,
    RouterModule,
    MeRoutingModule,
    GraphQLModule,
    HttpClientModule,
    ComponentsModule,
    SharedModule,
    InfiniteScrollModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
