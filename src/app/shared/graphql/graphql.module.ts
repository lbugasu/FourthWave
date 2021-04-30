import { environment } from '../../../environments/environment'
import { WebSocketLink } from '@apollo/client/link/ws'
import { NgModule } from '@angular/core'
import {
  ApolloClientOptions,
  ApolloLink,
  InMemoryCache,
  split
} from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'
import { APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { getMainDefinition } from '@apollo/client/utilities'

const uri = `${environment.api}/graphql` // <-- add the URL of the GraphQL server here

export function createApollo (httpLink: HttpLink): ApolloClientOptions<any> {
  const token = localStorage.getItem('token')

  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8'
    }
  }))

  const auth = setContext((operation, context) => {
    if (token === null) {
      return {}
    } else {
      return {
        headers: {
          Authorization: `${token}`
        }
      }
    }
  })
  const http = ApolloLink.from([basic, auth, httpLink.create({ uri })])

  const cache = new InMemoryCache()

  return {
    link: http,
    headers: {
      authorization: token ? `${token}` : ''
    },
    cache,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all'
      }
    }
  }
}

// const httpLink = new HttpLink({uri: uri})
@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ]
})
export class GraphQLModule {}
