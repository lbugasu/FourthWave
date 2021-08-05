import { Injectable } from '@angular/core'
import { concatMap, take, tap } from 'rxjs/operators'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/store/app.state'
import * as UserSelectors from '../../user/store/user.selectors'
@Injectable()
export class GraphQLInterceptor implements HttpInterceptor {
  token$: Observable<string>
  constructor (private store: Store<AppState>) {
    this.token$ = this.store.select(UserSelectors.getToken)
  }
  //function which will be called for all http calls
  intercept (
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.token$.pipe(
      take(1),
      concatMap(token => {
        if (token) {
          return next.handle(
            request.clone({
              setHeaders: { Authorization: token }
            })
          )
        }
        return next.handle(request)
      })
    )
  }
}
