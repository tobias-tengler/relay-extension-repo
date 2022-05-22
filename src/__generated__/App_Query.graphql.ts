/**
 * @generated SignedSource<<07132eb7433dadf52fb6044def0b338c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type App_Query$variables = {};
export type App_Query$data = {
  readonly field: string | null;
};
export type App_Query = {
  response: App_Query$data;
  variables: App_Query$variables;
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
    "name": "App_Query",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "App_Query",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "5c1d260af5c94cf4b79ec14bda08fc1c",
    "id": null,
    "metadata": {},
    "name": "App_Query",
    "operationKind": "query",
    "text": "query App_Query {\n  field\n}\n"
  }
};
})();

(node as any).hash = "c59e1e77c23e75880eb921e1e8969710";

export default node;
