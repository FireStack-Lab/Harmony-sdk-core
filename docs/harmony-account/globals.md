[@harmony-js/account](README.md) › [Globals](globals.md)

# @harmony-js/account

## Index

### Classes

* [Account](classes/account.md)
* [HDNode](classes/hdnode.md)
* [Wallet](classes/wallet.md)

### Interfaces

* [BalanceObject](interfaces/balanceobject.md)
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

*Defined in [types.ts:4](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-account/src/types.ts#L4)*

test type docs

___

###  Shards

Ƭ **Shards**: *Map‹[ShardID](globals.md#shardid), [BalanceObject](interfaces/balanceobject.md)›*

*Defined in [types.ts:10](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-account/src/types.ts#L10)*

## Variables

### `Const` defaultMessenger

• **defaultMessenger**: *Messenger* =  new Messenger(
  new HttpProvider('http://localhost:9500'),
  ChainType.Harmony,
  ChainID.HmyLocal,
)

*Defined in [utils.ts:4](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ffbbffb/packages/harmony-account/src/utils.ts#L4)*
