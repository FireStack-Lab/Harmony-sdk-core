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
* [cxBlockNumbers](shardingtransaction.md#cxblocknumbers)
* [cxConfirmationCheck](shardingtransaction.md#cxconfirmationcheck)
* [cxConfirmations](shardingtransaction.md#cxconfirmations)
* [cxStatus](shardingtransaction.md#cxstatus)
* [emitter](shardingtransaction.md#emitter)
* [messenger](shardingtransaction.md#messenger)
* [receipt](shardingtransaction.md#optional-receipt)
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
* [normalizeAddress](shardingtransaction.md#normalizeaddress)
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

## Constructors

###  constructor

\+ **new ShardingTransaction**(`params?`: [TxParams](../interfaces/txparams.md) | any, `messenger`: Messenger, `txStatus`: [TxStatus](../enums/txstatus.md)): *[ShardingTransaction](shardingtransaction.md)*

*Overrides [Transaction](transaction.md).[constructor](transaction.md#constructor)*

*Defined in [shardingTransaction.ts:7](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/shardingTransaction.ts#L7)*

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

*Defined in [transaction.ts:37](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L37)*

___

###  confirmationCheck

• **confirmationCheck**: *number* = 0

*Inherited from [Transaction](transaction.md).[confirmationCheck](transaction.md#confirmationcheck)*

*Defined in [transaction.ts:39](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L39)*

___

###  confirmations

• **confirmations**: *number* = 0

*Inherited from [Transaction](transaction.md).[confirmations](transaction.md#confirmations)*

*Defined in [transaction.ts:38](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L38)*

___

###  cxBlockNumbers

• **cxBlockNumbers**: *string[]* =  []

*Inherited from [Transaction](transaction.md).[cxBlockNumbers](transaction.md#cxblocknumbers)*

*Defined in [transaction.ts:41](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L41)*

___

###  cxConfirmationCheck

• **cxConfirmationCheck**: *number* = 0

*Inherited from [Transaction](transaction.md).[cxConfirmationCheck](transaction.md#cxconfirmationcheck)*

*Defined in [transaction.ts:43](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L43)*

___

###  cxConfirmations

• **cxConfirmations**: *number* = 0

*Inherited from [Transaction](transaction.md).[cxConfirmations](transaction.md#cxconfirmations)*

*Defined in [transaction.ts:42](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L42)*

___

###  cxStatus

• **cxStatus**: *[TxStatus](../enums/txstatus.md)* =  TxStatus.INTIALIZED

*Inherited from [Transaction](transaction.md).[cxStatus](transaction.md#cxstatus)*

*Defined in [transaction.ts:40](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L40)*

___

###  emitter

• **emitter**: *Emitter*

*Inherited from [Transaction](transaction.md).[emitter](transaction.md#emitter)*

*Defined in [transaction.ts:34](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L34)*

___

###  messenger

• **messenger**: *Messenger*

*Inherited from [Transaction](transaction.md).[messenger](transaction.md#messenger)*

*Defined in [transaction.ts:35](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L35)*

___

### `Optional` receipt

• **receipt**? : *[TransasctionReceipt](../interfaces/transasctionreceipt.md)*

*Inherited from [Transaction](transaction.md).[receipt](transaction.md#optional-receipt)*

*Defined in [transaction.ts:44](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L44)*

___

###  txStatus

• **txStatus**: *[TxStatus](../enums/txstatus.md)*

*Inherited from [Transaction](transaction.md).[txStatus](transaction.md#txstatus)*

*Defined in [transaction.ts:36](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L36)*

## Accessors

###  txParams

• **get txParams**(): *[TxParams](../interfaces/txparams.md)*

*Inherited from [Transaction](transaction.md).[txParams](transaction.md#txparams)*

*Defined in [transaction.ts:200](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L200)*

**Returns:** *[TxParams](../interfaces/txparams.md)*

___

###  txPayload

• **get txPayload**(): *object*

*Inherited from [Transaction](transaction.md).[txPayload](transaction.md#txpayload)*

*Defined in [transaction.ts:186](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L186)*

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

*Defined in [transaction.ts:396](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L396)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`txHash` | string | - |
`maxAttempts` | number | 20 |
`interval` | number | 1000 |
`shardID` | number &#124; string |  this.shardID |

**Returns:** *Promise‹[Transaction](transaction.md)›*

___

###  cxConfirm

▸ **cxConfirm**(`txHash`: string, `maxAttempts`: number, `interval`: number, `shardID`: number | string, `toShardID`: number | string): *Promise‹undefined | [Transaction](transaction.md)›*

*Inherited from [Transaction](transaction.md).[cxConfirm](transaction.md#cxconfirm)*

*Defined in [transaction.ts:571](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L571)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`txHash` | string | - |
`maxAttempts` | number | 20 |
`interval` | number | 1000 |
`shardID` | number &#124; string |  this.txParams.shardID |
`toShardID` | number &#124; string |  this.txParams.toShardID |

**Returns:** *Promise‹undefined | [Transaction](transaction.md)›*

___

###  emitConfirm

▸ **emitConfirm**(`data`: any): *void*

*Inherited from [Transaction](transaction.md).[emitConfirm](transaction.md#emitconfirm)*

*Defined in [transaction.ts:520](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L520)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

###  emitCxConfirm

▸ **emitCxConfirm**(`data`: any): *void*

*Inherited from [Transaction](transaction.md).[emitCxConfirm](transaction.md#emitcxconfirm)*

*Defined in [transaction.ts:529](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L529)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

###  emitCxReceipt

▸ **emitCxReceipt**(`receipt`: any): *void*

*Inherited from [Transaction](transaction.md).[emitCxReceipt](transaction.md#emitcxreceipt)*

*Defined in [transaction.ts:526](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L526)*

**Parameters:**

Name | Type |
------ | ------ |
`receipt` | any |

**Returns:** *void*

___

###  emitCxTrack

▸ **emitCxTrack**(`data`: any): *void*

*Inherited from [Transaction](transaction.md).[emitCxTrack](transaction.md#emitcxtrack)*

*Defined in [transaction.ts:532](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L532)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

###  emitError

▸ **emitError**(`error`: any): *void*

*Inherited from [Transaction](transaction.md).[emitError](transaction.md#emiterror)*

*Defined in [transaction.ts:517](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L517)*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |

**Returns:** *void*

___

###  emitReceipt

▸ **emitReceipt**(`receipt`: any): *void*

*Inherited from [Transaction](transaction.md).[emitReceipt](transaction.md#emitreceipt)*

*Defined in [transaction.ts:514](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L514)*

**Parameters:**

Name | Type |
------ | ------ |
`receipt` | any |

**Returns:** *void*

___

###  emitTrack

▸ **emitTrack**(`data`: any): *void*

*Inherited from [Transaction](transaction.md).[emitTrack](transaction.md#emittrack)*

*Defined in [transaction.ts:523](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L523)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

###  emitTransactionHash

▸ **emitTransactionHash**(`transactionHash`: string): *void*

*Inherited from [Transaction](transaction.md).[emitTransactionHash](transaction.md#emittransactionhash)*

*Defined in [transaction.ts:511](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L511)*

**Parameters:**

Name | Type |
------ | ------ |
`transactionHash` | string |

**Returns:** *void*

___

###  getBlockByNumber

▸ **getBlockByNumber**(`blockNumber`: string): *Promise‹any›*

*Inherited from [Transaction](transaction.md).[getBlockByNumber](transaction.md#getblockbynumber)*

*Defined in [transaction.ts:552](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L552)*

**Parameters:**

Name | Type |
------ | ------ |
`blockNumber` | string |

**Returns:** *Promise‹any›*

___

###  getBlockNumber

▸ **getBlockNumber**(`shardID`: number | string): *Promise‹BN›*

*Inherited from [Transaction](transaction.md).[getBlockNumber](transaction.md#getblocknumber)*

*Defined in [transaction.ts:536](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L536)*

**Parameters:**

Name | Type |
------ | ------ |
`shardID` | number &#124; string |

**Returns:** *Promise‹BN›*

___

###  getCxStatus

▸ **getCxStatus**(): *[TxStatus](../enums/txstatus.md)*

*Inherited from [Transaction](transaction.md).[getCxStatus](transaction.md#getcxstatus)*

*Defined in [transaction.ts:276](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L276)*

**Returns:** *[TxStatus](../enums/txstatus.md)*

___

###  getRLPSigned

▸ **getRLPSigned**(`raw`: any[], `signature`: Signature): *string*

*Inherited from [Transaction](transaction.md).[getRLPSigned](transaction.md#getrlpsigned)*

*Defined in [transaction.ts:152](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L152)*

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

*Defined in [transaction.ts:115](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L115)*

**Returns:** *[string, any[]]*

___

###  getRawTransaction

▸ **getRawTransaction**(): *string*

*Inherited from [Transaction](transaction.md).[getRawTransaction](transaction.md#getrawtransaction)*

*Defined in [transaction.ts:171](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L171)*

**Returns:** *string*

___

###  getTxStatus

▸ **getTxStatus**(): *[TxStatus](../enums/txstatus.md)*

*Inherited from [Transaction](transaction.md).[getTxStatus](transaction.md#gettxstatus)*

*Defined in [transaction.ts:269](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L269)*

**Returns:** *[TxStatus](../enums/txstatus.md)*

___

###  isConfirmed

▸ **isConfirmed**(): *boolean*

*Inherited from [Transaction](transaction.md).[isConfirmed](transaction.md#isconfirmed)*

*Defined in [transaction.ts:293](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L293)*

**Returns:** *boolean*

___

###  isCrossShard

▸ **isCrossShard**(): *boolean*

*Inherited from [Transaction](transaction.md).[isCrossShard](transaction.md#iscrossshard)*

*Defined in [transaction.ts:305](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L305)*

**Returns:** *boolean*

___

###  isCxConfirmed

▸ **isCxConfirmed**(): *boolean*

*Inherited from [Transaction](transaction.md).[isCxConfirmed](transaction.md#iscxconfirmed)*

*Defined in [transaction.ts:302](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L302)*

**Returns:** *boolean*

___

###  isCxPending

▸ **isCxPending**(): *boolean*

*Inherited from [Transaction](transaction.md).[isCxPending](transaction.md#iscxpending)*

*Defined in [transaction.ts:296](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L296)*

**Returns:** *boolean*

___

###  isCxRejected

▸ **isCxRejected**(): *boolean*

*Inherited from [Transaction](transaction.md).[isCxRejected](transaction.md#iscxrejected)*

*Defined in [transaction.ts:299](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L299)*

**Returns:** *boolean*

___

###  isInitialized

▸ **isInitialized**(): *boolean*

*Inherited from [Transaction](transaction.md).[isInitialized](transaction.md#isinitialized)*

*Defined in [transaction.ts:281](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L281)*

**Returns:** *boolean*

___

###  isPending

▸ **isPending**(): *boolean*

*Inherited from [Transaction](transaction.md).[isPending](transaction.md#ispending)*

*Defined in [transaction.ts:287](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L287)*

**Returns:** *boolean*

___

###  isRejected

▸ **isRejected**(): *boolean*

*Inherited from [Transaction](transaction.md).[isRejected](transaction.md#isrejected)*

*Defined in [transaction.ts:290](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L290)*

**Returns:** *boolean*

___

###  isSigned

▸ **isSigned**(): *boolean*

*Inherited from [Transaction](transaction.md).[isSigned](transaction.md#issigned)*

*Defined in [transaction.ts:284](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L284)*

**Returns:** *boolean*

___

###  map

▸ **map**(`fn`: any): *this*

*Inherited from [Transaction](transaction.md).[map](transaction.md#map)*

*Defined in [transaction.ts:258](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L258)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | any |

**Returns:** *this*

___

###  normalizeAddress

▸ **normalizeAddress**(`address`: string): *string*

*Inherited from [Transaction](transaction.md).[normalizeAddress](transaction.md#normalizeaddress)*

*Defined in [transaction.ts:716](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L716)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *string*

___

###  observed

▸ **observed**(): *Emitter*

*Inherited from [Transaction](transaction.md).[observed](transaction.md#observed)*

*Defined in [transaction.ts:309](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L309)*

**Returns:** *Emitter*

___

###  recover

▸ **recover**(`rawTransaction`: string): *[Transaction](transaction.md)*

*Inherited from [Transaction](transaction.md).[recover](transaction.md#recover)*

*Defined in [transaction.ts:175](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L175)*

**Parameters:**

Name | Type |
------ | ------ |
`rawTransaction` | string |

**Returns:** *[Transaction](transaction.md)*

___

###  sendTransaction

▸ **sendTransaction**(): *Promise‹[[Transaction](transaction.md), string]›*

*Inherited from [Transaction](transaction.md).[sendTransaction](transaction.md#sendtransaction)*

*Defined in [transaction.ts:313](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L313)*

**Returns:** *Promise‹[[Transaction](transaction.md), string]›*

___

###  setCxStatus

▸ **setCxStatus**(`cxStatus`: [TxStatus](../enums/txstatus.md)): *void*

*Inherited from [Transaction](transaction.md).[setCxStatus](transaction.md#setcxstatus)*

*Defined in [transaction.ts:272](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L272)*

**Parameters:**

Name | Type |
------ | ------ |
`cxStatus` | [TxStatus](../enums/txstatus.md) |

**Returns:** *void*

___

###  setMessenger

▸ **setMessenger**(`messenger`: Messenger): *void*

*Inherited from [Transaction](transaction.md).[setMessenger](transaction.md#setmessenger)*

*Defined in [transaction.ts:111](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L111)*

**Parameters:**

Name | Type |
------ | ------ |
`messenger` | Messenger |

**Returns:** *void*

___

###  setParams

▸ **setParams**(`params`: [TxParams](../interfaces/txparams.md)): *void*

*Inherited from [Transaction](transaction.md).[setParams](transaction.md#setparams)*

*Defined in [transaction.ts:218](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L218)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [TxParams](../interfaces/txparams.md) |

**Returns:** *void*

___

###  setTxStatus

▸ **setTxStatus**(`txStatus`: [TxStatus](../enums/txstatus.md)): *void*

*Inherited from [Transaction](transaction.md).[setTxStatus](transaction.md#settxstatus)*

*Defined in [transaction.ts:265](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L265)*

**Parameters:**

Name | Type |
------ | ------ |
`txStatus` | [TxStatus](../enums/txstatus.md) |

**Returns:** *void*

___

###  socketConfirm

▸ **socketConfirm**(`txHash`: string, `maxAttempts`: number, `shardID`: number | string): *Promise‹[Transaction](transaction.md)›*

*Inherited from [Transaction](transaction.md).[socketConfirm](transaction.md#socketconfirm)*

*Defined in [transaction.ts:462](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L462)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`txHash` | string | - |
`maxAttempts` | number | 20 |
`shardID` | number &#124; string |  this.shardID |

**Returns:** *Promise‹[Transaction](transaction.md)›*

___

###  socketCxConfirm

▸ **socketCxConfirm**(`txHash`: string, `maxAttempts`: number, `toShardID`: number | string): *Promise‹[Transaction](transaction.md)›*

*Inherited from [Transaction](transaction.md).[socketCxConfirm](transaction.md#socketcxconfirm)*

*Defined in [transaction.ts:668](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L668)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`txHash` | string | - |
`maxAttempts` | number | 20 |
`toShardID` | number &#124; string |  this.txParams.toShardID |

**Returns:** *Promise‹[Transaction](transaction.md)›*

___

###  trackCx

▸ **trackCx**(`txHash`: string, `toShardID`: number | string): *Promise‹boolean›*

*Inherited from [Transaction](transaction.md).[trackCx](transaction.md#trackcx)*

*Defined in [transaction.ts:643](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L643)*

**Parameters:**

Name | Type |
------ | ------ |
`txHash` | string |
`toShardID` | number &#124; string |

**Returns:** *Promise‹boolean›*

___

###  trackTx

▸ **trackTx**(`txHash`: string, `shardID`: number | string): *Promise‹boolean›*

*Inherited from [Transaction](transaction.md).[trackTx](transaction.md#tracktx)*

*Defined in [transaction.ts:348](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-transaction/src/transaction.ts#L348)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`txHash` | string | - |
`shardID` | number &#124; string |  this.shardID |

**Returns:** *Promise‹boolean›*
