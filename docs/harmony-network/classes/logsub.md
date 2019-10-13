[@harmony-js/network](../globals.md) › [LogSub](logsub.md)

# Class: LogSub

## Hierarchy

  ↳ [SubscriptionMethod](subscriptionmethod.md)

  ↳ **LogSub**

## Index

### Constructors

* [constructor](logsub.md#constructor)

### Properties

* [connection](logsub.md#connection)
* [emitter](logsub.md#emitter)
* [handlers](logsub.md#handlers)
* [jsonRpc](logsub.md#jsonrpc)
* [messenger](logsub.md#messenger)
* [options](logsub.md#options)
* [param](logsub.md#param)
* [reqMiddleware](logsub.md#protected-reqmiddleware)
* [resMiddleware](logsub.md#protected-resmiddleware)
* [shardID](logsub.md#shardid)
* [subscriptionId](logsub.md#subscriptionid)
* [subscriptions](logsub.md#subscriptions)
* [url](logsub.md#url)

### Accessors

* [connected](logsub.md#connected)

### Methods

* [addEventListener](logsub.md#addeventlistener)
* [clearSubscriptions](logsub.md#clearsubscriptions)
* [constructPayload](logsub.md#constructpayload)
* [createWebsocketProvider](logsub.md#createwebsocketprovider)
* [getMiddleware](logsub.md#protected-getmiddleware)
* [getSubscriptionEvent](logsub.md#getsubscriptionevent)
* [hasSubscription](logsub.md#hassubscription)
* [isConnecting](logsub.md#isconnecting)
* [on](logsub.md#on)
* [onClose](logsub.md#onclose)
* [onConnect](logsub.md#onconnect)
* [onData](logsub.md#ondata)
* [onError](logsub.md#onerror)
* [onMessage](logsub.md#onmessage)
* [onNewSubscriptionItem](logsub.md#onnewsubscriptionitem)
* [onReady](logsub.md#onready)
* [once](logsub.md#once)
* [pushMiddleware](logsub.md#protected-pushmiddleware)
* [reconnect](logsub.md#reconnect)
* [registerEventListeners](logsub.md#registereventlisteners)
* [removeAllSocketListeners](logsub.md#removeallsocketlisteners)
* [removeEventListener](logsub.md#removeeventlistener)
* [reset](logsub.md#reset)
* [resetHandlers](logsub.md#resethandlers)
* [send](logsub.md#send)
* [start](logsub.md#start)
* [subscribe](logsub.md#subscribe)
* [unsubscribe](logsub.md#unsubscribe)
* [validate](logsub.md#validate)

### Object literals

* [middlewares](logsub.md#middlewares)

## Constructors

###  constructor

\+ **new LogSub**(`options`: any, `messenger`: [Messenger](messenger.md), `shardID`: number): *[LogSub](logsub.md)*

*Overrides [SubscriptionMethod](subscriptionmethod.md).[constructor](subscriptionmethod.md#constructor)*

*Defined in [subscriptions/LogSub.ts:5](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/subscriptions/LogSub.ts#L5)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | any | - |
`messenger` | [Messenger](messenger.md) | - |
`shardID` | number | 0 |

**Returns:** *[LogSub](logsub.md)*

## Properties

###  connection

• **connection**: *W3CWebsocket | WebSocket*

*Inherited from [WSProvider](wsprovider.md).[connection](wsprovider.md#connection)*

*Defined in [providers/ws.ts:22](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/ws.ts#L22)*

___

###  emitter

• **emitter**: *Emitter*

*Inherited from [BaseSocket](basesocket.md).[emitter](basesocket.md#emitter)*

*Defined in [providers/baseSocket.ts:29](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/baseSocket.ts#L29)*

___

###  handlers

• **handlers**: *any*

*Inherited from [BaseSocket](basesocket.md).[handlers](basesocket.md#handlers)*

*Defined in [providers/baseSocket.ts:30](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/baseSocket.ts#L30)*

___

###  jsonRpc

• **jsonRpc**: *[JsonRpc](jsonrpc.md)*

*Inherited from [WSProvider](wsprovider.md).[jsonRpc](wsprovider.md#jsonrpc)*

*Defined in [providers/ws.ts:23](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/ws.ts#L23)*

___

###  messenger

• **messenger**: *[Messenger](messenger.md)*

*Inherited from [SubscriptionMethod](subscriptionmethod.md).[messenger](subscriptionmethod.md#messenger)*

*Defined in [subscriptions/Subscription.ts:10](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/subscriptions/Subscription.ts#L10)*

___

###  options

• **options**: *any*

*Inherited from [SubscriptionMethod](subscriptionmethod.md).[options](subscriptionmethod.md#options)*

*Overrides [WSProvider](wsprovider.md).[options](wsprovider.md#options)*

*Defined in [subscriptions/Subscription.ts:8](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/subscriptions/Subscription.ts#L8)*

___

###  param

• **param**: *any*

*Inherited from [SubscriptionMethod](subscriptionmethod.md).[param](subscriptionmethod.md#param)*

*Defined in [subscriptions/Subscription.ts:7](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/subscriptions/Subscription.ts#L7)*

___

### `Protected` reqMiddleware

• **reqMiddleware**: *[ReqMiddleware](../globals.md#reqmiddleware)* =  new Map().set('*', [])

*Inherited from [BaseProvider](baseprovider.md).[reqMiddleware](baseprovider.md#protected-reqmiddleware)*

*Defined in [providers/baseProvider.ts:18](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/baseProvider.ts#L18)*

___

### `Protected` resMiddleware

• **resMiddleware**: *[ResMiddleware](../globals.md#resmiddleware)* =  new Map().set('*', [])

*Inherited from [BaseProvider](baseprovider.md).[resMiddleware](baseprovider.md#protected-resmiddleware)*

*Defined in [providers/baseProvider.ts:19](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/baseProvider.ts#L19)*

___

###  shardID

• **shardID**: *number*

*Inherited from [SubscriptionMethod](subscriptionmethod.md).[shardID](subscriptionmethod.md#shardid)*

*Defined in [subscriptions/Subscription.ts:9](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/subscriptions/Subscription.ts#L9)*

___

###  subscriptionId

• **subscriptionId**: *any* =  null

*Inherited from [SubscriptionMethod](subscriptionmethod.md).[subscriptionId](subscriptionmethod.md#subscriptionid)*

*Defined in [subscriptions/Subscription.ts:12](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/subscriptions/Subscription.ts#L12)*

___

###  subscriptions

• **subscriptions**: *any*

*Inherited from [WSProvider](wsprovider.md).[subscriptions](wsprovider.md#subscriptions)*

*Defined in [providers/ws.ts:20](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/ws.ts#L20)*

___

###  url

• **url**: *string*

*Inherited from [WSProvider](wsprovider.md).[url](wsprovider.md#url)*

*Overrides [BaseSocket](basesocket.md).[url](basesocket.md#url)*

*Defined in [providers/ws.ts:19](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/ws.ts#L19)*

## Accessors

###  connected

• **get connected**(): *boolean*

*Inherited from [WSProvider](wsprovider.md).[connected](wsprovider.md#connected)*

*Defined in [providers/ws.ts:15](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/ws.ts#L15)*

**Returns:** *boolean*

## Methods

###  addEventListener

▸ **addEventListener**(`type`: string, `handler`: mitt.Handler): *void*

*Inherited from [BaseSocket](basesocket.md).[addEventListener](basesocket.md#addeventlistener)*

*Defined in [providers/baseSocket.ts:51](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/baseSocket.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`handler` | mitt.Handler |

**Returns:** *void*

___

###  clearSubscriptions

▸ **clearSubscriptions**(`unsubscribeMethod`: string): *Promise‹boolean›*

*Inherited from [WSProvider](wsprovider.md).[clearSubscriptions](wsprovider.md#clearsubscriptions)*

*Defined in [providers/ws.ts:165](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/ws.ts#L165)*

**Parameters:**

Name | Type |
------ | ------ |
`unsubscribeMethod` | string |

**Returns:** *Promise‹boolean›*

___

###  constructPayload

▸ **constructPayload**(`method`: string, `param`: any, `options?`: any): *[RPCRequestPayload](../interfaces/rpcrequestpayload.md)‹any›*

*Inherited from [SubscriptionMethod](subscriptionmethod.md).[constructPayload](subscriptionmethod.md#constructpayload)*

*Defined in [subscriptions/Subscription.ts:21](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/subscriptions/Subscription.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | string |
`param` | any |
`options?` | any |

**Returns:** *[RPCRequestPayload](../interfaces/rpcrequestpayload.md)‹any›*

___

###  createWebsocketProvider

▸ **createWebsocketProvider**(`url`: string, `options`: any): *w3cwebsocket | WebSocket*

*Inherited from [WSProvider](wsprovider.md).[createWebsocketProvider](wsprovider.md#createwebsocketprovider)*

*Defined in [providers/ws.ts:63](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/ws.ts#L63)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`url` | string | - |
`options` | any |  {} |

**Returns:** *w3cwebsocket | WebSocket*

___

### `Protected` getMiddleware

▸ **getMiddleware**(`method`: [RPCMethod](../enums/rpcmethod.md) | string): *[[ReqMiddleware](../globals.md#reqmiddleware)[], [ResMiddleware](../globals.md#resmiddleware)[]]*

*Inherited from [BaseProvider](baseprovider.md).[getMiddleware](baseprovider.md#protected-getmiddleware)*

*Defined in [providers/baseProvider.ts:47](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/baseProvider.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | [RPCMethod](../enums/rpcmethod.md) &#124; string |

**Returns:** *[[ReqMiddleware](../globals.md#reqmiddleware)[], [ResMiddleware](../globals.md#resmiddleware)[]]*

___

###  getSubscriptionEvent

▸ **getSubscriptionEvent**(`subscriptionId`: any): *any*

*Inherited from [WSProvider](wsprovider.md).[getSubscriptionEvent](wsprovider.md#getsubscriptionevent)*

*Defined in [providers/ws.ts:234](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/ws.ts#L234)*

**Parameters:**

Name | Type |
------ | ------ |
`subscriptionId` | any |

**Returns:** *any*

___

###  hasSubscription

▸ **hasSubscription**(`subscriptionId`: string): *boolean*

*Inherited from [WSProvider](wsprovider.md).[hasSubscription](wsprovider.md#hassubscription)*

*Defined in [providers/ws.ts:248](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/ws.ts#L248)*

**Parameters:**

Name | Type |
------ | ------ |
`subscriptionId` | string |

**Returns:** *boolean*

___

###  isConnecting

▸ **isConnecting**(): *boolean*

*Inherited from [WSProvider](wsprovider.md).[isConnecting](wsprovider.md#isconnecting)*

*Defined in [providers/ws.ts:97](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/ws.ts#L97)*

**Returns:** *boolean*

___

###  on

▸ **on**(`type`: string, `handler`: mitt.Handler): *this*

*Inherited from [WSProvider](wsprovider.md).[on](wsprovider.md#on)*

*Defined in [providers/ws.ts:40](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/ws.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`handler` | mitt.Handler |

**Returns:** *this*

___

###  onClose

▸ **onClose**(`closeEvent`: any): *void*

*Inherited from [WSProvider](wsprovider.md).[onClose](wsprovider.md#onclose)*

*Overrides [BaseSocket](basesocket.md).[onClose](basesocket.md#onclose)*

*Defined in [providers/ws.ts:55](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/ws.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`closeEvent` | any |

**Returns:** *void*

___

###  onConnect

▸ **onConnect**(): *Promise‹void›*

*Inherited from [WSProvider](wsprovider.md).[onConnect](wsprovider.md#onconnect)*

*Defined in [providers/ws.ts:217](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/ws.ts#L217)*

**Returns:** *Promise‹void›*

___

###  onData

▸ **onData**(`handler`: any): *this*

*Inherited from [WSProvider](wsprovider.md).[onData](wsprovider.md#ondata)*

*Defined in [providers/ws.ts:44](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/ws.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`handler` | any |

**Returns:** *this*

___

###  onError

▸ **onError**(`event`: any): *void*

*Inherited from [WSProvider](wsprovider.md).[onError](wsprovider.md#onerror)*

*Overrides [BaseSocket](basesocket.md).[onError](basesocket.md#onerror)*

*Defined in [providers/ws.ts:48](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/ws.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | any |

**Returns:** *void*

___

###  onMessage

▸ **onMessage**(`msg`: MessageEvent): *void*

*Inherited from [WSProvider](wsprovider.md).[onMessage](wsprovider.md#onmessage)*

*Defined in [providers/ws.ts:190](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/ws.ts#L190)*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | MessageEvent |

**Returns:** *void*

___

###  onNewSubscriptionItem

▸ **onNewSubscriptionItem**(`subscriptionItem`: any): *any*

*Overrides [SubscriptionMethod](subscriptionmethod.md).[onNewSubscriptionItem](subscriptionmethod.md#onnewsubscriptionitem)*

*Defined in [subscriptions/LogSub.ts:46](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/subscriptions/LogSub.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`subscriptionItem` | any |

**Returns:** *any*

___

###  onReady

▸ **onReady**(`event`: any): *void*

*Inherited from [BaseSocket](basesocket.md).[onReady](basesocket.md#onready)*

*Defined in [providers/baseSocket.ts:78](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/baseSocket.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | any |

**Returns:** *void*

___

###  once

▸ **once**(`type`: string, `handler`: mitt.Handler): *void*

*Inherited from [BaseSocket](basesocket.md).[once](basesocket.md#once)*

*Defined in [providers/baseSocket.ts:46](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/baseSocket.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`handler` | mitt.Handler |

**Returns:** *void*

___

### `Protected` pushMiddleware

▸ **pushMiddleware**(`fn`: any, `type`: [MiddlewareType](../enums/middlewaretype.md), `match`: string | [RPCMethod](../enums/rpcmethod.md) | RegExp): *void*

*Inherited from [BaseProvider](baseprovider.md).[pushMiddleware](baseprovider.md#protected-pushmiddleware)*

*Defined in [providers/baseProvider.ts:31](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/baseProvider.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | any |
`type` | [MiddlewareType](../enums/middlewaretype.md) |
`match` | string &#124; [RPCMethod](../enums/rpcmethod.md) &#124; RegExp |

**Returns:** *void*

___

###  reconnect

▸ **reconnect**(): *void*

*Inherited from [WSProvider](wsprovider.md).[reconnect](wsprovider.md#reconnect)*

*Defined in [providers/ws.ts:90](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/ws.ts#L90)*

**Returns:** *void*

___

###  registerEventListeners

▸ **registerEventListeners**(): *void*

*Inherited from [WSProvider](wsprovider.md).[registerEventListeners](wsprovider.md#registereventlisteners)*

*Defined in [providers/ws.ts:182](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/ws.ts#L182)*

**Returns:** *void*

___

###  removeAllSocketListeners

▸ **removeAllSocketListeners**(): *void*

*Inherited from [BaseSocket](basesocket.md).[removeAllSocketListeners](basesocket.md#removeallsocketlisteners)*

*Defined in [providers/baseSocket.ts:70](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/baseSocket.ts#L70)*

**Returns:** *void*

___

###  removeEventListener

▸ **removeEventListener**(`type?`: undefined | string, `handler?`: mitt.Handler): *void*

*Inherited from [BaseSocket](basesocket.md).[removeEventListener](basesocket.md#removeeventlistener)*

*Defined in [providers/baseSocket.ts:55](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/baseSocket.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`type?` | undefined &#124; string |
`handler?` | mitt.Handler |

**Returns:** *void*

___

###  reset

▸ **reset**(): *void*

*Inherited from [BaseSocket](basesocket.md).[reset](basesocket.md#reset)*

*Defined in [providers/baseSocket.ts:66](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/baseSocket.ts#L66)*

**Returns:** *void*

___

###  resetHandlers

▸ **resetHandlers**(): *void*

*Inherited from [BaseSocket](basesocket.md).[resetHandlers](basesocket.md#resethandlers)*

*Defined in [providers/baseSocket.ts:39](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/baseSocket.ts#L39)*

**Returns:** *void*

___

###  send

▸ **send**(`payload`: [RPCRequestPayload](../interfaces/rpcrequestpayload.md)‹object›): *Promise‹any›*

*Inherited from [WSProvider](wsprovider.md).[send](wsprovider.md#send)*

*Defined in [providers/ws.ts:101](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/ws.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [RPCRequestPayload](../interfaces/rpcrequestpayload.md)‹object› |

**Returns:** *Promise‹any›*

___

###  start

▸ **start**(): *Promise‹this›*

*Inherited from [SubscriptionMethod](subscriptionmethod.md).[start](subscriptionmethod.md#start)*

*Defined in [subscriptions/Subscription.ts:32](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/subscriptions/Subscription.ts#L32)*

**Returns:** *Promise‹this›*

___

###  subscribe

▸ **subscribe**(): *Promise‹this›*

*Overrides [WSProvider](wsprovider.md).[subscribe](wsprovider.md#subscribe)*

*Defined in [subscriptions/LogSub.ts:11](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/subscriptions/LogSub.ts#L11)*

**Returns:** *Promise‹this›*

___

###  unsubscribe

▸ **unsubscribe**(): *Promise‹any›*

*Inherited from [SubscriptionMethod](subscriptionmethod.md).[unsubscribe](subscriptionmethod.md#unsubscribe)*

*Overrides [WSProvider](wsprovider.md).[unsubscribe](wsprovider.md#unsubscribe)*

*Defined in [subscriptions/Subscription.ts:53](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/subscriptions/Subscription.ts#L53)*

**Returns:** *Promise‹any›*

___

###  validate

▸ **validate**(`response`: any, `payload?`: any): *true | Error*

*Inherited from [WSProvider](wsprovider.md).[validate](wsprovider.md#validate)*

*Defined in [providers/ws.ts:251](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/ws.ts#L251)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | any |
`payload?` | any |

**Returns:** *true | Error*

## Object literals

###  middlewares

### ▪ **middlewares**: *object*

*Inherited from [BaseProvider](baseprovider.md).[middlewares](baseprovider.md#middlewares)*

*Defined in [providers/baseProvider.ts:5](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/baseProvider.ts#L5)*

▪ **request**: *object*

*Defined in [providers/baseProvider.ts:6](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/baseProvider.ts#L6)*

* **use**(`fn`: [ReqMiddleware](../globals.md#reqmiddleware), `match`: string | [RPCMethod](../enums/rpcmethod.md) | RegExp): *void*

▪ **response**: *object*

*Defined in [providers/baseProvider.ts:11](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-network/src/providers/baseProvider.ts#L11)*

* **use**(`fn`: [ResMiddleware](../globals.md#resmiddleware), `match`: string | [RPCMethod](../enums/rpcmethod.md) | RegExp): *void*
