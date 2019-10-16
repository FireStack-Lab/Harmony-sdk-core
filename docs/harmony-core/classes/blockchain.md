[@harmony-js/core](../globals.md) › [Blockchain](blockchain.md)

# Class: Blockchain

## Hierarchy

* **Blockchain**

## Index

### Constructors

* [constructor](blockchain.md#constructor)

### Properties

* [messenger](blockchain.md#messenger)

### Methods

* [call](blockchain.md#call)
* [createObservedTransaction](blockchain.md#createobservedtransaction)
* [estimateGas](blockchain.md#estimategas)
* [gasPrice](blockchain.md#gasprice)
* [getBalance](blockchain.md#getbalance)
* [getBlockByHash](blockchain.md#getblockbyhash)
* [getBlockByNumber](blockchain.md#getblockbynumber)
* [getBlockNumber](blockchain.md#getblocknumber)
* [getBlockTransactionCountByHash](blockchain.md#getblocktransactioncountbyhash)
* [getBlockTransactionCountByNumber](blockchain.md#getblocktransactioncountbynumber)
* [getCode](blockchain.md#getcode)
* [getCxReceiptByHash](blockchain.md#getcxreceiptbyhash)
* [getProtocolVersion](blockchain.md#getprotocolversion)
* [getRpcResult](blockchain.md#getrpcresult)
* [getShardingStructure](blockchain.md#getshardingstructure)
* [getStorageAt](blockchain.md#getstorageat)
* [getTransactionByBlockHashAndIndex](blockchain.md#gettransactionbyblockhashandindex)
* [getTransactionByBlockNumberAndIndex](blockchain.md#gettransactionbyblocknumberandindex)
* [getTransactionByHash](blockchain.md#gettransactionbyhash)
* [getTransactionCount](blockchain.md#gettransactioncount)
* [getTransactionReceipt](blockchain.md#gettransactionreceipt)
* [logs](blockchain.md#logs)
* [net_peerCount](blockchain.md#net_peercount)
* [net_version](blockchain.md#net_version)
* [newBlockHeaders](blockchain.md#newblockheaders)
* [newPendingTransactions](blockchain.md#newpendingtransactions)
* [sendRawTransaction](blockchain.md#sendrawtransaction)
* [sendTransaction](blockchain.md#sendtransaction)
* [setMessenger](blockchain.md#setmessenger)
* [syncing](blockchain.md#syncing)

## Constructors

###  constructor

\+ **new Blockchain**(`messenger`: Messenger): *[Blockchain](blockchain.md)*

*Defined in [blockchain.ts:24](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`messenger` | Messenger |

**Returns:** *[Blockchain](blockchain.md)*

## Properties

###  messenger

• **messenger**: *Messenger*

*Defined in [blockchain.ts:24](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L24)*

## Methods

###  call

▸ **call**(`__namedParameters`: object): *Promise‹any›*

*Defined in [blockchain.ts:450](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L450)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`blockNumber` | string |  DefaultBlockParams.latest |
`payload` | any | - |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *Promise‹any›*

___

###  createObservedTransaction

▸ **createObservedTransaction**(`transaction`: Transaction): *Emitter*

*Defined in [blockchain.ts:402](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L402)*

**Parameters:**

Name | Type |
------ | ------ |
`transaction` | Transaction |

**Returns:** *Emitter*

___

###  estimateGas

▸ **estimateGas**(`__namedParameters`: object): *Promise‹any›*

*Defined in [blockchain.ts:422](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L422)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`data` | string | - |
`shardID` | number |  this.messenger.currentShard |
`to` | string | - |

**Returns:** *Promise‹any›*

___

###  gasPrice

▸ **gasPrice**(`shardID`: number): *Promise‹any›*

*Defined in [blockchain.ts:440](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L440)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *Promise‹any›*

___

###  getBalance

▸ **getBalance**(`__namedParameters`: object): *Promise‹any›*

*Defined in [blockchain.ts:48](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L48)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`address` | string | - |
`blockNumber` | string |  DefaultBlockParams.latest |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *Promise‹any›*

___

###  getBlockByHash

▸ **getBlockByHash**(`__namedParameters`: object): *Promise‹any›*

*Defined in [blockchain.ts:83](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L83)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`blockHash` | string | - |
`returnObject` | boolean | true |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *Promise‹any›*

___

###  getBlockByNumber

▸ **getBlockByNumber**(`__namedParameters`: object): *Promise‹any›*

*Defined in [blockchain.ts:109](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L109)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`blockNumber` | string |  DefaultBlockParams.latest |
`returnObject` | boolean | true |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *Promise‹any›*

___

###  getBlockNumber

▸ **getBlockNumber**(`shardID`: number): *Promise‹any›*

*Defined in [blockchain.ts:66](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L66)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *Promise‹any›*

___

###  getBlockTransactionCountByHash

▸ **getBlockTransactionCountByHash**(`__namedParameters`: object): *Promise‹any›*

*Defined in [blockchain.ts:131](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L131)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`blockHash` | string | - |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *Promise‹any›*

___

###  getBlockTransactionCountByNumber

▸ **getBlockTransactionCountByNumber**(`__namedParameters`: object): *Promise‹any›*

*Defined in [blockchain.ts:151](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L151)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`blockNumber` | string | - |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *Promise‹any›*

___

###  getCode

▸ **getCode**(`__namedParameters`: object): *Promise‹any›*

*Defined in [blockchain.ts:280](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L280)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`address` | string | - |
`blockNumber` | string |  DefaultBlockParams.latest |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *Promise‹any›*

___

###  getCxReceiptByHash

▸ **getCxReceiptByHash**(`__namedParameters`: object): *Promise‹any›*

*Defined in [blockchain.ts:263](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L263)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`shardID` | number |
`txnHash` | string |

**Returns:** *Promise‹any›*

___

###  getProtocolVersion

▸ **getProtocolVersion**(`shardID`: number): *Promise‹any›*

*Defined in [blockchain.ts:309](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L309)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *Promise‹any›*

___

###  getRpcResult

▸ **getRpcResult**(`result`: any): *any*

*Defined in [blockchain.ts:32](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`result` | any |

**Returns:** *any*

___

###  getShardingStructure

▸ **getShardingStructure**(): *Promise‹any›*

*Defined in [blockchain.ts:368](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L368)*

**Returns:** *Promise‹any›*

___

###  getStorageAt

▸ **getStorageAt**(`__namedParameters`: object): *Promise‹any›*

*Defined in [blockchain.ts:325](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L325)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`address` | string | - |
`blockNumber` | string |  DefaultBlockParams.latest |
`position` | string | - |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *Promise‹any›*

___

###  getTransactionByBlockHashAndIndex

▸ **getTransactionByBlockHashAndIndex**(`__namedParameters`: object): *Promise‹any›*

*Defined in [blockchain.ts:175](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L175)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`blockHash` | string | - |
`index` | string | - |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *Promise‹any›*

___

###  getTransactionByBlockNumberAndIndex

▸ **getTransactionByBlockNumberAndIndex**(`__namedParameters`: object): *Promise‹any›*

*Defined in [blockchain.ts:198](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L198)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`blockNumber` | string |  DefaultBlockParams.latest |
`index` | string | - |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *Promise‹any›*

___

###  getTransactionByHash

▸ **getTransactionByHash**(`__namedParameters`: object): *Promise‹any›*

*Defined in [blockchain.ts:220](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L220)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`shardID` | number |  this.messenger.currentShard |
`txnHash` | string | - |

**Returns:** *Promise‹any›*

___

###  getTransactionCount

▸ **getTransactionCount**(`__namedParameters`: object): *Promise‹any›*

*Defined in [blockchain.ts:350](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L350)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`address` | string | - |
`blockNumber` | string |  DefaultBlockParams.latest |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *Promise‹any›*

___

###  getTransactionReceipt

▸ **getTransactionReceipt**(`__namedParameters`: object): *Promise‹any›*

*Defined in [blockchain.ts:243](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L243)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`shardID` | number |  this.messenger.currentShard |
`txnHash` | string | - |

**Returns:** *Promise‹any›*

___

###  logs

▸ **logs**(`options`: any, `shardID`: number): *LogSub*

*Defined in [blockchain.ts:492](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L492)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | any | - |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *LogSub*

___

###  net_peerCount

▸ **net_peerCount**(`shardID`: number): *Promise‹any›*

*Defined in [blockchain.ts:298](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L298)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *Promise‹any›*

___

###  net_version

▸ **net_version**(`shardID`: number): *Promise‹any›*

*Defined in [blockchain.ts:303](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L303)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *Promise‹any›*

___

###  newBlockHeaders

▸ **newBlockHeaders**(`shardID`: number): *NewHeaders*

*Defined in [blockchain.ts:476](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L476)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *NewHeaders*

___

###  newPendingTransactions

▸ **newPendingTransactions**(`shardID`: number): *NewPendingTransactions*

*Defined in [blockchain.ts:468](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L468)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *NewPendingTransactions*

___

###  sendRawTransaction

▸ **sendRawTransaction**(`transaction`: Transaction): *Promise‹undefined | string›*

*Defined in [blockchain.ts:392](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L392)*

**Parameters:**

Name | Type |
------ | ------ |
`transaction` | Transaction |

**Returns:** *Promise‹undefined | string›*

___

###  sendTransaction

▸ **sendTransaction**(`transaction`: Transaction): *Promise‹any›*

*Defined in [blockchain.ts:377](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L377)*

**Parameters:**

Name | Type |
------ | ------ |
`transaction` | Transaction |

**Returns:** *Promise‹any›*

___

###  setMessenger

▸ **setMessenger**(`messenger`: Messenger): *void*

*Defined in [blockchain.ts:29](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`messenger` | Messenger |

**Returns:** *void*

___

###  syncing

▸ **syncing**(`shardID`: number): *Syncing*

*Defined in [blockchain.ts:484](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-core/src/blockchain.ts#L484)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *Syncing*
