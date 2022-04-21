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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { SharedModule } from './shared/shared.module'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { StoreModule } from '@ngrx/store'
import { _userReducer } from './store/app.reducer'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import { appReducer } from './store/app.state'
import { UserModule } from './user/user.module'
import { GraphQLInterceptor } from './shared/graphql/interceptor.graphql'
import { PodcastModule } from './podcast/podcast.module'
import { CoreModule } from './core/core.module'
@NgModule({
    declarations: [AppComponent],
    imports: [
        CoreModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        Material,
        RouterModule,
        EffectsModule.forRoot([]),
        GraphQLModule,
        HttpClientModule,
        ComponentsModule,
        SharedModule,
        UserModule,
        PodcastModule,
        InfiniteScrollModule,
        StoreModule.forRoot(appReducer),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: GraphQLInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
