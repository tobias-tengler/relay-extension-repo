/**
 * @generated SignedSource<<aee742e4f415fe2b941a105714003510>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type Test_Query$variables = {};
export type Test_Query$data = {
  readonly field: string | null;
};
export type Test_Query = {
  response: Test_Query$data;
  variables: Test_Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "field",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "Test_Query",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "Test_Query",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "1e9531b8c22919e41f95773e68009d45",
    "id": null,
    "metadata": {},
    "name": "Test_Query",
    "operationKind": "query",
    "text": "query Test_Query {\n  field\n}\n"
  }
};
})();

(node as any).hash = "b14605db8dfd6435c42e7f76e2632648";

export default node;
