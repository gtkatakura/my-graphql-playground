/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ExampleQueryVariables = {};
export type ExampleQueryResponse = {
    readonly brazil: {
        readonly name: string;
        readonly native: string;
        readonly capital: string | null;
        readonly emoji: string;
        readonly currency: string | null;
        readonly languages: ReadonlyArray<{
            readonly code: string;
            readonly name: string | null;
        }>;
    } | null;
    readonly blumenau: {
        readonly id: string | null;
        readonly name: string | null;
        readonly country: string | null;
        readonly coord: {
            readonly lon: number | null;
            readonly lat: number | null;
        } | null;
        readonly weather: {
            readonly summary: {
                readonly title: string | null;
                readonly description: string | null;
                readonly icon: string | null;
            } | null;
            readonly temperature: {
                readonly actual: number | null;
                readonly feelsLike: number | null;
                readonly min: number | null;
                readonly max: number | null;
            } | null;
            readonly wind: {
                readonly speed: number | null;
                readonly deg: number | null;
            } | null;
            readonly clouds: {
                readonly all: number | null;
                readonly visibility: number | null;
                readonly humidity: number | null;
            } | null;
            readonly timestamp: number | null;
        } | null;
    } | null;
};
export type ExampleQuery = {
    readonly response: ExampleQueryResponse;
    readonly variables: ExampleQueryVariables;
};



/*
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
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = [
  {
    "alias": "brazil",
    "args": [
      {
        "kind": "Literal",
        "name": "code",
        "value": "BR"
      }
    ],
    "concreteType": "Country",
    "kind": "LinkedField",
    "name": "country",
    "plural": false,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "native",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "capital",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "emoji",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "currency",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Language",
        "kind": "LinkedField",
        "name": "languages",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "code",
            "storageKey": null
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": "country(code:\"BR\")"
  },
  {
    "alias": "blumenau",
    "args": [
      {
        "kind": "Literal",
        "name": "name",
        "value": "Blumenau"
      }
    ],
    "concreteType": "City",
    "kind": "LinkedField",
    "name": "getCityByName",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "country",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Coordinates",
        "kind": "LinkedField",
        "name": "coord",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lon",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lat",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Weather",
        "kind": "LinkedField",
        "name": "weather",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Summary",
            "kind": "LinkedField",
            "name": "summary",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "description",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "icon",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Temperature",
            "kind": "LinkedField",
            "name": "temperature",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "actual",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "feelsLike",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "min",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "max",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Wind",
            "kind": "LinkedField",
            "name": "wind",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "speed",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "deg",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Clouds",
            "kind": "LinkedField",
            "name": "clouds",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "all",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "visibility",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "humidity",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "timestamp",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "getCityByName(name:\"Blumenau\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ExampleQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ExampleQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c93134c2e3df386d944c2f20286b3672",
    "id": null,
    "metadata": {},
    "name": "ExampleQuery",
    "operationKind": "query",
    "text": "query ExampleQuery {\n  brazil: country(code: \"BR\") {\n    name\n    native\n    capital\n    emoji\n    currency\n    languages {\n      code\n      name\n    }\n  }\n  blumenau: getCityByName(name: \"Blumenau\") {\n    id\n    name\n    country\n    coord {\n      lon\n      lat\n    }\n    weather {\n      summary {\n        title\n        description\n        icon\n      }\n      temperature {\n        actual\n        feelsLike\n        min\n        max\n      }\n      wind {\n        speed\n        deg\n      }\n      clouds {\n        all\n        visibility\n        humidity\n      }\n      timestamp\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '2486ac0d03cfc949f5f0c2a2c4c31f36';
export default node;
