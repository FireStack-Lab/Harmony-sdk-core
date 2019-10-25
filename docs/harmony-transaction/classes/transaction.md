[@harmony-js/transaction](../globals.md) › [Transaction](transaction.md)

# Class: Transaction

## Hierarchy

* [TransactionBase](transactionbase.md)

  ↳ **Transaction**

  ↳ [ShardingTransaction](shardingtransaction.md)

## Implements

* [AbstractTransaction](abstracttransaction.md)

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
* [id](transaction.md#id)
* [messenger](transaction.md#messenger)
* [nonce](transaction.md#private-nonce)
* [rawTransaction](transaction.md#private-rawtransaction)
* [receipt](transaction.md#optional-receipt)
* [shardID](transaction.md#shardid)
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
* [txConfirm](transaction.md#txconfirm)
* [normalizeAddress](transaction.md#static-normalizeaddress)

## Constructors

###  constructor

\+ **new Transaction**(`params?`: [TxParams](../interfaces/txparams.md) | any, `messenger`: Messenger, `txStatus`: [TxStatus](../enums/txstatus.md)): *[Transaction](transaction.md)*

*Overrides [TransactionBase](transactionbase.md).[constructor](transactionbase.md#constructor)*

*Defined in [transaction.ts:36](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transaction.ts#L36)*

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

*Inherited from [TransactionBase](transactionbase.md).[blockNumbers](transactionbase.md#blocknumbers)*

*Defined in [transactionBase.ts:25](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L25)*

___

### `Private` chainId

• **chainId**: *number*

*Defined in [transaction.ts:33](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transaction.ts#L33)*

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

### `Private` data

• **data**: *string*

*Defined in [transaction.ts:31](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transaction.ts#L31)*

___

###  emitter

• **emitter**: *Emitter*

*Inherited from [TransactionBase](transactionbase.md).[emitter](transactionbase.md#emitter)*

*Defined in [transactionBase.ts:22](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L22)*

___

### `Private` from

• **from**: *string*

*Defined in [transaction.ts:24](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transaction.ts#L24)*

___

### `Private` gasLimit

• **gasLimit**: *BN*

*Defined in [transaction.ts:29](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transaction.ts#L29)*

___

### `Private` gasPrice

• **gasPrice**: *BN*

*Defined in [transaction.ts:30](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transaction.ts#L30)*

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

### `Private` nonce

• **nonce**: *number | string*

*Defined in [transaction.ts:25](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transaction.ts#L25)*

___

### `Private` rawTransaction

• **rawTransaction**: *string*

*Defined in [transaction.ts:34](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transaction.ts#L34)*

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

### `Private` signature

• **signature**: *Signature*

*Defined in [transaction.ts:36](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transaction.ts#L36)*

___

### `Private` to

• **to**: *string*

*Defined in [transaction.ts:26](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transaction.ts#L26)*

___

### `Private` toShardID

• **toShardID**: *number | string*

*Defined in [transaction.ts:28](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transaction.ts#L28)*

___

###  txStatus

• **txStatus**: *[TxStatus](../enums/txstatus.md)*

*Inherited from [TransactionBase](transactionbase.md).[txStatus](transactionbase.md#txstatus)*

*Defined in [transactionBase.ts:24](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transactionBase.ts#L24)*

___

### `Private` unsignedRawTransaction

• **unsignedRawTransaction**: *string*

*Defined in [transaction.ts:35](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transaction.ts#L35)*

___

### `Private` value

• **value**: *BN*

*Defined in [transaction.ts:32](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transaction.ts#L32)*

## Accessors

###  txParams

• **get txParams**(): *[TxParams](../interfaces/txparams.md)*

*Defined in [transaction.ts:170](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transaction.ts#L170)*

**Returns:** *[TxParams](../interfaces/txparams.md)*

___

###  txPayload

• **get txPayload**(): *object*

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

*Defined in [transaction.ts:85](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transaction.ts#L85)*

**Returns:** *[string, any[]]*

___

###  getRawTransaction

▸ **getRawTransaction**(): *string*

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

*Defined in [transaction.ts:145](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/transaction.ts#L145)*

**Parameters:**

Name | Type |
------ | ------ |
`rawTransaction` | string |

**Returns:** *[Transaction](transaction.md)*

___

###  sendTransaction

▸ **sendTransaction**(): *Promise‹[[Transaction](transaction.md), string]›*

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
