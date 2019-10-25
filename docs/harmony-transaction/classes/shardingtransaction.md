[@harmony-js/transaction](../globals.md) › [ShardingTransaction](shardingtransaction.md)

# Class: ShardingTransaction

## Hierarchy

  ↳ [Transaction](transaction.md)

  ↳ **ShardingTransaction**

## Implements

* [AbstractTransaction](abstracttransaction.md)

## Index

### Constructors

* [constructor](shardingtransaction.md#constructor)

### Properties

* [blockNumbers](shardingtransaction.md#blocknumbers)
* [confirmationCheck](shardingtransaction.md#confirmationcheck)
* [confirmations](shardingtransaction.md#confirmations)
* [cxBlockNumbers](shardingtransaction.md#cxblocknumbers)
* [cxConfirmationCheck](shardingtransaction.md#cxconfirmationcheck)
* [cxConfirmations](shardingtransaction.md#cxconfirmations)
* [cxStatus](shardingtransaction.md#cxstatus)
* [emitter](shardingtransaction.md#emitter)
* [id](shardingtransaction.md#id)
* [messenger](shardingtransaction.md#messenger)
* [receipt](shardingtransaction.md#optional-receipt)
* [shardID](shardingtransaction.md#shardid)
* [txStatus](shardingtransaction.md#txstatus)

### Accessors

* [txParams](shardingtransaction.md#txparams)
* [txPayload](shardingtransaction.md#txpayload)

### Methods

* [confirm](shardingtransaction.md#confirm)
* [cxConfirm](shardingtransaction.md#cxconfirm)
* [emitConfirm](shardingtransaction.md#emitconfirm)
* [emitCxConfirm](shardingtransaction.md#emitcxconfirm)
* [emitCxReceipt](shardingtransaction.md#emitcxreceipt)
* [emitCxTrack](shardingtransaction.md#emitcxtrack)
* [emitError](shardingtransaction.md#emiterror)
* [emitReceipt](shardingtransaction.md#emitreceipt)
* [emitTrack](shardingtransaction.md#emittrack)
* [emitTransactionHash](shardingtransaction.md#emittransactionhash)
* [getBlockByNumber](shardingtransaction.md#getblockbynumber)
* [getBlockNumber](shardingtransaction.md#getblocknumber)
* [getCxStatus](shardingtransaction.md#getcxstatus)
* [getRLPSigned](shardingtransaction.md#getrlpsigned)
* [getRLPUnsigned](shardingtransaction.md#getrlpunsigned)
* [getRawTransaction](shardingtransaction.md#getrawtransaction)
* [getTxStatus](shardingtransaction.md#gettxstatus)
* [isConfirmed](shardingtransaction.md#isconfirmed)
* [isCrossShard](shardingtransaction.md#iscrossshard)
* [isCxConfirmed](shardingtransaction.md#iscxconfirmed)
* [isCxPending](shardingtransaction.md#iscxpending)
* [isCxRejected](shardingtransaction.md#iscxrejected)
* [isInitialized](shardingtransaction.md#isinitialized)
* [isPending](shardingtransaction.md#ispending)
* [isRejected](shardingtransaction.md#isrejected)
* [isSigned](shardingtransaction.md#issigned)
* [map](shardingtransaction.md#map)
* [observed](shardingtransaction.md#observed)
* [recover](shardingtransaction.md#recover)
* [sendTransaction](shardingtransaction.md#sendtransaction)
* [setCxStatus](shardingtransaction.md#setcxstatus)
* [setMessenger](shardingtransaction.md#setmessenger)
* [setParams](shardingtransaction.md#setparams)
* [setTxStatus](shardingtransaction.md#settxstatus)
* [socketConfirm](shardingtransaction.md#socketconfirm)
* [socketCxConfirm](shardingtransaction.md#socketcxconfirm)
* [trackCx](shardingtransaction.md#trackcx)
* [trackTx](shardingtransaction.md#tracktx)
* [txConfirm](shardingtransaction.md#txconfirm)
* [normalizeAddress](shardingtransaction.md#static-normalizeaddress)

## Constructors

###  constructor

\+ **new ShardingTransaction**(`params?`: [TxParams](../interfaces/txparams.md) | any, `messenger`: Messenger, `txStatus`: [TxStatus](../enums/txstatus.md)): *[ShardingTransaction](shardingtransaction.md)*

*Overrides [Transaction](transaction.md).[constructor](transaction.md#constructor)*

*Defined in [shardingTransaction.ts:7](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/shardingTransaction.ts#L7)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`params?` | [TxParams](../interfaces/txparams.md) &#124; any | - |
`messenger` | Messenger |  defaultMessenger |
`txStatus` | [TxStatus](../enums/txstatus.md) |  TxStatus.INTIALIZED |

**Returns:** *[ShardingTransaction](shardingtransaction.md)*

## Properties

###  blockNumbers

• **blockNumbers**: *string[]* =  []

*Inherited from [TransactionBase](transactionbase.md).[blockNumbers](transactionbase.md#blocknumbers)*

*Defined in [transactionBase.ts:25](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L25)*

___

###  confirmationCheck

• **confirmationCheck**: *number* = 0

*Inherited from [TransactionBase](transactionbase.md).[confirmationCheck](transactionbase.md#confirmationcheck)*

*Defined in [transactionBase.ts:27](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L27)*

___

###  confirmations

• **confirmations**: *number* = 0

*Inherited from [TransactionBase](transactionbase.md).[confirmations](transactionbase.md#confirmations)*

*Defined in [transactionBase.ts:26](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L26)*

___

###  cxBlockNumbers

• **cxBlockNumbers**: *string[]* =  []

*Inherited from [TransactionBase](transactionbase.md).[cxBlockNumbers](transactionbase.md#cxblocknumbers)*

*Defined in [transactionBase.ts:29](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L29)*

___

###  cxConfirmationCheck

• **cxConfirmationCheck**: *number* = 0

*Inherited from [TransactionBase](transactionbase.md).[cxConfirmationCheck](transactionbase.md#cxconfirmationcheck)*

*Defined in [transactionBase.ts:31](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L31)*

___

###  cxConfirmations

• **cxConfirmations**: *number* = 0

*Inherited from [TransactionBase](transactionbase.md).[cxConfirmations](transactionbase.md#cxconfirmations)*

*Defined in [transactionBase.ts:30](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L30)*

___

###  cxStatus

• **cxStatus**: *[TxStatus](../enums/txstatus.md)* =  TxStatus.INTIALIZED

*Inherited from [TransactionBase](transactionbase.md).[cxStatus](transactionbase.md#cxstatus)*

*Defined in [transactionBase.ts:28](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L28)*

___

###  emitter

• **emitter**: *Emitter*

*Inherited from [TransactionBase](transactionbase.md).[emitter](transactionbase.md#emitter)*

*Defined in [transactionBase.ts:22](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L22)*

___

###  id

• **id**: *string*

*Inherited from [TransactionBase](transactionbase.md).[id](transactionbase.md#id)*

*Defined in [transactionBase.ts:34](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L34)*

___

###  messenger

• **messenger**: *Messenger*

*Inherited from [TransactionBase](transactionbase.md).[messenger](transactionbase.md#messenger)*

*Defined in [transactionBase.ts:23](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L23)*

___

### `Optional` receipt

• **receipt**? : *[TransasctionReceipt](../interfaces/transasctionreceipt.md)*

*Inherited from [TransactionBase](transactionbase.md).[receipt](transactionbase.md#optional-receipt)*

*Defined in [transactionBase.ts:32](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L32)*

___

###  shardID

• **shardID**: *number | string*

*Inherited from [TransactionBase](transactionbase.md).[shardID](transactionbase.md#shardid)*

*Defined in [transactionBase.ts:35](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L35)*

___

###  txStatus

• **txStatus**: *[TxStatus](../enums/txstatus.md)*

*Inherited from [TransactionBase](transactionbase.md).[txStatus](transactionbase.md#txstatus)*

*Defined in [transactionBase.ts:24](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L24)*

## Accessors

###  txParams

• **get txParams**(): *[TxParams](../interfaces/txparams.md)*

*Inherited from [Transaction](transaction.md).[txParams](transaction.md#txparams)*

*Defined in [transaction.ts:170](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transaction.ts#L170)*

**Returns:** *[TxParams](../interfaces/txparams.md)*

___

###  txPayload

• **get txPayload**(): *object*

*Inherited from [Transaction](transaction.md).[txPayload](transaction.md#txpayload)*

*Defined in [transaction.ts:156](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transaction.ts#L156)*

**Returns:** *object*

* **data**: *string* =  this.txParams.data || '0x'

* **from**: *string* =  this.txParams.from || '0x'

* **gas**: *string* =  this.txParams.gasLimit ? numberToHex(this.txParams.gasLimit) : '0x'

* **gasPrice**: *string* =  this.txParams.gasPrice ? numberToHex(this.txParams.gasPrice) : '0x'

* **nonce**: *string* =  this.txParams.nonce ? numberToHex(this.nonce) : '0x'

* **shardID**: *string* =  this.txParams.shardID ? numberToHex(this.shardID) : '0x'

* **to**: *string* =  this.txParams.to || '0x'

* **toShardID**: *string* =  this.txParams.toShardID ? numberToHex(this.toShardID) : '0x'

* **value**: *string* =  this.txParams.value ? numberToHex(this.txParams.value) : '0x'

## Methods

###  confirm

▸ **confirm**(`txHash`: string, `maxAttempts`: number, `interval`: number, `shardID`: number | string, `toShardID`: number | string): *Promise‹[TransactionBase](transactionbase.md)›*

*Inherited from [Transaction](transaction.md).[confirm](transaction.md#confirm)*

*Defined in [transaction.ts:274](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transaction.ts#L274)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`txHash` | string | - |
`maxAttempts` | number | 20 |
`interval` | number | 1000 |
`shardID` | number &#124; string |  this.txParams.shardID |
`toShardID` | number &#124; string |  this.txParams.toShardID |

**Returns:** *Promise‹[TransactionBase](transactionbase.md)›*

___

###  cxConfirm

▸ **cxConfirm**(`txHash`: string, `maxAttempts`: number, `interval`: number, `toShardID`: number | string): *Promise‹[TransactionBase](transactionbase.md)›*

*Inherited from [TransactionBase](transactionbase.md).[cxConfirm](transactionbase.md#cxconfirm)*

*Defined in [transactionBase.ts:313](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L313)*

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

*Inherited from [TransactionBase](transactionbase.md).[emitConfirm](transactionbase.md#emitconfirm)*

*Defined in [transactionBase.ts:264](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L264)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

###  emitCxConfirm

▸ **emitCxConfirm**(`data`: any): *void*

*Inherited from [TransactionBase](transactionbase.md).[emitCxConfirm](transactionbase.md#emitcxconfirm)*

*Defined in [transactionBase.ts:273](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L273)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

###  emitCxReceipt

▸ **emitCxReceipt**(`receipt`: any): *void*

*Inherited from [TransactionBase](transactionbase.md).[emitCxReceipt](transactionbase.md#emitcxreceipt)*

*Defined in [transactionBase.ts:270](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L270)*

**Parameters:**

Name | Type |
------ | ------ |
`receipt` | any |

**Returns:** *void*

___

###  emitCxTrack

▸ **emitCxTrack**(`data`: any): *void*

*Inherited from [TransactionBase](transactionbase.md).[emitCxTrack](transactionbase.md#emitcxtrack)*

*Defined in [transactionBase.ts:276](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L276)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

###  emitError

▸ **emitError**(`error`: any): *void*

*Inherited from [TransactionBase](transactionbase.md).[emitError](transactionbase.md#emiterror)*

*Defined in [transactionBase.ts:261](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L261)*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |

**Returns:** *void*

___

###  emitReceipt

▸ **emitReceipt**(`receipt`: any): *void*

*Inherited from [TransactionBase](transactionbase.md).[emitReceipt](transactionbase.md#emitreceipt)*

*Defined in [transactionBase.ts:258](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L258)*

**Parameters:**

Name | Type |
------ | ------ |
`receipt` | any |

**Returns:** *void*

___

###  emitTrack

▸ **emitTrack**(`data`: any): *void*

*Inherited from [TransactionBase](transactionbase.md).[emitTrack](transactionbase.md#emittrack)*

*Defined in [transactionBase.ts:267](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L267)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

###  emitTransactionHash

▸ **emitTransactionHash**(`transactionHash`: string): *void*

*Inherited from [TransactionBase](transactionbase.md).[emitTransactionHash](transactionbase.md#emittransactionhash)*

*Defined in [transactionBase.ts:255](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L255)*

**Parameters:**

Name | Type |
------ | ------ |
`transactionHash` | string |

**Returns:** *void*

___

###  getBlockByNumber

▸ **getBlockByNumber**(`blockNumber`: string): *Promise‹any›*

*Inherited from [TransactionBase](transactionbase.md).[getBlockByNumber](transactionbase.md#getblockbynumber)*

*Defined in [transactionBase.ts:296](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L296)*

**Parameters:**

Name | Type |
------ | ------ |
`blockNumber` | string |

**Returns:** *Promise‹any›*

___

###  getBlockNumber

▸ **getBlockNumber**(`shardID`: number | string): *Promise‹BN›*

*Inherited from [TransactionBase](transactionbase.md).[getBlockNumber](transactionbase.md#getblocknumber)*

*Defined in [transactionBase.ts:280](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L280)*

**Parameters:**

Name | Type |
------ | ------ |
`shardID` | number &#124; string |

**Returns:** *Promise‹BN›*

___

###  getCxStatus

▸ **getCxStatus**(): *[TxStatus](../enums/txstatus.md)*

*Inherited from [TransactionBase](transactionbase.md).[getCxStatus](transactionbase.md#getcxstatus)*

*Defined in [transactionBase.ts:60](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L60)*

**Returns:** *[TxStatus](../enums/txstatus.md)*

___

###  getRLPSigned

▸ **getRLPSigned**(`raw`: any[], `signature`: Signature): *string*

*Inherited from [Transaction](transaction.md).[getRLPSigned](transaction.md#getrlpsigned)*

*Defined in [transaction.ts:122](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transaction.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`raw` | any[] |
`signature` | Signature |

**Returns:** *string*

___

###  getRLPUnsigned

▸ **getRLPUnsigned**(): *[string, any[]]*

*Inherited from [Transaction](transaction.md).[getRLPUnsigned](transaction.md#getrlpunsigned)*

*Defined in [transaction.ts:85](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transaction.ts#L85)*

**Returns:** *[string, any[]]*

___

###  getRawTransaction

▸ **getRawTransaction**(): *string*

*Inherited from [Transaction](transaction.md).[getRawTransaction](transaction.md#getrawtransaction)*

*Defined in [transaction.ts:141](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transaction.ts#L141)*

**Returns:** *string*

___

###  getTxStatus

▸ **getTxStatus**(): *[TxStatus](../enums/txstatus.md)*

*Inherited from [TransactionBase](transactionbase.md).[getTxStatus](transactionbase.md#gettxstatus)*

*Defined in [transactionBase.ts:53](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L53)*

**Returns:** *[TxStatus](../enums/txstatus.md)*

___

###  isConfirmed

▸ **isConfirmed**(): *boolean*

*Inherited from [TransactionBase](transactionbase.md).[isConfirmed](transactionbase.md#isconfirmed)*

*Defined in [transactionBase.ts:77](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L77)*

**Returns:** *boolean*

___

###  isCrossShard

▸ **isCrossShard**(): *boolean*

*Inherited from [Transaction](transaction.md).[isCrossShard](transaction.md#iscrossshard)*

*Defined in [transaction.ts:235](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transaction.ts#L235)*

**Returns:** *boolean*

___

###  isCxConfirmed

▸ **isCxConfirmed**(): *boolean*

*Inherited from [TransactionBase](transactionbase.md).[isCxConfirmed](transactionbase.md#iscxconfirmed)*

*Defined in [transactionBase.ts:86](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L86)*

**Returns:** *boolean*

___

###  isCxPending

▸ **isCxPending**(): *boolean*

*Inherited from [TransactionBase](transactionbase.md).[isCxPending](transactionbase.md#iscxpending)*

*Defined in [transactionBase.ts:80](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L80)*

**Returns:** *boolean*

___

###  isCxRejected

▸ **isCxRejected**(): *boolean*

*Inherited from [TransactionBase](transactionbase.md).[isCxRejected](transactionbase.md#iscxrejected)*

*Defined in [transactionBase.ts:83](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L83)*

**Returns:** *boolean*

___

###  isInitialized

▸ **isInitialized**(): *boolean*

*Inherited from [TransactionBase](transactionbase.md).[isInitialized](transactionbase.md#isinitialized)*

*Defined in [transactionBase.ts:65](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L65)*

**Returns:** *boolean*

___

###  isPending

▸ **isPending**(): *boolean*

*Inherited from [TransactionBase](transactionbase.md).[isPending](transactionbase.md#ispending)*

*Defined in [transactionBase.ts:71](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L71)*

**Returns:** *boolean*

___

###  isRejected

▸ **isRejected**(): *boolean*

*Inherited from [TransactionBase](transactionbase.md).[isRejected](transactionbase.md#isrejected)*

*Defined in [transactionBase.ts:74](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L74)*

**Returns:** *boolean*

___

###  isSigned

▸ **isSigned**(): *boolean*

*Inherited from [TransactionBase](transactionbase.md).[isSigned](transactionbase.md#issigned)*

*Defined in [transactionBase.ts:68](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L68)*

**Returns:** *boolean*

___

###  map

▸ **map**(`fn`: any): *this*

*Inherited from [Transaction](transaction.md).[map](transaction.md#map)*

*Defined in [transaction.ts:228](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transaction.ts#L228)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | any |

**Returns:** *this*

___

###  observed

▸ **observed**(): *Emitter*

*Inherited from [TransactionBase](transactionbase.md).[observed](transactionbase.md#observed)*

*Defined in [transactionBase.ts:89](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L89)*

**Returns:** *Emitter*

___

###  recover

▸ **recover**(`rawTransaction`: string): *[Transaction](transaction.md)*

*Inherited from [Transaction](transaction.md).[recover](transaction.md#recover)*

*Defined in [transaction.ts:145](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transaction.ts#L145)*

**Parameters:**

Name | Type |
------ | ------ |
`rawTransaction` | string |

**Returns:** *[Transaction](transaction.md)*

___

###  sendTransaction

▸ **sendTransaction**(): *Promise‹[[Transaction](transaction.md), string]›*

*Inherited from [Transaction](transaction.md).[sendTransaction](transaction.md#sendtransaction)*

*Defined in [transaction.ts:239](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transaction.ts#L239)*

**Returns:** *Promise‹[[Transaction](transaction.md), string]›*

___

###  setCxStatus

▸ **setCxStatus**(`cxStatus`: [TxStatus](../enums/txstatus.md)): *void*

*Inherited from [TransactionBase](transactionbase.md).[setCxStatus](transactionbase.md#setcxstatus)*

*Defined in [transactionBase.ts:56](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`cxStatus` | [TxStatus](../enums/txstatus.md) |

**Returns:** *void*

___

###  setMessenger

▸ **setMessenger**(`messenger`: Messenger): *void*

*Inherited from [TransactionBase](transactionbase.md).[setMessenger](transactionbase.md#setmessenger)*

*Defined in [transactionBase.ts:45](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`messenger` | Messenger |

**Returns:** *void*

___

###  setParams

▸ **setParams**(`params`: [TxParams](../interfaces/txparams.md)): *void*

*Inherited from [Transaction](transaction.md).[setParams](transaction.md#setparams)*

*Defined in [transaction.ts:188](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transaction.ts#L188)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [TxParams](../interfaces/txparams.md) |

**Returns:** *void*

___

###  setTxStatus

▸ **setTxStatus**(`txStatus`: [TxStatus](../enums/txstatus.md)): *void*

*Inherited from [TransactionBase](transactionbase.md).[setTxStatus](transactionbase.md#settxstatus)*

*Defined in [transactionBase.ts:49](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`txStatus` | [TxStatus](../enums/txstatus.md) |

**Returns:** *void*

___

###  socketConfirm

▸ **socketConfirm**(`txHash`: string, `maxAttempts`: number, `shardID`: number | string): *Promise‹[TransactionBase](transactionbase.md)›*

*Inherited from [TransactionBase](transactionbase.md).[socketConfirm](transactionbase.md#socketconfirm)*

*Defined in [transactionBase.ts:206](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L206)*

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

*Inherited from [TransactionBase](transactionbase.md).[socketCxConfirm](transactionbase.md#socketcxconfirm)*

*Defined in [transactionBase.ts:400](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L400)*

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

*Inherited from [TransactionBase](transactionbase.md).[trackCx](transactionbase.md#trackcx)*

*Defined in [transactionBase.ts:376](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L376)*

**Parameters:**

Name | Type |
------ | ------ |
`txHash` | string |
`toShardID` | number &#124; string |

**Returns:** *Promise‹boolean›*

___

###  trackTx

▸ **trackTx**(`txHash`: string, `shardID`: number | string): *Promise‹boolean›*

*Inherited from [TransactionBase](transactionbase.md).[trackTx](transactionbase.md#tracktx)*

*Defined in [transactionBase.ts:93](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`txHash` | string |
`shardID` | number &#124; string |

**Returns:** *Promise‹boolean›*

___

###  txConfirm

▸ **txConfirm**(`txHash`: string, `maxAttempts`: number, `interval`: number, `shardID`: number | string): *Promise‹[TransactionBase](transactionbase.md)›*

*Inherited from [TransactionBase](transactionbase.md).[txConfirm](transactionbase.md#txconfirm)*

*Defined in [transactionBase.ts:140](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L140)*

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

*Inherited from [TransactionBase](transactionbase.md).[normalizeAddress](transactionbase.md#static-normalizeaddress)*

*Defined in [transactionBase.ts:9](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *string*
