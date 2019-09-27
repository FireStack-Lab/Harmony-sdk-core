[@harmony-js/network](../globals.md) › [BaseProvider](baseprovider.md)

# Class: BaseProvider

## Hierarchy

* **BaseProvider**

  ↳ [BaseSocket](basesocket.md)

  ↳ [HttpProvider](httpprovider.md)

## Index

### Constructors

* [constructor](baseprovider.md#constructor)

### Properties

* [reqMiddleware](baseprovider.md#protected-reqmiddleware)
* [resMiddleware](baseprovider.md#protected-resmiddleware)
* [url](baseprovider.md#protected-url)

### Methods

* [getMiddleware](baseprovider.md#protected-getmiddleware)
* [pushMiddleware](baseprovider.md#protected-pushmiddleware)

### Object literals

* [middlewares](baseprovider.md#middlewares)

## Constructors

###  constructor

\+ **new BaseProvider**(`url`: string, `reqMiddleware`: [ReqMiddleware](../globals.md#reqmiddleware), `resMiddleware`: [ResMiddleware](../globals.md#resmiddleware)): *[BaseProvider](baseprovider.md)*

*Defined in [providers/baseProvider.ts:19](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/providers/baseProvider.ts#L19)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`url` | string | - |
`reqMiddleware` | [ReqMiddleware](../globals.md#reqmiddleware) |  new Map() |
`resMiddleware` | [ResMiddleware](../globals.md#resmiddleware) |  new Map() |

**Returns:** *[BaseProvider](baseprovider.md)*

## Properties

### `Protected` reqMiddleware

• **reqMiddleware**: *[ReqMiddleware](../globals.md#reqmiddleware)* =  new Map().set('*', [])

*Defined in [providers/baseProvider.ts:18](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/providers/baseProvider.ts#L18)*

___

### `Protected` resMiddleware

• **resMiddleware**: *[ResMiddleware](../globals.md#resmiddleware)* =  new Map().set('*', [])

*Defined in [providers/baseProvider.ts:19](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/providers/baseProvider.ts#L19)*

___

### `Protected` url

• **url**: *string*

*Defined in [providers/baseProvider.ts:17](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/providers/baseProvider.ts#L17)*

## Methods

### `Protected` getMiddleware

▸ **getMiddleware**(`method`: [RPCMethod](../enums/rpcmethod.md) | string): *[[ReqMiddleware](../globals.md#reqmiddleware)[], [ResMiddleware](../globals.md#resmiddleware)[]]*

*Defined in [providers/baseProvider.ts:47](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/providers/baseProvider.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | [RPCMethod](../enums/rpcmethod.md) &#124; string |

**Returns:** *[[ReqMiddleware](../globals.md#reqmiddleware)[], [ResMiddleware](../globals.md#resmiddleware)[]]*

___

### `Protected` pushMiddleware

▸ **pushMiddleware**(`fn`: any, `type`: [MiddlewareType](../enums/middlewaretype.md), `match`: string | [RPCMethod](../enums/rpcmethod.md) | RegExp): *void*

*Defined in [providers/baseProvider.ts:31](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/providers/baseProvider.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | any |
`type` | [MiddlewareType](../enums/middlewaretype.md) |
`match` | string &#124; [RPCMethod](../enums/rpcmethod.md) &#124; RegExp |

**Returns:** *void*

## Object literals

###  middlewares

### ▪ **middlewares**: *object*

*Defined in [providers/baseProvider.ts:5](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/providers/baseProvider.ts#L5)*

▪ **request**: *object*

*Defined in [providers/baseProvider.ts:6](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/providers/baseProvider.ts#L6)*

* **use**(`fn`: [ReqMiddleware](../globals.md#reqmiddleware), `match`: string | [RPCMethod](../enums/rpcmethod.md) | RegExp): *void*

▪ **response**: *object*

*Defined in [providers/baseProvider.ts:11](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-network/src/providers/baseProvider.ts#L11)*

* **use**(`fn`: [ResMiddleware](../globals.md#resmiddleware), `match`: string | [RPCMethod](../enums/rpcmethod.md) | RegExp): *void*
