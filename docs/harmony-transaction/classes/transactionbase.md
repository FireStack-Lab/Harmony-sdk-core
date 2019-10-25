[@harmony-js/transaction](../globals.md) › [TransactionBase](transactionbase.md)

# Class: TransactionBase

## Hierarchy

* **TransactionBase**

  ↳ [Transaction](transaction.md)

## Implements

* [AbstractTransaction](abstracttransaction.md)

## Index

### Constructors

* [constructor](transactionbase.md#constructor)

### Properties

* [blockNumbers](transactionbase.md#blocknumbers)
* [confirmationCheck](transactionbase.md#confirmationcheck)
* [confirmations](transactionbase.md#confirmations)
* [cxBlockNumbers](transactionbase.md#cxblocknumbers)
* [cxConfirmationCheck](transactionbase.md#cxconfirmationcheck)
* [cxConfirmations](transactionbase.md#cxconfirmations)
* [cxStatus](transactionbase.md#cxstatus)
* [emitter](transactionbase.md#emitter)
* [id](transactionbase.md#id)
* [messenger](transactionbase.md#messenger)
* [receipt](transactionbase.md#optional-receipt)
* [shardID](transactionbase.md#shardid)
* [txStatus](transactionbase.md#txstatus)

### Methods

* [cxConfirm](transactionbase.md#cxconfirm)
* [emitConfirm](transactionbase.md#emitconfirm)
* [emitCxConfirm](transactionbase.md#emitcxconfirm)
* [emitCxReceipt](transactionbase.md#emitcxreceipt)
* [emitCxTrack](transactionbase.md#emitcxtrack)
* [emitError](transactionbase.md#emiterror)
* [emitReceipt](transactionbase.md#emitreceipt)
* [emitTrack](transactionbase.md#emittrack)
* [emitTransactionHash](transactionbase.md#emittransactionhash)
* [getBlockByNumber](transactionbase.md#getblockbynumber)
* [getBlockNumber](transactionbase.md#getblocknumber)
* [getCxStatus](transactionbase.md#getcxstatus)
* [getTxStatus](transactionbase.md#gettxstatus)
* [isConfirmed](transactionbase.md#isconfirmed)
* [isCxConfirmed](transactionbase.md#iscxconfirmed)
* [isCxPending](transactionbase.md#iscxpending)
* [isCxRejected](transactionbase.md#iscxrejected)
* [isInitialized](transactionbase.md#isinitialized)
* [isPending](transactionbase.md#ispending)
* [isRejected](transactionbase.md#isrejected)
* [isSigned](transactionbase.md#issigned)
* [observed](transactionbase.md#observed)
* [setCxStatus](transactionbase.md#setcxstatus)
* [setMessenger](transactionbase.md#setmessenger)
* [setTxStatus](transactionbase.md#settxstatus)
* [socketConfirm](transactionbase.md#socketconfirm)
* [socketCxConfirm](transactionbase.md#socketcxconfirm)
* [trackCx](transactionbase.md#trackcx)
* [trackTx](transactionbase.md#tracktx)
* [txConfirm](transactionbase.md#txconfirm)
* [normalizeAddress](transactionbase.md#static-normalizeaddress)

## Constructors

###  constructor

\+ **new TransactionBase**(`messenger`: Messenger, `txStatus`: [TxStatus](../enums/txstatus.md)): *[TransactionBase](transactionbase.md)*

*Defined in [transactionBase.ts:35](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`messenger` | Messenger |
`txStatus` | [TxStatus](../enums/txstatus.md) |

**Returns:** *[TransactionBase](transactionbase.md)*

## Properties

###  blockNumbers

• **blockNumbers**: *string[]* =  []

*Defined in [transactionBase.ts:25](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L25)*

___

###  confirmationCheck

• **confirmationCheck**: *number* = 0

*Defined in [transactionBase.ts:27](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L27)*

___

###  confirmations

• **confirmations**: *number* = 0

*Defined in [transactionBase.ts:26](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L26)*

___

###  cxBlockNumbers

• **cxBlockNumbers**: *string[]* =  []

*Defined in [transactionBase.ts:29](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L29)*

___

###  cxConfirmationCheck

• **cxConfirmationCheck**: *number* = 0

*Defined in [transactionBase.ts:31](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L31)*

___

###  cxConfirmations

• **cxConfirmations**: *number* = 0

*Defined in [transactionBase.ts:30](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L30)*

___

###  cxStatus

• **cxStatus**: *[TxStatus](../enums/txstatus.md)* =  TxStatus.INTIALIZED

*Defined in [transactionBase.ts:28](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L28)*

___

###  emitter

• **emitter**: *Emitter*

*Defined in [transactionBase.ts:22](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L22)*

___

###  id

• **id**: *string*

*Defined in [transactionBase.ts:34](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L34)*

___

###  messenger

• **messenger**: *Messenger*

*Defined in [transactionBase.ts:23](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L23)*

___

### `Optional` receipt

• **receipt**? : *[TransasctionReceipt](../interfaces/transasctionreceipt.md)*

*Defined in [transactionBase.ts:32](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L32)*

___

###  shardID

• **shardID**: *number | string*

*Defined in [transactionBase.ts:35](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L35)*

___

###  txStatus

• **txStatus**: *[TxStatus](../enums/txstatus.md)*

*Defined in [transactionBase.ts:24](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L24)*

## Methods

###  cxConfirm

▸ **cxConfirm**(`txHash`: string, `maxAttempts`: number, `interval`: number, `toShardID`: number | string): *Promise‹[TransactionBase](transactionbase.md)›*

*Defined in [transactionBase.ts:313](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L313)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`txHash` | string | - |
`maxAttempts` | number | 20 |
`interval` | number | 1000 |
`toShardID` | number &#124; string | - |

**Returns:** *Promise‹[TransactionBase](transactionbase.md)›*

___

###  emitConfirm

▸ **emitConfirm**(`data`: any): *void*

*Defined in [transactionBase.ts:264](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L264)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

###  emitCxConfirm

▸ **emitCxConfirm**(`data`: any): *void*

*Defined in [transactionBase.ts:273](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L273)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

###  emitCxReceipt

▸ **emitCxReceipt**(`receipt`: any): *void*

*Defined in [transactionBase.ts:270](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L270)*

**Parameters:**

Name | Type |
------ | ------ |
`receipt` | any |

**Returns:** *void*

___

###  emitCxTrack

▸ **emitCxTrack**(`data`: any): *void*

*Defined in [transactionBase.ts:276](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L276)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

###  emitError

▸ **emitError**(`error`: any): *void*

*Defined in [transactionBase.ts:261](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L261)*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |

**Returns:** *void*

___

###  emitReceipt

▸ **emitReceipt**(`receipt`: any): *void*

*Defined in [transactionBase.ts:258](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L258)*

**Parameters:**

Name | Type |
------ | ------ |
`receipt` | any |

**Returns:** *void*

___

###  emitTrack

▸ **emitTrack**(`data`: any): *void*

*Defined in [transactionBase.ts:267](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L267)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

###  emitTransactionHash

▸ **emitTransactionHash**(`transactionHash`: string): *void*

*Defined in [transactionBase.ts:255](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L255)*

**Parameters:**

Name | Type |
------ | ------ |
`transactionHash` | string |

**Returns:** *void*

___

###  getBlockByNumber

▸ **getBlockByNumber**(`blockNumber`: string): *Promise‹any›*

*Defined in [transactionBase.ts:296](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L296)*

**Parameters:**

Name | Type |
------ | ------ |
`blockNumber` | string |

**Returns:** *Promise‹any›*

___

###  getBlockNumber

▸ **getBlockNumber**(`shardID`: number | string): *Promise‹BN›*

*Defined in [transactionBase.ts:280](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L280)*

**Parameters:**

Name | Type |
------ | ------ |
`shardID` | number &#124; string |

**Returns:** *Promise‹BN›*

___

###  getCxStatus

▸ **getCxStatus**(): *[TxStatus](../enums/txstatus.md)*

*Defined in [transactionBase.ts:60](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L60)*

**Returns:** *[TxStatus](../enums/txstatus.md)*

___

###  getTxStatus

▸ **getTxStatus**(): *[TxStatus](../enums/txstatus.md)*

*Defined in [transactionBase.ts:53](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L53)*

**Returns:** *[TxStatus](../enums/txstatus.md)*

___

###  isConfirmed

▸ **isConfirmed**(): *boolean*

*Defined in [transactionBase.ts:77](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L77)*

**Returns:** *boolean*

___

###  isCxConfirmed

▸ **isCxConfirmed**(): *boolean*

*Defined in [transactionBase.ts:86](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L86)*

**Returns:** *boolean*

___

###  isCxPending

▸ **isCxPending**(): *boolean*

*Defined in [transactionBase.ts:80](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L80)*

**Returns:** *boolean*

___

###  isCxRejected

▸ **isCxRejected**(): *boolean*

*Defined in [transactionBase.ts:83](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L83)*

**Returns:** *boolean*

___

###  isInitialized

▸ **isInitialized**(): *boolean*

*Defined in [transactionBase.ts:65](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L65)*

**Returns:** *boolean*

___

###  isPending

▸ **isPending**(): *boolean*

*Defined in [transactionBase.ts:71](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L71)*

**Returns:** *boolean*

___

###  isRejected

▸ **isRejected**(): *boolean*

*Defined in [transactionBase.ts:74](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L74)*

**Returns:** *boolean*

___

###  isSigned

▸ **isSigned**(): *boolean*

*Defined in [transactionBase.ts:68](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L68)*

**Returns:** *boolean*

___

###  observed

▸ **observed**(): *Emitter*

*Defined in [transactionBase.ts:89](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L89)*

**Returns:** *Emitter*

___

###  setCxStatus

▸ **setCxStatus**(`cxStatus`: [TxStatus](../enums/txstatus.md)): *void*

*Defined in [transactionBase.ts:56](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`cxStatus` | [TxStatus](../enums/txstatus.md) |

**Returns:** *void*

___

###  setMessenger

▸ **setMessenger**(`messenger`: Messenger): *void*

*Defined in [transactionBase.ts:45](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`messenger` | Messenger |

**Returns:** *void*

___

###  setTxStatus

▸ **setTxStatus**(`txStatus`: [TxStatus](../enums/txstatus.md)): *void*

*Defined in [transactionBase.ts:49](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`txStatus` | [TxStatus](../enums/txstatus.md) |

**Returns:** *void*

___

###  socketConfirm

▸ **socketConfirm**(`txHash`: string, `maxAttempts`: number, `shardID`: number | string): *Promise‹[TransactionBase](transactionbase.md)›*

*Defined in [transactionBase.ts:206](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L206)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`txHash` | string | - |
`maxAttempts` | number | 20 |
`shardID` | number &#124; string | - |

**Returns:** *Promise‹[TransactionBase](transactionbase.md)›*

___

###  socketCxConfirm

▸ **socketCxConfirm**(`txHash`: string, `maxAttempts`: number, `toShardID`: number | string): *Promise‹[TransactionBase](transactionbase.md)›*

*Defined in [transactionBase.ts:400](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L400)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`txHash` | string | - |
`maxAttempts` | number | 20 |
`toShardID` | number &#124; string | - |

**Returns:** *Promise‹[TransactionBase](transactionbase.md)›*

___

###  trackCx

▸ **trackCx**(`txHash`: string, `toShardID`: number | string): *Promise‹boolean›*

*Defined in [transactionBase.ts:376](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L376)*

**Parameters:**

Name | Type |
------ | ------ |
`txHash` | string |
`toShardID` | number &#124; string |

**Returns:** *Promise‹boolean›*

___

###  trackTx

▸ **trackTx**(`txHash`: string, `shardID`: number | string): *Promise‹boolean›*

*Defined in [transactionBase.ts:93](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`txHash` | string |
`shardID` | number &#124; string |

**Returns:** *Promise‹boolean›*

___

###  txConfirm

▸ **txConfirm**(`txHash`: string, `maxAttempts`: number, `interval`: number, `shardID`: number | string): *Promise‹[TransactionBase](transactionbase.md)›*

*Defined in [transactionBase.ts:140](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L140)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`txHash` | string | - |
`maxAttempts` | number | 20 |
`interval` | number | 1000 |
`shardID` | number &#124; string | - |

**Returns:** *Promise‹[TransactionBase](transactionbase.md)›*

___

### `Static` normalizeAddress

▸ **normalizeAddress**(`address`: string): *string*

*Defined in [transactionBase.ts:9](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-transaction/src/transactionBase.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *string*
