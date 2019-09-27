[@harmony-js/network](globals.md)

# @harmony-js/network

## Index

### Enumerations

* [EmittType](enums/emitttype.md)
* [MiddlewareType](enums/middlewaretype.md)
* [ProviderType](enums/providertype.md)
* [RPCErrorCode](enums/rpcerrorcode.md)
* [RPCMethod](enums/rpcmethod.md)
* [SocketConnection](enums/socketconnection.md)
* [SocketState](enums/socketstate.md)
* [SubscribeReturns](enums/subscribereturns.md)

### Classes

* [BaseBlockTracker](classes/baseblocktracker.md)
* [BaseProvider](classes/baseprovider.md)
* [BaseSocket](classes/basesocket.md)
* [Emitter](classes/emitter.md)
* [HttpProvider](classes/httpprovider.md)
* [JsonRpc](classes/jsonrpc.md)
* [LogSub](classes/logsub.md)
* [Messenger](classes/messenger.md)
* [NewHeaders](classes/newheaders.md)
* [NewPendingTransactions](classes/newpendingtransactions.md)
* [PollingBlockTracker](classes/pollingblocktracker.md)
* [Provider](classes/provider.md)
* [ResponseMiddleware](classes/responsemiddleware.md)
* [SubscribeBlockTracker](classes/subscribeblocktracker.md)
* [SubscriptionMethod](classes/subscriptionmethod.md)
* [Syncing](classes/syncing.md)
* [WSProvider](classes/wsprovider.md)

### Interfaces

* [Middleware](interfaces/middleware.md)
* [RPCError](interfaces/rpcerror.md)
* [RPCRequest](interfaces/rpcrequest.md)
* [RPCRequestOptions](interfaces/rpcrequestoptions.md)
* [RPCRequestPayload](interfaces/rpcrequestpayload.md)
* [RPCResponseBase](interfaces/rpcresponsebase.md)
* [RPCResponseBody](interfaces/rpcresponsebody.md)
* [RPCResult](interfaces/rpcresult.md)
* [ShardingItem](interfaces/shardingitem.md)
* [ShardingProvider](interfaces/shardingprovider.md)

### Type aliases

* [ReqMiddleware](globals.md#reqmiddleware)
* [ResMiddleware](globals.md#resmiddleware)

### Variables

* [DEFAULT_TIMEOUT](globals.md#const-default_timeout)
* [blockTrackerEvents](globals.md#const-blocktrackerevents)
* [sec](globals.md#const-sec)

### Functions

* [_fetch](globals.md#_fetch)
* [calculateSum](globals.md#const-calculatesum)
* [composeMiddleware](globals.md#composemiddleware)
* [getRawForData](globals.md#getrawfordata)
* [getResultForData](globals.md#getresultfordata)
* [onResponse](globals.md#onresponse)
* [performRPC](globals.md#const-performrpc)
* [timeout](globals.md#timeout)

### Object literals

* [DEFAULT_HEADERS](globals.md#const-default_headers)
* [defaultOptions](globals.md#const-defaultoptions)
* [fetchRPC](globals.md#const-fetchrpc)

## Type aliases

###  ReqMiddleware

Ƭ **ReqMiddleware**: *Map‹string | [RPCMethod](enums/rpcmethod.md) | RegExp, any[]›*

*Defined in [types.ts:3](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/types.ts#L3)*

___

###  ResMiddleware

Ƭ **ResMiddleware**: *Map‹string | [RPCMethod](enums/rpcmethod.md) | RegExp, any[]›*

*Defined in [types.ts:4](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/types.ts#L4)*

## Variables

### `Const` DEFAULT_TIMEOUT

• **DEFAULT_TIMEOUT**: *number* = 120000

*Defined in [rpcMethod/net.ts:1](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/rpcMethod/net.ts#L1)*

___

### `Const` blockTrackerEvents

• **blockTrackerEvents**: *string[]* =  ['sync', 'latest']

*Defined in [tracker/baseTracker.ts:8](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/tracker/baseTracker.ts#L8)*

___

### `Const` sec

• **sec**: *1000* = 1000

*Defined in [tracker/baseTracker.ts:4](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/tracker/baseTracker.ts#L4)*

*Defined in [tracker/pollingTracker.ts:5](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/tracker/pollingTracker.ts#L5)*

## Functions

###  _fetch

▸ **_fetch**(`fetchPromise`: Promise‹any›, `timeout`: number): *Promise‹any›*

*Defined in [rpcMethod/net.ts:5](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/rpcMethod/net.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`fetchPromise` | Promise‹any› |
`timeout` | number |

**Returns:** *Promise‹any›*

___

### `Const` calculateSum

▸ **calculateSum**(`accumulator`: number, `currentValue`: number): *number*

*Defined in [tracker/baseTracker.ts:6](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/tracker/baseTracker.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`accumulator` | number |
`currentValue` | number |

**Returns:** *number*

___

###  composeMiddleware

▸ **composeMiddleware**(...`fns`: any[]): *any*

*Defined in [rpcMethod/net.ts:34](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/rpcMethod/net.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`...fns` | any[] |

**Returns:** *any*

___

###  getRawForData

▸ **getRawForData**(`data`: any): *any*

*Defined in [util.ts:19](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/util.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *any*

___

###  getResultForData

▸ **getResultForData**(`data`: any): *any*

*Defined in [util.ts:9](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/util.ts#L9)*

**`function`** getResultForData

**`description`** get result for data by default

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | any | object get from provider |

**Returns:** *any*

data result or data

___

###  onResponse

▸ **onResponse**(`response`: [ResponseMiddleware](classes/responsemiddleware.md)): *any*

*Defined in [util.ts:23](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/util.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [ResponseMiddleware](classes/responsemiddleware.md) |

**Returns:** *any*

___

### `Const` performRPC

▸ **performRPC**(`request`: any, `handler`: any, `fetcher`: any): *Promise‹any›*

*Defined in [rpcMethod/net.ts:20](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/rpcMethod/net.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | any |
`handler` | any |
`fetcher` | any |

**Returns:** *Promise‹any›*

___

###  timeout

▸ **timeout**(`duration`: number, `unref`: any): *Promise‹unknown›*

*Defined in [tracker/pollingTracker.ts:7](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/tracker/pollingTracker.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`duration` | number |
`unref` | any |

**Returns:** *Promise‹unknown›*

## Object literals

### `Const` DEFAULT_HEADERS

### ▪ **DEFAULT_HEADERS**: *object*

*Defined in [rpcMethod/net.ts:3](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/rpcMethod/net.ts#L3)*

###  Content-Type

• **Content-Type**: *string* = "application/json"

*Defined in [rpcMethod/net.ts:3](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/rpcMethod/net.ts#L3)*

___

### `Const` defaultOptions

### ▪ **defaultOptions**: *object*

*Defined in [providers/http.ts:7](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/providers/http.ts#L7)*

###  headers

• **headers**: *object* =  DEFAULT_HEADERS

*Defined in [providers/http.ts:10](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/providers/http.ts#L10)*

###  method

• **method**: *string* = "POST"

*Defined in [providers/http.ts:8](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/providers/http.ts#L8)*

###  password

• **password**: *null* =  null

*Defined in [providers/http.ts:12](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/providers/http.ts#L12)*

###  timeout

• **timeout**: *number* =  DEFAULT_TIMEOUT

*Defined in [providers/http.ts:9](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/providers/http.ts#L9)*

###  user

• **user**: *null* =  null

*Defined in [providers/http.ts:11](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/providers/http.ts#L11)*

___

### `Const` fetchRPC

### ▪ **fetchRPC**: *object*

*Defined in [providers/defaultFetcher.ts:4](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/providers/defaultFetcher.ts#L4)*

###  requestHandler

▸ **requestHandler**(`request`: [RPCRequest](interfaces/rpcrequest.md)‹any[]›, `headers`: any): *Promise‹Response›*

*Defined in [providers/defaultFetcher.ts:5](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/providers/defaultFetcher.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [RPCRequest](interfaces/rpcrequest.md)‹any[]› |
`headers` | any |

**Returns:** *Promise‹Response›*

###  responseHandler

▸ **responseHandler**(`response`: Response, `request`: [RPCRequest](interfaces/rpcrequest.md)‹any›, `handler`: any): *Promise‹object›*

*Defined in [providers/defaultFetcher.ts:23](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/providers/defaultFetcher.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | Response |
`request` | [RPCRequest](interfaces/rpcrequest.md)‹any› |
`handler` | any |

**Returns:** *Promise‹object›*