[@harmony-js/transaction](../globals.md) › [ShardingTransaction](shardingtransaction.md)

# Class: ShardingTransaction

## Hierarchy

* [Transaction](transaction.md)

  ↳ **ShardingTransaction**

## Index

### Constructors

* [constructor](shardingtransaction.md#constructor)

### Properties

* [blockNumbers](shardingtransaction.md#blocknumbers)
* [confirmationCheck](shardingtransaction.md#confirmationcheck)
* [confirmations](shardingtransaction.md#confirmations)
* [emitter](shardingtransaction.md#emitter)
* [messenger](shardingtransaction.md#messenger)
* [receipt](shardingtransaction.md#optional-receipt)
* [txStatus](shardingtransaction.md#txstatus)

### Accessors

* [txParams](shardingtransaction.md#txparams)
* [txPayload](shardingtransaction.md#txpayload)

### Methods

* [confirm](shardingtransaction.md#confirm)
* [emitConfirm](shardingtransaction.md#emitconfirm)
* [emitError](shardingtransaction.md#emiterror)
* [emitReceipt](shardingtransaction.md#emitreceipt)
* [emitTrack](shardingtransaction.md#emittrack)
* [emitTransactionHash](shardingtransaction.md#emittransactionhash)
* [getBlockByNumber](shardingtransaction.md#getblockbynumber)
* [getBlockNumber](shardingtransaction.md#getblocknumber)
* [getRLPSigned](shardingtransaction.md#getrlpsigned)
* [getRLPUnsigned](shardingtransaction.md#getrlpunsigned)
* [getRawTransaction](shardingtransaction.md#getrawtransaction)
* [getTxStatus](shardingtransaction.md#gettxstatus)
* [isConfirmed](shardingtransaction.md#isconfirmed)
* [isInitialized](shardingtransaction.md#isinitialized)
* [isPending](shardingtransaction.md#ispending)
* [isRejected](shardingtransaction.md#isrejected)
* [isSigned](shardingtransaction.md#issigned)
* [map](shardingtransaction.md#map)
* [normalizeAddress](shardingtransaction.md#normalizeaddress)
* [observed](shardingtransaction.md#observed)
* [recover](shardingtransaction.md#recover)
* [sendTransaction](shardingtransaction.md#sendtransaction)
* [setMessenger](shardingtransaction.md#setmessenger)
* [setParams](shardingtransaction.md#setparams)
* [setTxStatus](shardingtransaction.md#settxstatus)
* [socketConfirm](shardingtransaction.md#socketconfirm)
* [trackTx](shardingtransaction.md#tracktx)

## Constructors

###  constructor

\+ **new ShardingTransaction**(`params?`: [TxParams](../interfaces/txparams.md) | any, `messenger`: Messenger, `txStatus`: [TxStatus](../enums/txstatus.md)): *[ShardingTransaction](shardingtransaction.md)*

*Overrides [Transaction](transaction.md).[constructor](transaction.md#constructor)*

*Defined in [shardingTransaction.ts:7](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/shardingTransaction.ts#L7)*

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

*Inherited from [Transaction](transaction.md).[blockNumbers](transaction.md#blocknumbers)*

*Defined in [transaction.ts:37](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L37)*

___

###  confirmationCheck

• **confirmationCheck**: *number* = 0

*Inherited from [Transaction](transaction.md).[confirmationCheck](transaction.md#confirmationcheck)*

*Defined in [transaction.ts:39](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L39)*

___

###  confirmations

• **confirmations**: *number* = 0

*Inherited from [Transaction](transaction.md).[confirmations](transaction.md#confirmations)*

*Defined in [transaction.ts:38](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L38)*

___

###  emitter

• **emitter**: *Emitter*

*Inherited from [Transaction](transaction.md).[emitter](transaction.md#emitter)*

*Defined in [transaction.ts:34](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L34)*

___

###  messenger

• **messenger**: *Messenger*

*Inherited from [Transaction](transaction.md).[messenger](transaction.md#messenger)*

*Defined in [transaction.ts:35](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L35)*

___

### `Optional` receipt

• **receipt**? : *[TransasctionReceipt](../interfaces/transasctionreceipt.md)*

*Inherited from [Transaction](transaction.md).[receipt](transaction.md#optional-receipt)*

*Defined in [transaction.ts:40](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L40)*

___

###  txStatus

• **txStatus**: *[TxStatus](../enums/txstatus.md)*

*Inherited from [Transaction](transaction.md).[txStatus](transaction.md#txstatus)*

*Defined in [transaction.ts:36](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L36)*

## Accessors

###  txParams

• **get txParams**(): *[TxParams](../interfaces/txparams.md)*

*Inherited from [Transaction](transaction.md).[txParams](transaction.md#txparams)*

*Defined in [transaction.ts:195](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L195)*

**Returns:** *[TxParams](../interfaces/txparams.md)*

___

###  txPayload

• **get txPayload**(): *object*

*Inherited from [Transaction](transaction.md).[txPayload](transaction.md#txpayload)*

*Defined in [transaction.ts:181](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L181)*

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

▸ **confirm**(`txHash`: string, `maxAttempts`: number, `interval`: number, `shardID`: number | string): *Promise‹[Transaction](transaction.md)›*

*Inherited from [Transaction](transaction.md).[confirm](transaction.md#confirm)*

*Defined in [transaction.ts:372](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L372)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`txHash` | string | - |
`maxAttempts` | number | 20 |
`interval` | number | 1000 |
`shardID` | number &#124; string |  this.shardID |

**Returns:** *Promise‹[Transaction](transaction.md)›*

___

###  emitConfirm

▸ **emitConfirm**(`data`: any): *void*

*Inherited from [Transaction](transaction.md).[emitConfirm](transaction.md#emitconfirm)*

*Defined in [transaction.ts:496](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L496)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

###  emitError

▸ **emitError**(`error`: any): *void*

*Inherited from [Transaction](transaction.md).[emitError](transaction.md#emiterror)*

*Defined in [transaction.ts:493](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L493)*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |

**Returns:** *void*

___

###  emitReceipt

▸ **emitReceipt**(`receipt`: any): *void*

*Inherited from [Transaction](transaction.md).[emitReceipt](transaction.md#emitreceipt)*

*Defined in [transaction.ts:490](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L490)*

**Parameters:**

Name | Type |
------ | ------ |
`receipt` | any |

**Returns:** *void*

___

###  emitTrack

▸ **emitTrack**(`data`: any): *void*

*Inherited from [Transaction](transaction.md).[emitTrack](transaction.md#emittrack)*

*Defined in [transaction.ts:499](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L499)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

###  emitTransactionHash

▸ **emitTransactionHash**(`transactionHash`: string): *void*

*Inherited from [Transaction](transaction.md).[emitTransactionHash](transaction.md#emittransactionhash)*

*Defined in [transaction.ts:487](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L487)*

**Parameters:**

Name | Type |
------ | ------ |
`transactionHash` | string |

**Returns:** *void*

___

###  getBlockByNumber

▸ **getBlockByNumber**(`blockNumber`: string): *Promise‹any›*

*Inherited from [Transaction](transaction.md).[getBlockByNumber](transaction.md#getblockbynumber)*

*Defined in [transaction.ts:521](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L521)*

**Parameters:**

Name | Type |
------ | ------ |
`blockNumber` | string |

**Returns:** *Promise‹any›*

___

###  getBlockNumber

▸ **getBlockNumber**(): *Promise‹BN›*

*Inherited from [Transaction](transaction.md).[getBlockNumber](transaction.md#getblocknumber)*

*Defined in [transaction.ts:503](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L503)*

**Returns:** *Promise‹BN›*

___

###  getRLPSigned

▸ **getRLPSigned**(`raw`: any[], `signature`: Signature): *string*

*Inherited from [Transaction](transaction.md).[getRLPSigned](transaction.md#getrlpsigned)*

*Defined in [transaction.ts:147](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L147)*

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

*Defined in [transaction.ts:110](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L110)*

**Returns:** *[string, any[]]*

___

###  getRawTransaction

▸ **getRawTransaction**(): *string*

*Inherited from [Transaction](transaction.md).[getRawTransaction](transaction.md#getrawtransaction)*

*Defined in [transaction.ts:166](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L166)*

**Returns:** *string*

___

###  getTxStatus

▸ **getTxStatus**(): *[TxStatus](../enums/txstatus.md)*

*Inherited from [Transaction](transaction.md).[getTxStatus](transaction.md#gettxstatus)*

*Defined in [transaction.ts:264](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L264)*

**Returns:** *[TxStatus](../enums/txstatus.md)*

___

###  isConfirmed

▸ **isConfirmed**(): *boolean*

*Inherited from [Transaction](transaction.md).[isConfirmed](transaction.md#isconfirmed)*

*Defined in [transaction.ts:281](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L281)*

**Returns:** *boolean*

___

###  isInitialized

▸ **isInitialized**(): *boolean*

*Inherited from [Transaction](transaction.md).[isInitialized](transaction.md#isinitialized)*

*Defined in [transaction.ts:269](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L269)*

**Returns:** *boolean*

___

###  isPending

▸ **isPending**(): *boolean*

*Inherited from [Transaction](transaction.md).[isPending](transaction.md#ispending)*

*Defined in [transaction.ts:275](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L275)*

**Returns:** *boolean*

___

###  isRejected

▸ **isRejected**(): *boolean*

*Inherited from [Transaction](transaction.md).[isRejected](transaction.md#isrejected)*

*Defined in [transaction.ts:278](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L278)*

**Returns:** *boolean*

___

###  isSigned

▸ **isSigned**(): *boolean*

*Inherited from [Transaction](transaction.md).[isSigned](transaction.md#issigned)*

*Defined in [transaction.ts:272](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L272)*

**Returns:** *boolean*

___

###  map

▸ **map**(`fn`: any): *this*

*Inherited from [Transaction](transaction.md).[map](transaction.md#map)*

*Defined in [transaction.ts:253](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L253)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | any |

**Returns:** *this*

___

###  normalizeAddress

▸ **normalizeAddress**(`address`: string): *string*

*Inherited from [Transaction](transaction.md).[normalizeAddress](transaction.md#normalizeaddress)*

*Defined in [transaction.ts:540](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L540)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *string*

___

###  observed

▸ **observed**(): *Emitter*

*Inherited from [Transaction](transaction.md).[observed](transaction.md#observed)*

*Defined in [transaction.ts:285](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L285)*

**Returns:** *Emitter*

___

###  recover

▸ **recover**(`rawTransaction`: string): *[Transaction](transaction.md)*

*Inherited from [Transaction](transaction.md).[recover](transaction.md#recover)*

*Defined in [transaction.ts:170](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L170)*

**Parameters:**

Name | Type |
------ | ------ |
`rawTransaction` | string |

**Returns:** *[Transaction](transaction.md)*

___

###  sendTransaction

▸ **sendTransaction**(): *Promise‹[[Transaction](transaction.md), string]›*

*Inherited from [Transaction](transaction.md).[sendTransaction](transaction.md#sendtransaction)*

*Defined in [transaction.ts:289](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L289)*

**Returns:** *Promise‹[[Transaction](transaction.md), string]›*

___

###  setMessenger

▸ **setMessenger**(`messenger`: Messenger): *void*

*Inherited from [Transaction](transaction.md).[setMessenger](transaction.md#setmessenger)*

*Defined in [transaction.ts:106](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`messenger` | Messenger |

**Returns:** *void*

___

###  setParams

▸ **setParams**(`params`: [TxParams](../interfaces/txparams.md)): *void*

*Inherited from [Transaction](transaction.md).[setParams](transaction.md#setparams)*

*Defined in [transaction.ts:213](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L213)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [TxParams](../interfaces/txparams.md) |

**Returns:** *void*

___

###  setTxStatus

▸ **setTxStatus**(`txStatus`: [TxStatus](../enums/txstatus.md)): *void*

*Inherited from [Transaction](transaction.md).[setTxStatus](transaction.md#settxstatus)*

*Defined in [transaction.ts:260](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L260)*

**Parameters:**

Name | Type |
------ | ------ |
`txStatus` | [TxStatus](../enums/txstatus.md) |

**Returns:** *void*

___

###  socketConfirm

▸ **socketConfirm**(`txHash`: string, `maxAttempts`: number, `shardID`: number | string): *Promise‹[Transaction](transaction.md)›*

*Inherited from [Transaction](transaction.md).[socketConfirm](transaction.md#socketconfirm)*

*Defined in [transaction.ts:438](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L438)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`txHash` | string | - |
`maxAttempts` | number | 20 |
`shardID` | number &#124; string |  this.shardID |

**Returns:** *Promise‹[Transaction](transaction.md)›*

___

###  trackTx

▸ **trackTx**(`txHash`: string, `shardID`: number | string): *Promise‹boolean›*

*Inherited from [Transaction](transaction.md).[trackTx](transaction.md#tracktx)*

*Defined in [transaction.ts:324](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-transaction/src/transaction.ts#L324)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`txHash` | string | - |
`shardID` | number &#124; string |  this.shardID |

**Returns:** *Promise‹boolean›*
