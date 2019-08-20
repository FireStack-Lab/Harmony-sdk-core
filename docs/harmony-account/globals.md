**[@harmony-js/account](README.md)**

[Globals](globals.md)

# @harmony-js/account

## Index

### Classes

* [Account](classes/account.md)
* [HDNode](classes/hdnode.md)
* [Wallet](classes/wallet.md)

### Interfaces

* [WalletsInterfaces](interfaces/walletsinterfaces.md)
* [Web3TxPrams](interfaces/web3txprams.md)

### Type aliases

* [ShardID](globals.md#shardid)
* [Shards](globals.md#shards)

### Variables

* [defaultMessenger](globals.md#const-defaultmessenger)

## Type aliases

###  ShardID

Ƭ **ShardID**: *string | number*

*Defined in [types.ts:4](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/17ca408/packages/harmony-account/src/types.ts#L4)*

test type docs

___

###  Shards

Ƭ **Shards**: *Map‹[ShardID](globals.md#shardid), string›*

*Defined in [types.ts:5](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/17ca408/packages/harmony-account/src/types.ts#L5)*

## Variables

### `Const` defaultMessenger

• **defaultMessenger**: *Messenger* =  new Messenger(
  new HttpProvider('http://localhost:8545'),
  ChainType.Harmony,
)

*Defined in [utils.ts:4](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/17ca408/packages/harmony-account/src/utils.ts#L4)*