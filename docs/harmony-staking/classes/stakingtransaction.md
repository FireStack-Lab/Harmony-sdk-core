[@harmony-js/staking](../globals.md) › [StakingTransaction](stakingtransaction.md)

# Class: StakingTransaction

## Hierarchy

* TransactionBase

  ↳ **StakingTransaction**

## Implements

* AbstractTransaction

## Index

### Constructors

* [constructor](stakingtransaction.md#constructor)

### Properties

* [blockNumbers](stakingtransaction.md#blocknumbers)
* [chainId](stakingtransaction.md#private-chainid)
* [confirmationCheck](stakingtransaction.md#confirmationcheck)
* [confirmations](stakingtransaction.md#confirmations)
* [cxBlockNumbers](stakingtransaction.md#cxblocknumbers)
* [cxConfirmationCheck](stakingtransaction.md#cxconfirmationcheck)
* [cxConfirmations](stakingtransaction.md#cxconfirmations)
* [cxStatus](stakingtransaction.md#cxstatus)
* [directive](stakingtransaction.md#private-directive)
* [emitter](stakingtransaction.md#emitter)
* [from](stakingtransaction.md#private-from)
* [gasLimit](stakingtransaction.md#private-gaslimit)
* [gasPrice](stakingtransaction.md#private-gasprice)
* [id](stakingtransaction.md#id)
* [messenger](stakingtransaction.md#messenger)
* [nonce](stakingtransaction.md#private-nonce)
* [rawTransaction](stakingtransaction.md#private-rawtransaction)
* [receipt](stakingtransaction.md#optional-receipt)
* [shardID](stakingtransaction.md#shardid)
* [signature](stakingtransaction.md#private-signature)
* [stakeMsg](stakingtransaction.md#private-stakemsg)
* [txStatus](stakingtransaction.md#txstatus)
* [unsignedRawTransaction](stakingtransaction.md#private-unsignedrawtransaction)

### Methods

* [confirm](stakingtransaction.md#confirm)
* [cxConfirm](stakingtransaction.md#cxconfirm)
* [emitConfirm](stakingtransaction.md#emitconfirm)
* [emitCxConfirm](stakingtransaction.md#emitcxconfirm)
* [emitCxReceipt](stakingtransaction.md#emitcxreceipt)
* [emitCxTrack](stakingtransaction.md#emitcxtrack)
* [emitError](stakingtransaction.md#emiterror)
* [emitReceipt](stakingtransaction.md#emitreceipt)
* [emitTrack](stakingtransaction.md#emittrack)
* [emitTransactionHash](stakingtransaction.md#emittransactionhash)
* [encode](stakingtransaction.md#encode)
* [getBlockByNumber](stakingtransaction.md#getblockbynumber)
* [getBlockNumber](stakingtransaction.md#getblocknumber)
* [getCxStatus](stakingtransaction.md#getcxstatus)
* [getFromAddress](stakingtransaction.md#getfromaddress)
* [getRLPSigned](stakingtransaction.md#getrlpsigned)
* [getRawTransaction](stakingtransaction.md#getrawtransaction)
* [getSignature](stakingtransaction.md#getsignature)
* [getTxStatus](stakingtransaction.md#gettxstatus)
* [getUnsignedRawTransaction](stakingtransaction.md#getunsignedrawtransaction)
* [isConfirmed](stakingtransaction.md#isconfirmed)
* [isCxConfirmed](stakingtransaction.md#iscxconfirmed)
* [isCxPending](stakingtransaction.md#iscxpending)
* [isCxRejected](stakingtransaction.md#iscxrejected)
* [isInitialized](stakingtransaction.md#isinitialized)
* [isPending](stakingtransaction.md#ispending)
* [isRejected](stakingtransaction.md#isrejected)
* [isSigned](stakingtransaction.md#issigned)
* [observed](stakingtransaction.md#observed)
* [rlpSign](stakingtransaction.md#rlpsign)
* [sendTransaction](stakingtransaction.md#sendtransaction)
* [setCxStatus](stakingtransaction.md#setcxstatus)
* [setFromAddress](stakingtransaction.md#setfromaddress)
* [setMessenger](stakingtransaction.md#setmessenger)
* [setNonce](stakingtransaction.md#setnonce)
* [setRawTransaction](stakingtransaction.md#setrawtransaction)
* [setSignature](stakingtransaction.md#setsignature)
* [setTxStatus](stakingtransaction.md#settxstatus)
* [setUnsigned](stakingtransaction.md#setunsigned)
* [socketConfirm](stakingtransaction.md#socketconfirm)
* [socketCxConfirm](stakingtransaction.md#socketcxconfirm)
* [trackCx](stakingtransaction.md#trackcx)
* [trackTx](stakingtransaction.md#tracktx)
* [txConfirm](stakingtransaction.md#txconfirm)
* [normalizeAddress](stakingtransaction.md#static-normalizeaddress)

## Constructors

###  constructor

\+ **new StakingTransaction**(`directive`: [Directive](../enums/directive.md), `stakeMsg`: [NewValidator](newvalidator.md) | [EditValidator](editvalidator.md) | [Delegate](delegate.md) | [Redelegate](redelegate.md) | [Undelegate](undelegate.md), `nonce`: number | string, `gasPrice`: number | string, `gasLimit`: number | string, `chainID`: number, `v`: number, `r`: string, `s`: string, `messenger`: Messenger, `txStatus`: TxStatus): *[StakingTransaction](stakingtransaction.md)*

*Overrides void*

*Defined in [stakingTransaction.ts:41](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L41)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`directive` | [Directive](../enums/directive.md) | - |
`stakeMsg` | [NewValidator](newvalidator.md) &#124; [EditValidator](editvalidator.md) &#124; [Delegate](delegate.md) &#124; [Redelegate](redelegate.md) &#124; [Undelegate](undelegate.md) | - |
`nonce` | number &#124; string | - |
`gasPrice` | number &#124; string | - |
`gasLimit` | number &#124; string | - |
`chainID` | number | - |
`v` | number | - |
`r` | string | - |
`s` | string | - |
`messenger` | Messenger |  defaultMessenger |
`txStatus` | TxStatus |  TxStatus.INTIALIZED |

**Returns:** *[StakingTransaction](stakingtransaction.md)*

## Properties

###  blockNumbers

• **blockNumbers**: *string[]*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:11

___

### `Private` chainId

• **chainId**: *number*

*Defined in [stakingTransaction.ts:37](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L37)*

___

###  confirmationCheck

• **confirmationCheck**: *number*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:13

___

###  confirmations

• **confirmations**: *number*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:12

___

###  cxBlockNumbers

• **cxBlockNumbers**: *string[]*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:15

___

###  cxConfirmationCheck

• **cxConfirmationCheck**: *number*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:17

___

###  cxConfirmations

• **cxConfirmations**: *number*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:16

___

###  cxStatus

• **cxStatus**: *TxStatus*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:14

___

### `Private` directive

• **directive**: *[Directive](../enums/directive.md)*

*Defined in [stakingTransaction.ts:32](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L32)*

___

###  emitter

• **emitter**: *Emitter*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:8

___

### `Private` from

• **from**: *string*

*Defined in [stakingTransaction.ts:41](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L41)*

___

### `Private` gasLimit

• **gasLimit**: *number | string*

*Defined in [stakingTransaction.ts:35](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L35)*

___

### `Private` gasPrice

• **gasPrice**: *number | string*

*Defined in [stakingTransaction.ts:36](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L36)*

___

###  id

• **id**: *string*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:19

___

###  messenger

• **messenger**: *Messenger*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:9

___

### `Private` nonce

• **nonce**: *number | string*

*Defined in [stakingTransaction.ts:34](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L34)*

___

### `Private` rawTransaction

• **rawTransaction**: *string*

*Defined in [stakingTransaction.ts:38](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L38)*

___

### `Optional` receipt

• **receipt**? : *TransasctionReceipt*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:18

___

###  shardID

• **shardID**: *number | string*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:20

___

### `Private` signature

• **signature**: *Signature*

*Defined in [stakingTransaction.ts:40](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L40)*

___

### `Private` stakeMsg

• **stakeMsg**: *[NewValidator](newvalidator.md) | [EditValidator](editvalidator.md) | [Delegate](delegate.md) | [Redelegate](redelegate.md) | [Undelegate](undelegate.md)*

*Defined in [stakingTransaction.ts:33](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L33)*

___

###  txStatus

• **txStatus**: *TxStatus*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:10

___

### `Private` unsignedRawTransaction

• **unsignedRawTransaction**: *string*

*Defined in [stakingTransaction.ts:39](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L39)*

## Methods

###  confirm

▸ **confirm**(`txHash`: string, `maxAttempts`: number, `interval`: number, `shardID`: number | string, `toShardID`: number | string): *Promise‹TransactionBase›*

*Defined in [stakingTransaction.ts:182](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L182)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`txHash` | string | - |
`maxAttempts` | number | 20 |
`interval` | number | 1000 |
`shardID` | number &#124; string |  this.messenger.currentShard |
`toShardID` | number &#124; string | 0 |

**Returns:** *Promise‹TransactionBase›*

___

###  cxConfirm

▸ **cxConfirm**(`txHash`: string, `maxAttempts`: number | undefined, `interval`: number | undefined, `toShardID`: number | string): *Promise‹TransactionBase›*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:49

**Parameters:**

Name | Type |
------ | ------ |
`txHash` | string |
`maxAttempts` | number &#124; undefined |
`interval` | number &#124; undefined |
`toShardID` | number &#124; string |

**Returns:** *Promise‹TransactionBase›*

___

###  emitConfirm

▸ **emitConfirm**(`data`: any): *void*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:42

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

###  emitCxConfirm

▸ **emitCxConfirm**(`data`: any): *void*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:45

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

###  emitCxReceipt

▸ **emitCxReceipt**(`receipt`: any): *void*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:44

**Parameters:**

Name | Type |
------ | ------ |
`receipt` | any |

**Returns:** *void*

___

###  emitCxTrack

▸ **emitCxTrack**(`data`: any): *void*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:46

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

###  emitError

▸ **emitError**(`error`: any): *void*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:41

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |

**Returns:** *void*

___

###  emitReceipt

▸ **emitReceipt**(`receipt`: any): *void*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:40

**Parameters:**

Name | Type |
------ | ------ |
`receipt` | any |

**Returns:** *void*

___

###  emitTrack

▸ **emitTrack**(`data`: any): *void*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:43

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

###  emitTransactionHash

▸ **emitTransactionHash**(`transactionHash`: string): *void*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:39

**Parameters:**

Name | Type |
------ | ------ |
`transactionHash` | string |

**Returns:** *void*

___

###  encode

▸ **encode**(): *[string, any[]]*

*Defined in [stakingTransaction.ts:75](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L75)*

**Returns:** *[string, any[]]*

___

###  getBlockByNumber

▸ **getBlockByNumber**(`blockNumber`: string): *Promise‹any›*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:48

**Parameters:**

Name | Type |
------ | ------ |
`blockNumber` | string |

**Returns:** *Promise‹any›*

___

###  getBlockNumber

▸ **getBlockNumber**(`shardID`: number | string): *Promise‹BN›*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:47

**Parameters:**

Name | Type |
------ | ------ |
`shardID` | number &#124; string |

**Returns:** *Promise‹BN›*

___

###  getCxStatus

▸ **getCxStatus**(): *TxStatus*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:26

**Returns:** *TxStatus*

___

###  getFromAddress

▸ **getFromAddress**(): *string*

*Defined in [stakingTransaction.ts:179](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L179)*

**Returns:** *string*

___

###  getRLPSigned

▸ **getRLPSigned**(`raw`: any[], `signature`: Signature): *string*

*Defined in [stakingTransaction.ts:103](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`raw` | any[] |
`signature` | Signature |

**Returns:** *string*

___

###  getRawTransaction

▸ **getRawTransaction**(): *string*

*Defined in [stakingTransaction.ts:172](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L172)*

**Returns:** *string*

___

###  getSignature

▸ **getSignature**(): *Signature*

*Defined in [stakingTransaction.ts:175](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L175)*

**Returns:** *Signature*

___

###  getTxStatus

▸ **getTxStatus**(): *TxStatus*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:24

**Returns:** *TxStatus*

___

###  getUnsignedRawTransaction

▸ **getUnsignedRawTransaction**(): *string*

*Defined in [stakingTransaction.ts:169](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L169)*

**Returns:** *string*

___

###  isConfirmed

▸ **isConfirmed**(): *boolean*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:31

**Returns:** *boolean*

___

###  isCxConfirmed

▸ **isCxConfirmed**(): *boolean*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:34

**Returns:** *boolean*

___

###  isCxPending

▸ **isCxPending**(): *boolean*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:32

**Returns:** *boolean*

___

###  isCxRejected

▸ **isCxRejected**(): *boolean*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:33

**Returns:** *boolean*

___

###  isInitialized

▸ **isInitialized**(): *boolean*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:27

**Returns:** *boolean*

___

###  isPending

▸ **isPending**(): *boolean*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:29

**Returns:** *boolean*

___

###  isRejected

▸ **isRejected**(): *boolean*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:30

**Returns:** *boolean*

___

###  isSigned

▸ **isSigned**(): *boolean*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:28

**Returns:** *boolean*

___

###  observed

▸ **observed**(): *Emitter*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:35

**Returns:** *Emitter*

___

###  rlpSign

▸ **rlpSign**(`prv`: string): *[Signature, string]*

*Defined in [stakingTransaction.ts:95](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`prv` | string |

**Returns:** *[Signature, string]*

___

###  sendTransaction

▸ **sendTransaction**(): *Promise‹[[StakingTransaction](stakingtransaction.md), string]›*

*Defined in [stakingTransaction.ts:118](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L118)*

**Returns:** *Promise‹[[StakingTransaction](stakingtransaction.md), string]›*

___

###  setCxStatus

▸ **setCxStatus**(`cxStatus`: TxStatus): *void*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`cxStatus` | TxStatus |

**Returns:** *void*

___

###  setFromAddress

▸ **setFromAddress**(`address`: string): *void*

*Defined in [stakingTransaction.ts:166](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L166)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *void*

___

###  setMessenger

▸ **setMessenger**(`messenger`: Messenger): *void*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:22

**Parameters:**

Name | Type |
------ | ------ |
`messenger` | Messenger |

**Returns:** *void*

___

###  setNonce

▸ **setNonce**(`nonce`: number): *void*

*Defined in [stakingTransaction.ts:163](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L163)*

**Parameters:**

Name | Type |
------ | ------ |
`nonce` | number |

**Returns:** *void*

___

###  setRawTransaction

▸ **setRawTransaction**(`rawTransaction`: string): *void*

*Defined in [stakingTransaction.ts:152](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L152)*

**Parameters:**

Name | Type |
------ | ------ |
`rawTransaction` | string |

**Returns:** *void*

___

###  setSignature

▸ **setSignature**(`signature`: Signature): *void*

*Defined in [stakingTransaction.ts:155](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L155)*

**Parameters:**

Name | Type |
------ | ------ |
`signature` | Signature |

**Returns:** *void*

___

###  setTxStatus

▸ **setTxStatus**(`txStatus`: TxStatus): *void*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`txStatus` | TxStatus |

**Returns:** *void*

___

###  setUnsigned

▸ **setUnsigned**(`unSigned`: string): *void*

*Defined in [stakingTransaction.ts:149](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L149)*

**Parameters:**

Name | Type |
------ | ------ |
`unSigned` | string |

**Returns:** *void*

___

###  socketConfirm

▸ **socketConfirm**(`txHash`: string, `maxAttempts`: number | undefined, `shardID`: number | string): *Promise‹TransactionBase›*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:38

**Parameters:**

Name | Type |
------ | ------ |
`txHash` | string |
`maxAttempts` | number &#124; undefined |
`shardID` | number &#124; string |

**Returns:** *Promise‹TransactionBase›*

___

###  socketCxConfirm

▸ **socketCxConfirm**(`txHash`: string, `maxAttempts`: number | undefined, `toShardID`: number | string): *Promise‹TransactionBase›*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:51

**Parameters:**

Name | Type |
------ | ------ |
`txHash` | string |
`maxAttempts` | number &#124; undefined |
`toShardID` | number &#124; string |

**Returns:** *Promise‹TransactionBase›*

___

###  trackCx

▸ **trackCx**(`txHash`: string, `toShardID`: number | string): *Promise‹boolean›*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:50

**Parameters:**

Name | Type |
------ | ------ |
`txHash` | string |
`toShardID` | number &#124; string |

**Returns:** *Promise‹boolean›*

___

###  trackTx

▸ **trackTx**(`txHash`: string, `shardID`: number | string): *Promise‹boolean›*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:36

**Parameters:**

Name | Type |
------ | ------ |
`txHash` | string |
`shardID` | number &#124; string |

**Returns:** *Promise‹boolean›*

___

###  txConfirm

▸ **txConfirm**(`txHash`: string, `maxAttempts`: number | undefined, `interval`: number | undefined, `shardID`: number | string): *Promise‹TransactionBase›*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:37

**Parameters:**

Name | Type |
------ | ------ |
`txHash` | string |
`maxAttempts` | number &#124; undefined |
`interval` | number &#124; undefined |
`shardID` | number &#124; string |

**Returns:** *Promise‹TransactionBase›*

___

### `Static` normalizeAddress

▸ **normalizeAddress**(`address`: string): *string*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-transaction/dist/transactionBase.d.ts:7

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *string*
