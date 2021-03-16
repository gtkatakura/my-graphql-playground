/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AppQueryVariables = {};
export type AppQueryResponse = {
    readonly blumenau: {
        readonly id: string | null;
        readonly name: string | null;
    } | null;
};
export type AppQuery = {
    readonly response: AppQueryResponse;
    readonly variables: AppQueryVariables;
};



/*
query AppQuery {
  blumenau: getCityByName(name: "blumenau", country: "brazil") {
    id
    name
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": "blumenau",
    "args": [
      {
        "kind": "Literal",
        "name": "country",
        "value": "brazil"
      },
      {
        "kind": "Literal",
        "name": "name",
        "value": "blumenau"
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
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": "getCityByName(country:\"brazil\",name:\"blumenau\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "4a90cff8d4d15fa8519805c5842e7dbd",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  blumenau: getCityByName(name: \"blumenau\", country: \"brazil\") {\n    id\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f9868990f29bc2294af168d0e09f4c3d';
export default node;
