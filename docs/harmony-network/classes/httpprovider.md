[@harmony-js/network](../globals.md) › [HttpProvider](httpprovider.md)

# Class: HttpProvider

## Hierarchy

* [BaseProvider](baseprovider.md)

  ↳ **HttpProvider**

## Index

### Constructors

* [constructor](httpprovider.md#constructor)

### Properties

* [fetcher](httpprovider.md#optional-fetcher)
* [options](httpprovider.md#optional-options)
* [reqMiddleware](httpprovider.md#protected-reqmiddleware)
* [resMiddleware](httpprovider.md#protected-resmiddleware)
* [url](httpprovider.md#url)

### Methods

* [callbackHandler](httpprovider.md#callbackhandler)
* [endpointHandler](httpprovider.md#endpointhandler)
* [getMiddleware](httpprovider.md#protected-getmiddleware)
* [optionsHandler](httpprovider.md#optionshandler)
* [payloadHandler](httpprovider.md#payloadhandler)
* [pushMiddleware](httpprovider.md#protected-pushmiddleware)
* [requestFunc](httpprovider.md#requestfunc)
* [send](httpprovider.md#send)
* [sendServer](httpprovider.md#sendserver)
* [subscribe](httpprovider.md#subscribe)
* [unsubscribe](httpprovider.md#unsubscribe)

### Object literals

* [middlewares](httpprovider.md#middlewares)

## Constructors

###  constructor

\+ **new HttpProvider**(`url`: string, `options?`: any, `fetcher?`: any): *[HttpProvider](httpprovider.md)*

*Overrides [BaseProvider](baseprovider.md).[constructor](baseprovider.md#constructor)*

*Defined in [providers/http.ts:18](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-network/src/providers/http.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`options?` | any |
`fetcher?` | any |

**Returns:** *[HttpProvider](httpprovider.md)*

## Properties

### `Optional` fetcher

• **fetcher**? : *any*

*Defined in [providers/http.ts:17](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-network/src/providers/http.ts#L17)*

___

### `Optional` options

• **options**? : *any*

*Defined in [providers/http.ts:18](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-network/src/providers/http.ts#L18)*

___

### `Protected` reqMiddleware

• **reqMiddleware**: *[ReqMiddleware](../globals.md#reqmiddleware)* =  new Map().set('*', [])

*Inherited from [BaseProvider](baseprovider.md).[reqMiddleware](baseprovider.md#protected-reqmiddleware)*

*Defined in [providers/baseProvider.ts:18](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-network/src/providers/baseProvider.ts#L18)*

___

### `Protected` resMiddleware

• **resMiddleware**: *[ResMiddleware](../globals.md#resmiddleware)* =  new Map().set('*', [])

*Inherited from [BaseProvider](baseprovider.md).[resMiddleware](baseprovider.md#protected-resmiddleware)*

*Defined in [providers/baseProvider.ts:19](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-network/src/providers/baseProvider.ts#L19)*

___

###  url

• **url**: *string*

*Overrides [BaseProvider](baseprovider.md).[url](baseprovider.md#protected-url)*

*Defined in [providers/http.ts:16](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-network/src/providers/http.ts#L16)*

## Methods

###  callbackHandler

▸ **callbackHandler**(`data`: any, `cb`: any): *any*

*Defined in [providers/http.ts:133](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-network/src/providers/http.ts#L133)*

**`function`** callbackHandler

**`memberof`** HttpProvider.prototype

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | any | from server |
`cb` | any | callback function |

**Returns:** *any*

- return object or callback function

___

###  endpointHandler

▸ **endpointHandler**(`obj`: object, `endpoint?`: undefined | string): *object*

*Defined in [providers/http.ts:102](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-network/src/providers/http.ts#L102)*

**`function`** endpointHandler

**`memberof`** HttpProvider.prototype

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | object | payload object |
`endpoint?` | undefined &#124; string | add the endpoint to payload object |

**Returns:** *object*

- assign a new object

___

### `Protected` getMiddleware

▸ **getMiddleware**(`method`: [RPCMethod](../enums/rpcmethod.md) | string): *[[ReqMiddleware](../globals.md#reqmiddleware)[], [ResMiddleware](../globals.md#resmiddleware)[]]*

*Inherited from [BaseProvider](baseprovider.md).[getMiddleware](baseprovider.md#protected-getmiddleware)*

*Defined in [providers/baseProvider.ts:47](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-network/src/providers/baseProvider.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | [RPCMethod](../enums/rpcmethod.md) &#124; string |

**Returns:** *[[ReqMiddleware](../globals.md#reqmiddleware)[], [ResMiddleware](../globals.md#resmiddleware)[]]*

___

###  optionsHandler

▸ **optionsHandler**(`obj`: object): *object*

*Defined in [providers/http.ts:115](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-network/src/providers/http.ts#L115)*

**`function`** optionsHandler

**`memberof`** HttpProvider.prototype

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | object | options object |

**Returns:** *object*

- assign a new option object

___

###  payloadHandler

▸ **payloadHandler**(`payload`: [RPCRequestPayload](../interfaces/rpcrequestpayload.md)‹object›): *object*

*Defined in [providers/http.ts:91](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-network/src/providers/http.ts#L91)*

**`function`** payloadHandler

**`memberof`** HttpProvider.prototype

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`payload` | [RPCRequestPayload](../interfaces/rpcrequestpayload.md)‹object› | payload object |

**Returns:** *object*

- to payload object

___

### `Protected` pushMiddleware

▸ **pushMiddleware**(`fn`: any, `type`: [MiddlewareType](../enums/middlewaretype.md), `match`: string | [RPCMethod](../enums/rpcmethod.md) | RegExp): *void*

*Inherited from [BaseProvider](baseprovider.md).[pushMiddleware](baseprovider.md#protected-pushmiddleware)*

*Defined in [providers/baseProvider.ts:31](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-network/src/providers/baseProvider.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | any |
`type` | [MiddlewareType](../enums/middlewaretype.md) |
`match` | string &#124; [RPCMethod](../enums/rpcmethod.md) &#124; RegExp |

**Returns:** *void*

___

###  requestFunc

▸ **requestFunc**(`__namedParameters`: object): *Promise‹any›*

*Defined in [providers/http.ts:59](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-network/src/providers/http.ts#L59)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`callback` | any |
`endpoint` | undefined &#124; string |
`payload` | [RPCRequestPayload](../interfaces/rpcrequestpayload.md)‹object› |

**Returns:** *Promise‹any›*

___

###  send

▸ **send**(`payload`: [RPCRequestPayload](../interfaces/rpcrequestpayload.md)‹object›, `callback?`: any): *Promise‹any›*

*Defined in [providers/http.ts:43](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-network/src/providers/http.ts#L43)*

**`function`** send

**`memberof`** HttpProvider.prototype

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`payload` | [RPCRequestPayload](../interfaces/rpcrequestpayload.md)‹object› | payload object |
`callback?` | any | callback function |

**Returns:** *Promise‹any›*

- RPC Response

___

###  sendServer

▸ **sendServer**(`endpoint`: string, `payload`: [RPCRequestPayload](../interfaces/rpcrequestpayload.md)‹object›, `callback`: any): *Promise‹any›*

*Defined in [providers/http.ts:55](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-network/src/providers/http.ts#L55)*

**`function`** sendServer

**`memberof`** HttpProvider.prototype

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`endpoint` | string | endpoint to server |
`payload` | [RPCRequestPayload](../interfaces/rpcrequestpayload.md)‹object› | payload object |
`callback` | any | callback function |

**Returns:** *Promise‹any›*

- RPC Response

___

###  subscribe

▸ **subscribe**(): *void*

*Defined in [providers/http.ts:140](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-network/src/providers/http.ts#L140)*

**Returns:** *void*

___

###  unsubscribe

▸ **unsubscribe**(): *void*

*Defined in [providers/http.ts:144](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-network/src/providers/http.ts#L144)*

**Returns:** *void*

## Object literals

###  middlewares

### ▪ **middlewares**: *object*

*Inherited from [BaseProvider](baseprovider.md).[middlewares](baseprovider.md#middlewares)*

*Defined in [providers/baseProvider.ts:5](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-network/src/providers/baseProvider.ts#L5)*

▪ **request**: *object*

*Defined in [providers/baseProvider.ts:6](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-network/src/providers/baseProvider.ts#L6)*

* **use**(`fn`: [ReqMiddleware](../globals.md#reqmiddleware), `match`: string | [RPCMethod](../enums/rpcmethod.md) | RegExp): *void*

▪ **response**: *object*

*Defined in [providers/baseProvider.ts:11](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-network/src/providers/baseProvider.ts#L11)*

* **use**(`fn`: [ResMiddleware](../globals.md#resmiddleware), `match`: string | [RPCMethod](../enums/rpcmethod.md) | RegExp): *void*
