import { graphql } from 'babel-plugin-relay/macro';
import {
  useLazyLoadQuery
} from 'react-relay/hooks'
import { ExampleQuery } from './__generated__/ExampleQuery.graphql';

export const Example = () => {
  const response = useLazyLoadQuery<ExampleQuery>(
    graphql`
      query ExampleQuery {
        brazil: country(code: "BR") {
          name
          native
          capital
          emoji
          currency
          languages {
            code
            name
          }
        }
        blumenau: getCityByName(name: "Blumenau") {
          id
          name
          country
          coord {
            lon
            lat
          }
          weather {
            summary {
              title
              description
              icon
            }
            temperature {
              actual
              feelsLike
              min
              max
            }
            wind {
              speed
              deg
            }
            clouds {
              all
              visibility
              humidity
            }
            timestamp
          }
        }
      }
    `,
    {}
  )

  return (
    <div>
      <span>Country Schema</span>
      <pre>{JSON.stringify(response.brazil, null, 2)}</pre>
      <span>Weather Schema</span>
      <pre>{JSON.stringify(response.blumenau, null, 2)}</pre>
    </div>
  )
}
