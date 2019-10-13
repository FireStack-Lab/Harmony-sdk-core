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
* [cxBlockNumbers](transaction.md#cxblocknumbers)
* [cxConfirmationCheck](transaction.md#cxconfirmationcheck)
* [cxConfirmations](transaction.md#cxconfirmations)
* [cxStatus](transaction.md#cxstatus)
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
* [cxConfirm](transaction.md#cxconfirm)
* [emitConfirm](transaction.md#emitconfirm)
* [emitCxConfirm](transaction.md#emitcxconfirm)
* [emitCxReceipt](transaction.md#emitcxreceipt)
* [emitCxTrack](transaction.md#emitcxtrack)
* [emitError](transaction.md#emiterror)
* [emitReceipt](transaction.md#emitreceipt)
* [emitTrack](transaction.md#emittrack)
* [emitTransactionHash](transaction.md#emittransactionhash)
* [getBlockByNumber](transaction.md#getblockbynumber)
* [getBlockNumber](transaction.md#getblocknumber)
* [getCxStatus](transaction.md#getcxstatus)
* [getRLPSigned](transaction.md#getrlpsigned)
* [getRLPUnsigned](transaction.md#getrlpunsigned)
* [getRawTransaction](transaction.md#getrawtransaction)
* [getTxStatus](transaction.md#gettxstatus)
* [isConfirmed](transaction.md#isconfirmed)
* [isCrossShard](transaction.md#iscrossshard)
* [isCxConfirmed](transaction.md#iscxconfirmed)
* [isCxPending](transaction.md#iscxpending)
* [isCxRejected](transaction.md#iscxrejected)
* [isInitialized](transaction.md#isinitialized)
* [isPending](transaction.md#ispending)
* [isRejected](transaction.md#isrejected)
* [isSigned](transaction.md#issigned)
* [map](transaction.md#map)
* [normalizeAddress](transaction.md#normalizeaddress)
* [observed](transaction.md#observed)
* [recover](transaction.md#recover)
* [sendTransaction](transaction.md#sendtransaction)
* [setCxStatus](transaction.md#setcxstatus)
* [setMessenger](transaction.md#setmessenger)
* [setParams](transaction.md#setparams)
* [setTxStatus](transaction.md#settxstatus)
* [socketConfirm](transaction.md#socketconfirm)
* [socketCxConfirm](transaction.md#socketcxconfirm)
* [trackCx](transaction.md#trackcx)
* [trackTx](transaction.md#tracktx)

## Constructors

###  constructor

\+ **new Transaction**(`params?`: [TxParams](../interfaces/txparams.md) | any, `messenger`: Messenger, `txStatus`: [TxStatus](../enums/txstatus.md)): *[Transaction](transaction.md)*

*Defined in [transaction.ts:59](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L59)*

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

*Defined in [transaction.ts:37](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L37)*

___

### `Private` chainId

• **chainId**: *number*

*Defined in [transaction.ts:56](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L56)*

___

###  confirmationCheck

• **confirmationCheck**: *number* = 0

*Defined in [transaction.ts:39](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L39)*

___

###  confirmations

• **confirmations**: *number* = 0

*Defined in [transaction.ts:38](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L38)*

___

###  cxBlockNumbers

• **cxBlockNumbers**: *string[]* =  []

*Defined in [transaction.ts:41](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L41)*

___

###  cxConfirmationCheck

• **cxConfirmationCheck**: *number* = 0

*Defined in [transaction.ts:43](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L43)*

___

###  cxConfirmations

• **cxConfirmations**: *number* = 0

*Defined in [transaction.ts:42](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L42)*

___

###  cxStatus

• **cxStatus**: *[TxStatus](../enums/txstatus.md)* =  TxStatus.INTIALIZED

*Defined in [transaction.ts:40](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L40)*

___

### `Private` data

• **data**: *string*

*Defined in [transaction.ts:54](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L54)*

___

###  emitter

• **emitter**: *Emitter*

*Defined in [transaction.ts:34](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L34)*

___

### `Private` from

• **from**: *string*

*Defined in [transaction.ts:47](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L47)*

___

### `Private` gasLimit

• **gasLimit**: *BN*

*Defined in [transaction.ts:52](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L52)*

___

### `Private` gasPrice

• **gasPrice**: *BN*

*Defined in [transaction.ts:53](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L53)*

___

### `Private` id

• **id**: *string*

*Defined in [transaction.ts:46](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L46)*

___

###  messenger

• **messenger**: *Messenger*

*Defined in [transaction.ts:35](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L35)*

___

### `Private` nonce

• **nonce**: *number | string*

*Defined in [transaction.ts:48](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L48)*

___

### `Private` rawTransaction

• **rawTransaction**: *string*

*Defined in [transaction.ts:57](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L57)*

___

### `Optional` receipt

• **receipt**? : *[TransasctionReceipt](../interfaces/transasctionreceipt.md)*

*Defined in [transaction.ts:44](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L44)*

___

### `Private` shardID

• **shardID**: *number | string*

*Defined in [transaction.ts:50](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L50)*

___

### `Private` signature

• **signature**: *Signature*

*Defined in [transaction.ts:59](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L59)*

___

### `Private` to

• **to**: *string*

*Defined in [transaction.ts:49](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L49)*

___

### `Private` toShardID

• **toShardID**: *number | string*

*Defined in [transaction.ts:51](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L51)*

___

###  txStatus

• **txStatus**: *[TxStatus](../enums/txstatus.md)*

*Defined in [transaction.ts:36](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L36)*

___

### `Private` unsignedRawTransaction

• **unsignedRawTransaction**: *string*

*Defined in [transaction.ts:58](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L58)*

___

### `Private` value

• **value**: *BN*

*Defined in [transaction.ts:55](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L55)*

## Accessors

###  txParams

• **get txParams**(): *[TxParams](../interfaces/txparams.md)*

*Defined in [transaction.ts:200](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L200)*

**Returns:** *[TxParams](../interfaces/txparams.md)*

___

###  txPayload

• **get txPayload**(): *object*

*Defined in [transaction.ts:186](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L186)*

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

*Defined in [transaction.ts:396](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L396)*

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

*Defined in [transaction.ts:571](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L571)*

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

*Defined in [transaction.ts:520](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L520)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

###  emitCxConfirm

▸ **emitCxConfirm**(`data`: any): *void*

*Defined in [transaction.ts:529](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L529)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

###  emitCxReceipt

▸ **emitCxReceipt**(`receipt`: any): *void*

*Defined in [transaction.ts:526](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L526)*

**Parameters:**

Name | Type |
------ | ------ |
`receipt` | any |

**Returns:** *void*

___

###  emitCxTrack

▸ **emitCxTrack**(`data`: any): *void*

*Defined in [transaction.ts:532](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L532)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

###  emitError

▸ **emitError**(`error`: any): *void*

*Defined in [transaction.ts:517](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L517)*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |

**Returns:** *void*

___

###  emitReceipt

▸ **emitReceipt**(`receipt`: any): *void*

*Defined in [transaction.ts:514](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L514)*

**Parameters:**

Name | Type |
------ | ------ |
`receipt` | any |

**Returns:** *void*

___

###  emitTrack

▸ **emitTrack**(`data`: any): *void*

*Defined in [transaction.ts:523](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L523)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

###  emitTransactionHash

▸ **emitTransactionHash**(`transactionHash`: string): *void*

*Defined in [transaction.ts:511](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L511)*

**Parameters:**

Name | Type |
------ | ------ |
`transactionHash` | string |

**Returns:** *void*

___

###  getBlockByNumber

▸ **getBlockByNumber**(`blockNumber`: string): *Promise‹any›*

*Defined in [transaction.ts:552](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L552)*

**Parameters:**

Name | Type |
------ | ------ |
`blockNumber` | string |

**Returns:** *Promise‹any›*

___

###  getBlockNumber

▸ **getBlockNumber**(`shardID`: number | string): *Promise‹BN›*

*Defined in [transaction.ts:536](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L536)*

**Parameters:**

Name | Type |
------ | ------ |
`shardID` | number &#124; string |

**Returns:** *Promise‹BN›*

___

###  getCxStatus

▸ **getCxStatus**(): *[TxStatus](../enums/txstatus.md)*

*Defined in [transaction.ts:276](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L276)*

**Returns:** *[TxStatus](../enums/txstatus.md)*

___

###  getRLPSigned

▸ **getRLPSigned**(`raw`: any[], `signature`: Signature): *string*

*Defined in [transaction.ts:152](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L152)*

**Parameters:**

Name | Type |
------ | ------ |
`raw` | any[] |
`signature` | Signature |

**Returns:** *string*

___

###  getRLPUnsigned

▸ **getRLPUnsigned**(): *[string, any[]]*

*Defined in [transaction.ts:115](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L115)*

**Returns:** *[string, any[]]*

___

###  getRawTransaction

▸ **getRawTransaction**(): *string*

*Defined in [transaction.ts:171](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L171)*

**Returns:** *string*

___

###  getTxStatus

▸ **getTxStatus**(): *[TxStatus](../enums/txstatus.md)*

*Defined in [transaction.ts:269](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L269)*

**Returns:** *[TxStatus](../enums/txstatus.md)*

___

###  isConfirmed

▸ **isConfirmed**(): *boolean*

*Defined in [transaction.ts:293](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L293)*

**Returns:** *boolean*

___

###  isCrossShard

▸ **isCrossShard**(): *boolean*

*Defined in [transaction.ts:305](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L305)*

**Returns:** *boolean*

___

###  isCxConfirmed

▸ **isCxConfirmed**(): *boolean*

*Defined in [transaction.ts:302](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L302)*

**Returns:** *boolean*

___

###  isCxPending

▸ **isCxPending**(): *boolean*

*Defined in [transaction.ts:296](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L296)*

**Returns:** *boolean*

___

###  isCxRejected

▸ **isCxRejected**(): *boolean*

*Defined in [transaction.ts:299](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L299)*

**Returns:** *boolean*

___

###  isInitialized

▸ **isInitialized**(): *boolean*

*Defined in [transaction.ts:281](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L281)*

**Returns:** *boolean*

___

###  isPending

▸ **isPending**(): *boolean*

*Defined in [transaction.ts:287](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L287)*

**Returns:** *boolean*

___

###  isRejected

▸ **isRejected**(): *boolean*

*Defined in [transaction.ts:290](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L290)*

**Returns:** *boolean*

___

###  isSigned

▸ **isSigned**(): *boolean*

*Defined in [transaction.ts:284](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L284)*

**Returns:** *boolean*

___

###  map

▸ **map**(`fn`: any): *this*

*Defined in [transaction.ts:258](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L258)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | any |

**Returns:** *this*

___

###  normalizeAddress

▸ **normalizeAddress**(`address`: string): *string*

*Defined in [transaction.ts:714](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L714)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *string*

___

###  observed

▸ **observed**(): *Emitter*

*Defined in [transaction.ts:309](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L309)*

**Returns:** *Emitter*

___

###  recover

▸ **recover**(`rawTransaction`: string): *[Transaction](transaction.md)*

*Defined in [transaction.ts:175](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L175)*

**Parameters:**

Name | Type |
------ | ------ |
`rawTransaction` | string |

**Returns:** *[Transaction](transaction.md)*

___

###  sendTransaction

▸ **sendTransaction**(): *Promise‹[[Transaction](transaction.md), string]›*

*Defined in [transaction.ts:313](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L313)*

**Returns:** *Promise‹[[Transaction](transaction.md), string]›*

___

###  setCxStatus

▸ **setCxStatus**(`cxStatus`: [TxStatus](../enums/txstatus.md)): *void*

*Defined in [transaction.ts:272](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L272)*

**Parameters:**

Name | Type |
------ | ------ |
`cxStatus` | [TxStatus](../enums/txstatus.md) |

**Returns:** *void*

___

###  setMessenger

▸ **setMessenger**(`messenger`: Messenger): *void*

*Defined in [transaction.ts:111](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L111)*

**Parameters:**

Name | Type |
------ | ------ |
`messenger` | Messenger |

**Returns:** *void*

___

###  setParams

▸ **setParams**(`params`: [TxParams](../interfaces/txparams.md)): *void*

*Defined in [transaction.ts:218](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L218)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [TxParams](../interfaces/txparams.md) |

**Returns:** *void*

___

###  setTxStatus

▸ **setTxStatus**(`txStatus`: [TxStatus](../enums/txstatus.md)): *void*

*Defined in [transaction.ts:265](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L265)*

**Parameters:**

Name | Type |
------ | ------ |
`txStatus` | [TxStatus](../enums/txstatus.md) |

**Returns:** *void*

___

###  socketConfirm

▸ **socketConfirm**(`txHash`: string, `maxAttempts`: number, `shardID`: number | string): *Promise‹[Transaction](transaction.md)›*

*Defined in [transaction.ts:462](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L462)*

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

*Defined in [transaction.ts:666](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L666)*

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

*Defined in [transaction.ts:643](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L643)*

**Parameters:**

Name | Type |
------ | ------ |
`txHash` | string |
`toShardID` | number &#124; string |

**Returns:** *Promise‹boolean›*

___

###  trackTx

▸ **trackTx**(`txHash`: string, `shardID`: number | string): *Promise‹boolean›*

*Defined in [transaction.ts:348](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/transaction.ts#L348)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`txHash` | string | - |
`shardID` | number &#124; string |  this.shardID |

**Returns:** *Promise‹boolean›*
