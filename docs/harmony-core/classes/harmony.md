[@harmony-js/core](../globals.md) › [Harmony](harmony.md)

# Class: Harmony

## Hierarchy

* HarmonyCore

  ↳ **Harmony**

## Index

### Constructors

* [constructor](harmony.md#constructor)

### Properties

* [blockchain](harmony.md#blockchain)
* [chainId](harmony.md#chainid)
* [chainPrefix](harmony.md#chainprefix)
* [chainType](harmony.md#chaintype)
* [contracts](harmony.md#contracts)
* [crypto](harmony.md#crypto)
* [defaultShardID](harmony.md#optional-defaultshardid)
* [getChainId](harmony.md#getchainid)
* [messenger](harmony.md#messenger)
* [provider](harmony.md#private-provider)
* [transactions](harmony.md#transactions)
* [utils](harmony.md#utils)
* [wallet](harmony.md#wallet)

### Methods

* [setChainId](harmony.md#setchainid)
* [setChainType](harmony.md#setchaintype)
* [setMessenger](harmony.md#private-setmessenger)
* [setProvider](harmony.md#setprovider)
* [setShardID](harmony.md#setshardid)
* [shardingStructures](harmony.md#shardingstructures)

### Object literals

* [Modules](harmony.md#modules)

## Constructors

###  constructor

\+ **new Harmony**(`url`: string, `config`: [HarmonyConfig](../interfaces/harmonyconfig.md)): *[Harmony](harmony.md)*

*Overrides void*

*Defined in [harmony.ts:31](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-core/src/harmony.ts#L31)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`url` | string | - |
`config` | [HarmonyConfig](../interfaces/harmonyconfig.md) |  {
      chainId: utils.defaultConfig.Default.Chain_ID,
      chainType: utils.defaultConfig.Default.Chain_Type,
    } |

**Returns:** *[Harmony](harmony.md)*

## Properties

###  blockchain

• **blockchain**: *[Blockchain](blockchain.md)*

*Defined in [harmony.ts:26](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-core/src/harmony.ts#L26)*

___

###  chainId

• **chainId**: *ChainID*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-utils/dist/chain.d.ts:39

___

###  chainPrefix

• **chainPrefix**: *string*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-utils/dist/chain.d.ts:41

___

###  chainType

• **chainType**: *ChainType*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-utils/dist/chain.d.ts:38

___

###  contracts

• **contracts**: *ContractFactory*

*Defined in [harmony.ts:27](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-core/src/harmony.ts#L27)*

___

###  crypto

• **crypto**: *any*

*Defined in [harmony.ts:28](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-core/src/harmony.ts#L28)*

___

### `Optional` defaultShardID

• **defaultShardID**? : *undefined | number*

*Defined in [harmony.ts:30](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-core/src/harmony.ts#L30)*

___

###  getChainId

• **getChainId**: *ChainID*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-utils/dist/chain.d.ts:42

___

###  messenger

• **messenger**: *Messenger*

*Defined in [harmony.ts:23](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-core/src/harmony.ts#L23)*

___

### `Private` provider

• **provider**: *HttpProvider | WSProvider*

*Defined in [harmony.ts:31](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-core/src/harmony.ts#L31)*

___

###  transactions

• **transactions**: *TransactionFactory*

*Defined in [harmony.ts:24](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-core/src/harmony.ts#L24)*

___

###  utils

• **utils**: *any*

*Defined in [harmony.ts:29](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-core/src/harmony.ts#L29)*

___

###  wallet

• **wallet**: *Wallet*

*Defined in [harmony.ts:25](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-core/src/harmony.ts#L25)*

## Methods

###  setChainId

▸ **setChainId**(`chainId`: ChainID): *void*

*Overrides void*

*Defined in [harmony.ts:63](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-core/src/harmony.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`chainId` | ChainID |

**Returns:** *void*

___

###  setChainType

▸ **setChainType**(`chainType`: ChainType): *void*

*Overrides void*

*Defined in [harmony.ts:73](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-core/src/harmony.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`chainType` | ChainType |

**Returns:** *void*

___

### `Private` setMessenger

▸ **setMessenger**(`messenger`: Messenger): *void*

*Defined in [harmony.ts:92](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-core/src/harmony.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`messenger` | Messenger |

**Returns:** *void*

___

###  setProvider

▸ **setProvider**(`provider`: string | HttpProvider | WSProvider): *void*

*Defined in [harmony.ts:57](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-core/src/harmony.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`provider` | string &#124; HttpProvider &#124; WSProvider |

**Returns:** *void*

___

###  setShardID

▸ **setShardID**(`shardID`: number): *void*

*Defined in [harmony.ts:68](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-core/src/harmony.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`shardID` | number |

**Returns:** *void*

___

###  shardingStructures

▸ **shardingStructures**(`shardingStructures`: ShardingItem[]): *void*

*Defined in [harmony.ts:79](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-core/src/harmony.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`shardingStructures` | ShardingItem[] |

**Returns:** *void*

## Object literals

###  Modules

### ▪ **Modules**: *object*

*Defined in [harmony.ts:12](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-core/src/harmony.ts#L12)*

###  Account

• **Account**: *Account*

*Defined in [harmony.ts:20](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-core/src/harmony.ts#L20)*

###  Blockchain

• **Blockchain**: *[Blockchain](blockchain.md)*

*Defined in [harmony.ts:16](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-core/src/harmony.ts#L16)*

###  Contract

• **Contract**: *Contract*

*Defined in [harmony.ts:21](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-core/src/harmony.ts#L21)*

###  HttpProvider

• **HttpProvider**: *HttpProvider*

*Defined in [harmony.ts:13](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-core/src/harmony.ts#L13)*

###  Messenger

• **Messenger**: *Messenger*

*Defined in [harmony.ts:15](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-core/src/harmony.ts#L15)*

###  Transaction

• **Transaction**: *Transaction*

*Defined in [harmony.ts:19](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-core/src/harmony.ts#L19)*

###  TransactionFactory

• **TransactionFactory**: *TransactionFactory*

*Defined in [harmony.ts:17](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-core/src/harmony.ts#L17)*

###  WSProvider

• **WSProvider**: *WSProvider*

*Defined in [harmony.ts:14](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-core/src/harmony.ts#L14)*

###  Wallet

• **Wallet**: *Wallet*

*Defined in [harmony.ts:18](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-core/src/harmony.ts#L18)*
