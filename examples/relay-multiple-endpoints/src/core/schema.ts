import { Executor } from '@graphql-tools/delegate'
import { stitchSchemas } from '@graphql-tools/stitch'
import { buildSchema, print } from 'graphql';
import { weatherSchema } from './weatherSchema';
import { countriesSchema } from './countriesSchema';

const weatherExecutor: Executor = async ({ document, variables }) => {
  const query = print(document);

  const fetchResult = await fetch('https://graphql-weather-api.herokuapp.com/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });

  return fetchResult.json();
}

const countriesExecutor: Executor = async ({ document, variables }) => {
  const query = print(document);

  const fetchResult = await fetch('https://countries.trevorblades.com/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });

  return fetchResult.json();
}

export const gatewaySchema = stitchSchemas({
  subschemas: [
    {
      schema: buildSchema(weatherSchema),
      executor: weatherExecutor,
    },
    {
      schema: buildSchema(countriesSchema),
      executor: countriesExecutor,
    }
  ]
})