[@harmony-js/transaction](globals.md)

# @harmony-js/transaction

## Index

### Enumerations

* [TransactionEvents](enums/transactionevents.md)
* [TxStatus](enums/txstatus.md)

### Classes

* [ShardingTransaction](classes/shardingtransaction.md)
* [Transaction](classes/transaction.md)
* [TransactionFactory](classes/transactionfactory.md)

### Interfaces

* [TransasctionReceipt](interfaces/transasctionreceipt.md)
* [TxParams](interfaces/txparams.md)

### Variables

* [defaultMessenger](globals.md#const-defaultmessenger)
* [transactionFields](globals.md#const-transactionfields)
* [transactionFieldsETH](globals.md#const-transactionfieldseth)

### Functions

* [RLPSign](globals.md#const-rlpsign)
* [handleAddress](globals.md#const-handleaddress)
* [handleNumber](globals.md#const-handlenumber)
* [recover](globals.md#const-recover)
* [recoverETH](globals.md#const-recovereth)
* [sleep](globals.md#const-sleep)

## Variables

### `Const` defaultMessenger

• **defaultMessenger**: *Messenger* =  new Messenger(
  new HttpProvider('http://localhost:9500'),
  ChainType.Harmony,
)

*Defined in [utils.ts:256](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/utils.ts#L256)*

___

### `Const` transactionFields

• **transactionFields**: *object | object | object[]* =  [
  { name: 'nonce', length: 32, fix: false },
  { name: 'gasPrice', length: 32, fix: false, transform: 'hex' },
  { name: 'gasLimit', length: 32, fix: false, transform: 'hex' },
  { name: 'shardID', length: 16, fix: false },
  // recover it after main repo fix
  { name: 'toShardID', length: 16, fix: false },
  { name: 'to', length: 20, fix: true },
  { name: 'value', length: 32, fix: false, transform: 'hex' },
  { name: 'data', fix: false },
]

*Defined in [utils.ts:18](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/utils.ts#L18)*

___

### `Const` transactionFieldsETH

• **transactionFieldsETH**: *object | object | object[]* =  [
  { name: 'nonce', length: 32, fix: false },
  { name: 'gasPrice', length: 32, fix: false, transform: 'hex' },
  { name: 'gasLimit', length: 32, fix: false, transform: 'hex' },
  { name: 'to', length: 20, fix: true },
  { name: 'value', length: 32, fix: false, transform: 'hex' },
  { name: 'data', fix: false },
]

*Defined in [utils.ts:30](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/utils.ts#L30)*

## Functions

### `Const` RLPSign

▸ **RLPSign**(`transaction`: [Transaction](classes/transaction.md), `prv`: string): *[Signature, string]*

*Defined in [utils.ts:261](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/utils.ts#L261)*

**Parameters:**

Name | Type |
------ | ------ |
`transaction` | [Transaction](classes/transaction.md) |
`prv` | string |

**Returns:** *[Signature, string]*

___

### `Const` handleAddress

▸ **handleAddress**(`value`: string): *string*

*Defined in [utils.ts:49](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/utils.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *string*

___

### `Const` handleNumber

▸ **handleNumber**(`value`: string): *string*

*Defined in [utils.ts:39](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/utils.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *string*

___

### `Const` recover

▸ **recover**(`rawTransaction`: string): *[TxParams](interfaces/txparams.md)*

*Defined in [utils.ts:59](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/utils.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`rawTransaction` | string |

**Returns:** *[TxParams](interfaces/txparams.md)*

___

### `Const` recoverETH

▸ **recoverETH**(`rawTransaction`: string): *[TxParams](interfaces/txparams.md)*

*Defined in [utils.ts:149](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/utils.ts#L149)*

**Parameters:**

Name | Type |
------ | ------ |
`rawTransaction` | string |

**Returns:** *[TxParams](interfaces/txparams.md)*

___

### `Const` sleep

▸ **sleep**(`ms`: number): *Promise‹unknown›*

*Defined in [utils.ts:240](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-transaction/src/utils.ts#L240)*

**Parameters:**

Name | Type |
------ | ------ |
`ms` | number |

**Returns:** *Promise‹unknown›*
