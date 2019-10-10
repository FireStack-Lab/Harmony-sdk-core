[@harmony-js/transaction](../globals.md) › [Transaction](transaction.md)

# Class: Transaction

## Hierarchy

* **Transaction**

  ↳ [ShardingTransaction](shardingtransaction.md)

## Index

### Constructors

* [constructor](transaction.md#constructor)

### Properties

* [blockNumbers](transaction.md#blocknumbers)
* [chainId](transaction.md#private-chainid)
* [confirmationCheck](transaction.md#confirmationcheck)
* [confirmations](transaction.md#confirmations)
* [data](transaction.md#private-data)
* [emitter](transaction.md#emitter)
* [from](transaction.md#private-from)
* [gasLimit](transaction.md#private-gaslimit)
* [gasPrice](transaction.md#private-gasprice)
* [id](transaction.md#private-id)
* [messenger](transaction.md#messenger)
* [nonce](transaction.md#private-nonce)
* [rawTransaction](transaction.md#private-rawtransaction)
* [receipt](transaction.md#optional-receipt)
* [shardID](transaction.md#private-shardid)
* [signature](transaction.md#private-signature)
* [to](transaction.md#private-to)
* [toShardID](transaction.md#private-toshardid)
* [txStatus](transaction.md#txstatus)
* [unsignedRawTransaction](transaction.md#private-unsignedrawtransaction)
* [value](transaction.md#private-value)

### Accessors

* [txParams](transaction.md#txparams)
* [txPayload](transaction.md#txpayload)

### Methods

* [confirm](transaction.md#confirm)
* [emitConfirm](transaction.md#emitconfirm)
* [emitError](transaction.md#emiterror)
* [emitReceipt](transaction.md#emitreceipt)
* [emitTrack](transaction.md#emittrack)
* [emitTransactionHash](transaction.md#emittransactionhash)
* [getBlockByNumber](transaction.md#getblockbynumber)
* [getBlockNumber](transaction.md#getblocknumber)
* [getRLPSigned](transaction.md#getrlpsigned)
* [getRLPUnsigned](transaction.md#getrlpunsigned)
* [getRawTransaction](transaction.md#getrawtransaction)
* [getTxStatus](transaction.md#gettxstatus)
* [isConfirmed](transaction.md#isconfirmed)
* [isInitialized](transaction.md#isinitialized)
* [isPending](transaction.md#ispending)
* [isRejected](transaction.md#isrejected)
* [isSigned](transaction.md#issigned)
* [map](transaction.md#map)
* [normalizeAddress](transaction.md#normalizeaddress)
* [observed](transaction.md#observed)
* [recover](transaction.md#recover)
* [sendTransaction](transaction.md#sendtransaction)
* [setMessenger](transaction.md#setmessenger)
* [setParams](transaction.md#setparams)
* [setTxStatus](transaction.md#settxstatus)
* [socketConfirm](transaction.md#socketconfirm)
* [trackTx](transaction.md#tracktx)

## Constructors

###  constructor

\+ **new Transaction**(`params?`: [TxParams](../interfaces/txparams.md) | any, `messenger`: Messenger, `txStatus`: [TxStatus](../enums/txstatus.md)): *[Transaction](transaction.md)*

*Defined in [transaction.ts:55](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L55)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`params?` | [TxParams](../interfaces/txparams.md) &#124; any | - |
`messenger` | Messenger |  defaultMessenger |
`txStatus` | [TxStatus](../enums/txstatus.md) |  TxStatus.INTIALIZED |

**Returns:** *[Transaction](transaction.md)*

## Properties

###  blockNumbers

• **blockNumbers**: *string[]* =  []

*Defined in [transaction.ts:37](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L37)*

___

### `Private` chainId

• **chainId**: *number*

*Defined in [transaction.ts:52](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L52)*

___

###  confirmationCheck

• **confirmationCheck**: *number* = 0

*Defined in [transaction.ts:39](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L39)*

___

###  confirmations

• **confirmations**: *number* = 0

*Defined in [transaction.ts:38](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L38)*

___

### `Private` data

• **data**: *string*

*Defined in [transaction.ts:50](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L50)*

___

###  emitter

• **emitter**: *Emitter*

*Defined in [transaction.ts:34](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L34)*

___

### `Private` from

• **from**: *string*

*Defined in [transaction.ts:43](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L43)*

___

### `Private` gasLimit

• **gasLimit**: *BN*

*Defined in [transaction.ts:48](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L48)*

___

### `Private` gasPrice

• **gasPrice**: *BN*

*Defined in [transaction.ts:49](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L49)*

___

### `Private` id

• **id**: *string*

*Defined in [transaction.ts:42](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L42)*

___

###  messenger

• **messenger**: *Messenger*

*Defined in [transaction.ts:35](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L35)*

___

### `Private` nonce

• **nonce**: *number | string*

*Defined in [transaction.ts:44](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L44)*

___

### `Private` rawTransaction

• **rawTransaction**: *string*

*Defined in [transaction.ts:53](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L53)*

___

### `Optional` receipt

• **receipt**? : *[TransasctionReceipt](../interfaces/transasctionreceipt.md)*

*Defined in [transaction.ts:40](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L40)*

___

### `Private` shardID

• **shardID**: *number | string*

*Defined in [transaction.ts:46](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L46)*

___

### `Private` signature

• **signature**: *Signature*

*Defined in [transaction.ts:55](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L55)*

___

### `Private` to

• **to**: *string*

*Defined in [transaction.ts:45](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L45)*

___

### `Private` toShardID

• **toShardID**: *number | string*

*Defined in [transaction.ts:47](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L47)*

___

###  txStatus

• **txStatus**: *[TxStatus](../enums/txstatus.md)*

*Defined in [transaction.ts:36](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L36)*

___

### `Private` unsignedRawTransaction

• **unsignedRawTransaction**: *string*

*Defined in [transaction.ts:54](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L54)*

___

### `Private` value

• **value**: *BN*

*Defined in [transaction.ts:51](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L51)*

## Accessors

###  txParams

• **get txParams**(): *[TxParams](../interfaces/txparams.md)*

*Defined in [transaction.ts:195](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L195)*

**Returns:** *[TxParams](../interfaces/txparams.md)*

___

###  txPayload

• **get txPayload**(): *object*

*Defined in [transaction.ts:181](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L181)*

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

*Defined in [transaction.ts:372](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L372)*

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

*Defined in [transaction.ts:496](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L496)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

###  emitError

▸ **emitError**(`error`: any): *void*

*Defined in [transaction.ts:493](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L493)*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |

**Returns:** *void*

___

###  emitReceipt

▸ **emitReceipt**(`receipt`: any): *void*

*Defined in [transaction.ts:490](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L490)*

**Parameters:**

Name | Type |
------ | ------ |
`receipt` | any |

**Returns:** *void*

___

###  emitTrack

▸ **emitTrack**(`data`: any): *void*

*Defined in [transaction.ts:499](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L499)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

###  emitTransactionHash

▸ **emitTransactionHash**(`transactionHash`: string): *void*

*Defined in [transaction.ts:487](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L487)*

**Parameters:**

Name | Type |
------ | ------ |
`transactionHash` | string |

**Returns:** *void*

___

###  getBlockByNumber

▸ **getBlockByNumber**(`blockNumber`: string): *Promise‹any›*

*Defined in [transaction.ts:521](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L521)*

**Parameters:**

Name | Type |
------ | ------ |
`blockNumber` | string |

**Returns:** *Promise‹any›*

___

###  getBlockNumber

▸ **getBlockNumber**(): *Promise‹BN›*

*Defined in [transaction.ts:503](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L503)*

**Returns:** *Promise‹BN›*

___

###  getRLPSigned

▸ **getRLPSigned**(`raw`: any[], `signature`: Signature): *string*

*Defined in [transaction.ts:147](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L147)*

**Parameters:**

Name | Type |
------ | ------ |
`raw` | any[] |
`signature` | Signature |

**Returns:** *string*

___

###  getRLPUnsigned

▸ **getRLPUnsigned**(): *[string, any[]]*

*Defined in [transaction.ts:110](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L110)*

**Returns:** *[string, any[]]*

___

###  getRawTransaction

▸ **getRawTransaction**(): *string*

*Defined in [transaction.ts:166](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L166)*

**Returns:** *string*

___

###  getTxStatus

▸ **getTxStatus**(): *[TxStatus](../enums/txstatus.md)*

*Defined in [transaction.ts:264](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L264)*

**Returns:** *[TxStatus](../enums/txstatus.md)*

___

###  isConfirmed

▸ **isConfirmed**(): *boolean*

*Defined in [transaction.ts:281](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L281)*

**Returns:** *boolean*

___

###  isInitialized

▸ **isInitialized**(): *boolean*

*Defined in [transaction.ts:269](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L269)*

**Returns:** *boolean*

___

###  isPending

▸ **isPending**(): *boolean*

*Defined in [transaction.ts:275](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L275)*

**Returns:** *boolean*

___

###  isRejected

▸ **isRejected**(): *boolean*

*Defined in [transaction.ts:278](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L278)*

**Returns:** *boolean*

___

###  isSigned

▸ **isSigned**(): *boolean*

*Defined in [transaction.ts:272](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L272)*

**Returns:** *boolean*

___

###  map

▸ **map**(`fn`: any): *this*

*Defined in [transaction.ts:253](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L253)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | any |

**Returns:** *this*

___

###  normalizeAddress

▸ **normalizeAddress**(`address`: string): *string*

*Defined in [transaction.ts:540](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L540)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *string*

___

###  observed

▸ **observed**(): *Emitter*

*Defined in [transaction.ts:285](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L285)*

**Returns:** *Emitter*

___

###  recover

▸ **recover**(`rawTransaction`: string): *[Transaction](transaction.md)*

*Defined in [transaction.ts:170](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L170)*

**Parameters:**

Name | Type |
------ | ------ |
`rawTransaction` | string |

**Returns:** *[Transaction](transaction.md)*

___

###  sendTransaction

▸ **sendTransaction**(): *Promise‹[[Transaction](transaction.md), string]›*

*Defined in [transaction.ts:289](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L289)*

**Returns:** *Promise‹[[Transaction](transaction.md), string]›*

___

###  setMessenger

▸ **setMessenger**(`messenger`: Messenger): *void*

*Defined in [transaction.ts:106](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`messenger` | Messenger |

**Returns:** *void*

___

###  setParams

▸ **setParams**(`params`: [TxParams](../interfaces/txparams.md)): *void*

*Defined in [transaction.ts:213](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L213)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [TxParams](../interfaces/txparams.md) |

**Returns:** *void*

___

###  setTxStatus

▸ **setTxStatus**(`txStatus`: [TxStatus](../enums/txstatus.md)): *void*

*Defined in [transaction.ts:260](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L260)*

**Parameters:**

Name | Type |
------ | ------ |
`txStatus` | [TxStatus](../enums/txstatus.md) |

**Returns:** *void*

___

###  socketConfirm

▸ **socketConfirm**(`txHash`: string, `maxAttempts`: number, `shardID`: number | string): *Promise‹[Transaction](transaction.md)›*

*Defined in [transaction.ts:438](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L438)*

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

*Defined in [transaction.ts:324](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-transaction/src/transaction.ts#L324)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`txHash` | string | - |
`shardID` | number &#124; string |  this.shardID |

**Returns:** *Promise‹boolean›*
