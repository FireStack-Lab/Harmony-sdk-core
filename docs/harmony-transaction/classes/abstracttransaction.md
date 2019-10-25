[@harmony-js/transaction](../globals.md) › [AbstractTransaction](abstracttransaction.md)

# Class: AbstractTransaction

## Hierarchy

* **AbstractTransaction**

## Implemented by

* [ShardingTransaction](shardingtransaction.md)
* [Transaction](transaction.md)
* [TransactionBase](transactionbase.md)

## Index

### Methods

* [getBlockByNumber](abstracttransaction.md#abstract-getblockbynumber)
* [getBlockNumber](abstracttransaction.md#abstract-getblocknumber)
* [getTxStatus](abstracttransaction.md#abstract-gettxstatus)
* [isConfirmed](abstracttransaction.md#abstract-isconfirmed)
* [isInitialized](abstracttransaction.md#abstract-isinitialized)
* [isPending](abstracttransaction.md#abstract-ispending)
* [isRejected](abstracttransaction.md#abstract-isrejected)
* [isSigned](abstracttransaction.md#abstract-issigned)
* [setMessenger](abstracttransaction.md#abstract-setmessenger)
* [setTxStatus](abstracttransaction.md#abstract-settxstatus)
* [socketConfirm](abstracttransaction.md#abstract-socketconfirm)
* [trackTx](abstracttransaction.md#abstract-tracktx)
* [txConfirm](abstracttransaction.md#abstract-txconfirm)

## Methods

### `Abstract` getBlockByNumber

▸ **getBlockByNumber**(`blockNumber`: string): *Promise‹any›*

*Defined in [abstractTransaction.ts:26](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/abstractTransaction.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`blockNumber` | string |

**Returns:** *Promise‹any›*

___

### `Abstract` getBlockNumber

▸ **getBlockNumber**(`shardID`: number | string): *Promise‹any›*

*Defined in [abstractTransaction.ts:25](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/abstractTransaction.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`shardID` | number &#124; string |

**Returns:** *Promise‹any›*

___

### `Abstract` getTxStatus

▸ **getTxStatus**(): *[TxStatus](../enums/txstatus.md)*

*Defined in [abstractTransaction.ts:7](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/abstractTransaction.ts#L7)*

**Returns:** *[TxStatus](../enums/txstatus.md)*

___

### `Abstract` isConfirmed

▸ **isConfirmed**(): *boolean*

*Defined in [abstractTransaction.ts:12](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/abstractTransaction.ts#L12)*

**Returns:** *boolean*

___

### `Abstract` isInitialized

▸ **isInitialized**(): *boolean*

*Defined in [abstractTransaction.ts:8](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/abstractTransaction.ts#L8)*

**Returns:** *boolean*

___

### `Abstract` isPending

▸ **isPending**(): *boolean*

*Defined in [abstractTransaction.ts:10](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/abstractTransaction.ts#L10)*

**Returns:** *boolean*

___

### `Abstract` isRejected

▸ **isRejected**(): *boolean*

*Defined in [abstractTransaction.ts:11](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/abstractTransaction.ts#L11)*

**Returns:** *boolean*

___

### `Abstract` isSigned

▸ **isSigned**(): *boolean*

*Defined in [abstractTransaction.ts:9](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/abstractTransaction.ts#L9)*

**Returns:** *boolean*

___

### `Abstract` setMessenger

▸ **setMessenger**(`messenger`: Messenger): *void*

*Defined in [abstractTransaction.ts:5](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/abstractTransaction.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`messenger` | Messenger |

**Returns:** *void*

___

### `Abstract` setTxStatus

▸ **setTxStatus**(`txStatus`: [TxStatus](../enums/txstatus.md)): *void*

*Defined in [abstractTransaction.ts:6](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/abstractTransaction.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`txStatus` | [TxStatus](../enums/txstatus.md) |

**Returns:** *void*

___

### `Abstract` socketConfirm

▸ **socketConfirm**(`txHash`: string, `maxAttempts`: number, `shardID`: number | string): *Promise‹any›*

*Defined in [abstractTransaction.ts:20](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/abstractTransaction.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`txHash` | string |
`maxAttempts` | number |
`shardID` | number &#124; string |

**Returns:** *Promise‹any›*

___

### `Abstract` trackTx

▸ **trackTx**(`txHash`: string, `shardID`: number | string): *Promise‹boolean›*

*Defined in [abstractTransaction.ts:13](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/abstractTransaction.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`txHash` | string |
`shardID` | number &#124; string |

**Returns:** *Promise‹boolean›*

___

### `Abstract` txConfirm

▸ **txConfirm**(`txHash`: string, `maxAttempts`: number | undefined, `interval`: number | undefined, `shardID`: string | number): *Promise‹any›*

*Defined in [abstractTransaction.ts:14](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-transaction/src/abstractTransaction.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`txHash` | string |
`maxAttempts` | number &#124; undefined |
`interval` | number &#124; undefined |
`shardID` | string &#124; number |

**Returns:** *Promise‹any›*
