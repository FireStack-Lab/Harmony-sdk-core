[@harmony-js/network](../globals.md) › [Messenger](messenger.md)

# Class: Messenger

**`class`** Messenger

**`description`** Messenger instance

**`param`** HttpProvider

**`param`** config object

**`returns`** Messenger instance

## Hierarchy

* HarmonyCore

  ↳ **Messenger**

## Index

### Constructors

* [constructor](messenger.md#constructor)

### Properties

* [JsonRpc](messenger.md#jsonrpc)
* [Network_ID](messenger.md#network_id)
* [chainId](messenger.md#chainid)
* [chainPrefix](messenger.md#chainprefix)
* [chainType](messenger.md#chaintype)
* [config](messenger.md#optional-config)
* [defaultShardID](messenger.md#optional-defaultshardid)
* [getChainId](messenger.md#getchainid)
* [provider](messenger.md#provider)
* [shardProviders](messenger.md#shardproviders)

### Accessors

* [currentShard](messenger.md#currentshard)
* [shardCount](messenger.md#shardcount)

### Methods

* [getCurrentShardID](messenger.md#getcurrentshardid)
* [getShardProvider](messenger.md#getshardprovider)
* [providerCheck](messenger.md#providercheck)
* [send](messenger.md#send)
* [setChainId](messenger.md#setchainid)
* [setChainType](messenger.md#setchaintype)
* [setDefaultShardID](messenger.md#setdefaultshardid)
* [setNetworkID](messenger.md#setnetworkid)
* [setProvider](messenger.md#setprovider)
* [setRPCPrefix](messenger.md#setrpcprefix)
* [setReqMiddleware](messenger.md#setreqmiddleware)
* [setResMiddleware](messenger.md#setresmiddleware)
* [setShardingProviders](messenger.md#setshardingproviders)
* [subscribe](messenger.md#subscribe)
* [unsubscribe](messenger.md#unsubscribe)

## Constructors

###  constructor

\+ **new Messenger**(`provider`: [HttpProvider](httpprovider.md) | [WSProvider](wsprovider.md), `chainType`: ChainType, `chainId`: ChainID, `config`: object): *[Messenger](messenger.md)*

*Overrides void*

*Defined in [messenger/messenger.ts:32](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/messenger/messenger.ts#L32)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`provider` | [HttpProvider](httpprovider.md) &#124; [WSProvider](wsprovider.md) | - |
`chainType` | ChainType |  defaultConfig.Default.Chain_Type |
`chainId` | ChainID |  defaultConfig.Default.Chain_ID |
`config` | object |  defaultConfig |

**Returns:** *[Messenger](messenger.md)*

## Properties

###  JsonRpc

• **JsonRpc**: *[JsonRpc](jsonrpc.md)*

*Defined in [messenger/messenger.ts:31](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/messenger/messenger.ts#L31)*

___

###  Network_ID

• **Network_ID**: *string* = "Default"

*Defined in [messenger/messenger.ts:28](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/messenger/messenger.ts#L28)*

___

###  chainId

• **chainId**: *ChainID*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-utils/dist/chain.d.ts:39

___

###  chainPrefix

• **chainPrefix**: *string*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-utils/dist/chain.d.ts:41

___

###  chainType

• **chainType**: *ChainType*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-utils/dist/chain.d.ts:38

___

### `Optional` config

• **config**? : *undefined | object*

*Defined in [messenger/messenger.ts:26](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/messenger/messenger.ts#L26)*

___

### `Optional` defaultShardID

• **defaultShardID**? : *undefined | number*

*Defined in [messenger/messenger.ts:32](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/messenger/messenger.ts#L32)*

___

###  getChainId

• **getChainId**: *ChainID*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-utils/dist/chain.d.ts:42

___

###  provider

• **provider**: *[HttpProvider](httpprovider.md) | [WSProvider](wsprovider.md)*

*Defined in [messenger/messenger.ts:25](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/messenger/messenger.ts#L25)*

___

###  shardProviders

• **shardProviders**: *Map‹number, [ShardingProvider](../interfaces/shardingprovider.md)›*

*Defined in [messenger/messenger.ts:29](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/messenger/messenger.ts#L29)*

## Accessors

###  currentShard

• **get currentShard**(): *number*

*Defined in [messenger/messenger.ts:76](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/messenger/messenger.ts#L76)*

**Returns:** *number*

___

###  shardCount

• **get shardCount**(): *number*

*Defined in [messenger/messenger.ts:80](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/messenger/messenger.ts#L80)*

**Returns:** *number*

## Methods

###  getCurrentShardID

▸ **getCurrentShardID**(): *undefined | number*

*Defined in [messenger/messenger.ts:296](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/messenger/messenger.ts#L296)*

**Returns:** *undefined | number*

___

###  getShardProvider

▸ **getShardProvider**(`shardID`: number): *[HttpProvider](httpprovider.md) | [WSProvider](wsprovider.md)*

*Defined in [messenger/messenger.ts:287](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/messenger/messenger.ts#L287)*

**Parameters:**

Name | Type |
------ | ------ |
`shardID` | number |

**Returns:** *[HttpProvider](httpprovider.md) | [WSProvider](wsprovider.md)*

___

###  providerCheck

▸ **providerCheck**(): *void*

*Defined in [messenger/messenger.ts:142](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/messenger/messenger.ts#L142)*

**`function`** providerCheck

**`memberof`** Messenger

**`description`** provider checker

**Returns:** *void*

provider validator

___

###  send

▸ **send**(`method`: [RPCMethod](../enums/rpcmethod.md) | string, `params?`: string | any[] | undefined, `rpcPrefix?`: undefined | string, `shardID`: number): *Promise‹any›*

*Defined in [messenger/messenger.ts:90](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/messenger/messenger.ts#L90)*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`method` | [RPCMethod](../enums/rpcmethod.md) &#124; string | - | RPC method |
`params?` | string &#124; any[] &#124; undefined | - | RPC method params |
`rpcPrefix?` | undefined &#124; string | - | - |
`shardID` | number |  this.currentShard | - |

**Returns:** *Promise‹any›*

RPC result

___

###  setChainId

▸ **setChainId**(`chainId`: ChainID): *void*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-utils/dist/chain.d.ts:43

**Parameters:**

Name | Type |
------ | ------ |
`chainId` | ChainID |

**Returns:** *void*

___

###  setChainType

▸ **setChainType**(`chainType`: ChainType): *void*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-utils/dist/chain.d.ts:44

**Parameters:**

Name | Type |
------ | ------ |
`chainType` | ChainType |

**Returns:** *void*

___

###  setDefaultShardID

▸ **setDefaultShardID**(`shardID`: number): *void*

*Defined in [messenger/messenger.ts:307](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/messenger/messenger.ts#L307)*

**Parameters:**

Name | Type |
------ | ------ |
`shardID` | number |

**Returns:** *void*

___

###  setNetworkID

▸ **setNetworkID**(`id`: string): *void*

*Defined in [messenger/messenger.ts:176](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/messenger/messenger.ts#L176)*

**`function`** setNetworkID

**`description`** set network id

**`memberof`** Messenger

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | network id string  |

**Returns:** *void*

___

###  setProvider

▸ **setProvider**(`provider`: [HttpProvider](httpprovider.md) | [WSProvider](wsprovider.md)): *void*

*Defined in [messenger/messenger.ts:132](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/messenger/messenger.ts#L132)*

**`function`** setProvider

**`memberof`** Messenger

**`description`** provider setter

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`provider` | [HttpProvider](httpprovider.md) &#124; [WSProvider](wsprovider.md) | provider instance  |

**Returns:** *void*

___

###  setRPCPrefix

▸ **setRPCPrefix**(`method`: [RPCMethod](../enums/rpcmethod.md) | string, `prefix`: string): *string*

*Defined in [messenger/messenger.ts:180](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/messenger/messenger.ts#L180)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | [RPCMethod](../enums/rpcmethod.md) &#124; string |
`prefix` | string |

**Returns:** *string*

___

###  setReqMiddleware

▸ **setReqMiddleware**(`middleware`: any, `method`: string, `provider`: [HttpProvider](httpprovider.md) | [WSProvider](wsprovider.md)): *void*

*Defined in [messenger/messenger.ts:155](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/messenger/messenger.ts#L155)*

**`function`** setReqMiddleware

**`description`** set request middleware

**`memberof`** Messenger

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`middleware` | any | - | middle ware for req |
`method` | string | "*" | method name  |
`provider` | [HttpProvider](httpprovider.md) &#124; [WSProvider](wsprovider.md) | - | - |

**Returns:** *void*

___

###  setResMiddleware

▸ **setResMiddleware**(`middleware`: any, `method`: string, `provider`: [HttpProvider](httpprovider.md) | [WSProvider](wsprovider.md)): *void*

*Defined in [messenger/messenger.ts:166](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/messenger/messenger.ts#L166)*

**`function`** setResMiddleware

**`description`** set response middleware

**`memberof`** Messenger

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`middleware` | any | - | middle ware for req |
`method` | string | "*" | method name  |
`provider` | [HttpProvider](httpprovider.md) &#124; [WSProvider](wsprovider.md) | - | - |

**Returns:** *void*

___

###  setShardingProviders

▸ **setShardingProviders**(): *Promise‹void›*

*Defined in [messenger/messenger.ts:263](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/messenger/messenger.ts#L263)*

**Returns:** *Promise‹void›*

___

###  subscribe

▸ **subscribe**(`method`: [RPCMethod](../enums/rpcmethod.md) | string, `params?`: string | any[] | undefined, `returnType`: [SubscribeReturns](../enums/subscribereturns.md), `rpcPrefix`: string, `shardID`: number): *Promise‹any›*

*Defined in [messenger/messenger.ts:189](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/messenger/messenger.ts#L189)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`method` | [RPCMethod](../enums/rpcmethod.md) &#124; string | - |
`params?` | string &#124; any[] &#124; undefined | - |
`returnType` | [SubscribeReturns](../enums/subscribereturns.md) |  SubscribeReturns.all |
`rpcPrefix` | string |  this.chainPrefix |
`shardID` | number |  this.currentShard |

**Returns:** *Promise‹any›*

___

###  unsubscribe

▸ **unsubscribe**(`method`: [RPCMethod](../enums/rpcmethod.md) | string, `params?`: string | any[] | undefined, `rpcPrefix?`: undefined | string, `shardID`: number): *Promise‹any›*

*Defined in [messenger/messenger.ts:236](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/messenger/messenger.ts#L236)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`method` | [RPCMethod](../enums/rpcmethod.md) &#124; string | - |
`params?` | string &#124; any[] &#124; undefined | - |
`rpcPrefix?` | undefined &#124; string | - |
`shardID` | number |  this.currentShard |

**Returns:** *Promise‹any›*
