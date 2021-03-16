import { graphql } from 'graphql'
import type { FC } from 'react'
import React from 'react'
import { RelayEnvironmentProvider } from 'react-relay/hooks'
import { Environment, Network, RecordSource, Store } from 'relay-runtime'
import { gatewaySchema } from './schema';

const rootValue = {}
const contextValue = {}

const fetchQuery = async (
  operation: any,
  variables: Record<string, unknown>
) => {
  return graphql(
    gatewaySchema,
    operation.text,
    rootValue,
    contextValue,
    variables,
  ).then((payload) => {
    if (payload.errors) {
      throw new Error(payload.errors.map(error => error.message).join('\n'));
    }
    
    if (!payload.data) {
      throw new Error('No payload data')
    }

    return { data: payload.data };
  });
  // const response = await fetch('/graphql', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     query: operation.text,
  //     variables,
  //   }),
  // })

  // return response.json()
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
})

export const GraphQLProvider: FC = ({ children }) => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      {children}
    </RelayEnvironmentProvider>
  )
}
