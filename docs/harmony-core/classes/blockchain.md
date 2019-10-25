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
* [createObservedStakingTransaction](blockchain.md#createobservedstakingtransaction)
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
* [sendRawStakingTransaction](blockchain.md#sendrawstakingtransaction)
* [sendRawTransaction](blockchain.md#sendrawtransaction)
* [sendTransaction](blockchain.md#sendtransaction)
* [setMessenger](blockchain.md#setmessenger)
* [syncing](blockchain.md#syncing)

## Constructors

###  constructor

\+ **new Blockchain**(`messenger`: Messenger): *[Blockchain](blockchain.md)*

*Defined in [blockchain.ts:25](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`messenger` | Messenger |

**Returns:** *[Blockchain](blockchain.md)*

## Properties

###  messenger

• **messenger**: *Messenger*

*Defined in [blockchain.ts:25](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L25)*

## Methods

###  call

▸ **call**(`__namedParameters`: object): *Promise‹any›*

*Defined in [blockchain.ts:475](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L475)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`blockNumber` | string |  DefaultBlockParams.latest |
`payload` | any | - |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *Promise‹any›*

___

###  createObservedStakingTransaction

▸ **createObservedStakingTransaction**(`staking`: StakingTransaction): *Emitter*

*Defined in [blockchain.ts:427](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L427)*

**Parameters:**

Name | Type |
------ | ------ |
`staking` | StakingTransaction |

**Returns:** *Emitter*

___

###  createObservedTransaction

▸ **createObservedTransaction**(`transaction`: Transaction): *Emitter*

*Defined in [blockchain.ts:403](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L403)*

**Parameters:**

Name | Type |
------ | ------ |
`transaction` | Transaction |

**Returns:** *Emitter*

___

###  estimateGas

▸ **estimateGas**(`__namedParameters`: object): *Promise‹any›*

*Defined in [blockchain.ts:447](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L447)*

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

*Defined in [blockchain.ts:465](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L465)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *Promise‹any›*

___

###  getBalance

▸ **getBalance**(`__namedParameters`: object): *Promise‹any›*

*Defined in [blockchain.ts:49](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L49)*

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

*Defined in [blockchain.ts:84](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L84)*

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

*Defined in [blockchain.ts:110](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L110)*

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

*Defined in [blockchain.ts:67](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L67)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *Promise‹any›*

___

###  getBlockTransactionCountByHash

▸ **getBlockTransactionCountByHash**(`__namedParameters`: object): *Promise‹any›*

*Defined in [blockchain.ts:132](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L132)*

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

*Defined in [blockchain.ts:152](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L152)*

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

*Defined in [blockchain.ts:281](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L281)*

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

*Defined in [blockchain.ts:264](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L264)*

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

*Defined in [blockchain.ts:310](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L310)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *Promise‹any›*

___

###  getRpcResult

▸ **getRpcResult**(`result`: any): *any*

*Defined in [blockchain.ts:33](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`result` | any |

**Returns:** *any*

___

###  getShardingStructure

▸ **getShardingStructure**(): *Promise‹any›*

*Defined in [blockchain.ts:369](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L369)*

**Returns:** *Promise‹any›*

___

###  getStorageAt

▸ **getStorageAt**(`__namedParameters`: object): *Promise‹any›*

*Defined in [blockchain.ts:326](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L326)*

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

*Defined in [blockchain.ts:176](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L176)*

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

*Defined in [blockchain.ts:199](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L199)*

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

*Defined in [blockchain.ts:221](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L221)*

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

*Defined in [blockchain.ts:351](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L351)*

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

*Defined in [blockchain.ts:244](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L244)*

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

*Defined in [blockchain.ts:517](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L517)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | any | - |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *LogSub*

___

###  net_peerCount

▸ **net_peerCount**(`shardID`: number): *Promise‹any›*

*Defined in [blockchain.ts:299](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L299)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *Promise‹any›*

___

###  net_version

▸ **net_version**(`shardID`: number): *Promise‹any›*

*Defined in [blockchain.ts:304](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L304)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *Promise‹any›*

___

###  newBlockHeaders

▸ **newBlockHeaders**(`shardID`: number): *NewHeaders*

*Defined in [blockchain.ts:501](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L501)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *NewHeaders*

___

###  newPendingTransactions

▸ **newPendingTransactions**(`shardID`: number): *NewPendingTransactions*

*Defined in [blockchain.ts:493](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L493)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *NewPendingTransactions*

___

###  sendRawStakingTransaction

▸ **sendRawStakingTransaction**(`staking`: StakingTransaction): *Promise‹undefined | string›*

*Defined in [blockchain.ts:418](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L418)*

**Parameters:**

Name | Type |
------ | ------ |
`staking` | StakingTransaction |

**Returns:** *Promise‹undefined | string›*

___

###  sendRawTransaction

▸ **sendRawTransaction**(`transaction`: Transaction): *Promise‹undefined | string›*

*Defined in [blockchain.ts:393](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L393)*

**Parameters:**

Name | Type |
------ | ------ |
`transaction` | Transaction |

**Returns:** *Promise‹undefined | string›*

___

###  sendTransaction

▸ **sendTransaction**(`transaction`: Transaction): *Promise‹any›*

*Defined in [blockchain.ts:378](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L378)*

**Parameters:**

Name | Type |
------ | ------ |
`transaction` | Transaction |

**Returns:** *Promise‹any›*

___

###  setMessenger

▸ **setMessenger**(`messenger`: Messenger): *void*

*Defined in [blockchain.ts:30](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`messenger` | Messenger |

**Returns:** *void*

___

###  syncing

▸ **syncing**(`shardID`: number): *Syncing*

*Defined in [blockchain.ts:509](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-core/src/blockchain.ts#L509)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *Syncing*
