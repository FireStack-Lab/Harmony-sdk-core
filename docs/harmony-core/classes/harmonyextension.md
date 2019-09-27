[@harmony-js/core](../globals.md) › [HarmonyExtension](harmonyextension.md)

# Class: HarmonyExtension

## Hierarchy

* **HarmonyExtension**

## Index

### Constructors

* [constructor](harmonyextension.md#constructor)

### Properties

* [blockchain](harmonyextension.md#blockchain)
* [contracts](harmonyextension.md#contracts)
* [crypto](harmonyextension.md#crypto)
* [defaultShardID](harmonyextension.md#optional-defaultshardid)
* [extensionType](harmonyextension.md#extensiontype)
* [messenger](harmonyextension.md#messenger)
* [provider](harmonyextension.md#provider)
* [transactions](harmonyextension.md#transactions)
* [utils](harmonyextension.md#utils)
* [wallet](harmonyextension.md#wallet)

### Methods

* [isExtension](harmonyextension.md#isextension)
* [login](harmonyextension.md#login)
* [setMessenger](harmonyextension.md#private-setmessenger)
* [setProvider](harmonyextension.md#setprovider)
* [setShardID](harmonyextension.md#setshardid)
* [shardingStructures](harmonyextension.md#shardingstructures)

## Constructors

###  constructor

\+ **new HarmonyExtension**(`wallet`: [ExtensionInterface](../interfaces/extensioninterface.md), `config`: [HarmonyConfig](../interfaces/harmonyconfig.md)): *[HarmonyExtension](harmonyextension.md)*

*Defined in [harmonyExtension.ts:56](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-core/src/harmonyExtension.ts#L56)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`wallet` | [ExtensionInterface](../interfaces/extensioninterface.md) | - |
`config` | [HarmonyConfig](../interfaces/harmonyconfig.md) |  {
      chainId: utils.defaultConfig.Default.Chain_ID,
      chainType: utils.defaultConfig.Default.Chain_Type,
    } |

**Returns:** *[HarmonyExtension](harmonyextension.md)*

## Properties

###  blockchain

• **blockchain**: *[Blockchain](blockchain.md)*

*Defined in [harmonyExtension.ts:51](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-core/src/harmonyExtension.ts#L51)*

___

###  contracts

• **contracts**: *ContractFactory*

*Defined in [harmonyExtension.ts:53](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-core/src/harmonyExtension.ts#L53)*

___

###  crypto

• **crypto**: *any*

*Defined in [harmonyExtension.ts:54](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-core/src/harmonyExtension.ts#L54)*

___

### `Optional` defaultShardID

• **defaultShardID**? : *undefined | number*

*Defined in [harmonyExtension.ts:56](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-core/src/harmonyExtension.ts#L56)*

___

###  extensionType

• **extensionType**: *[ExtensionType](../enums/extensiontype.md) | null*

*Defined in [harmonyExtension.ts:47](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-core/src/harmonyExtension.ts#L47)*

___

###  messenger

• **messenger**: *Messenger*

*Defined in [harmonyExtension.ts:50](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-core/src/harmonyExtension.ts#L50)*

___

###  provider

• **provider**: *HttpProvider | WSProvider*

*Defined in [harmonyExtension.ts:49](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-core/src/harmonyExtension.ts#L49)*

___

###  transactions

• **transactions**: *TransactionFactory*

*Defined in [harmonyExtension.ts:52](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-core/src/harmonyExtension.ts#L52)*

___

###  utils

• **utils**: *any*

*Defined in [harmonyExtension.ts:55](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-core/src/harmonyExtension.ts#L55)*

___

###  wallet

• **wallet**: *[ExtensionInterface](../interfaces/extensioninterface.md)*

*Defined in [harmonyExtension.ts:48](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-core/src/harmonyExtension.ts#L48)*

## Methods

###  isExtension

▸ **isExtension**(`wallet`: [ExtensionInterface](../interfaces/extensioninterface.md)): *void*

*Defined in [harmonyExtension.ts:96](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-core/src/harmonyExtension.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`wallet` | [ExtensionInterface](../interfaces/extensioninterface.md) |

**Returns:** *void*

___

###  login

▸ **login**(): *Promise‹[ExtensionAccount](../interfaces/extensionaccount.md)›*

*Defined in [harmonyExtension.ts:142](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-core/src/harmonyExtension.ts#L142)*

**Returns:** *Promise‹[ExtensionAccount](../interfaces/extensionaccount.md)›*

___

### `Private` setMessenger

▸ **setMessenger**(`messenger`: Messenger): *void*

*Defined in [harmonyExtension.ts:161](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-core/src/harmonyExtension.ts#L161)*

**Parameters:**

Name | Type |
------ | ------ |
`messenger` | Messenger |

**Returns:** *void*

___

###  setProvider

▸ **setProvider**(`provider`: string | HttpProvider | WSProvider): *void*

*Defined in [harmonyExtension.ts:84](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-core/src/harmonyExtension.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`provider` | string &#124; HttpProvider &#124; WSProvider |

**Returns:** *void*

___

###  setShardID

▸ **setShardID**(`shardID`: number): *void*

*Defined in [harmonyExtension.ts:90](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-core/src/harmonyExtension.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`shardID` | number |

**Returns:** *void*

___

###  shardingStructures

▸ **shardingStructures**(`shardingStructures`: ShardingItem[]): *void*

*Defined in [harmonyExtension.ts:148](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-core/src/harmonyExtension.ts#L148)*

**Parameters:**

Name | Type |
------ | ------ |
`shardingStructures` | ShardingItem[] |

**Returns:** *void*
