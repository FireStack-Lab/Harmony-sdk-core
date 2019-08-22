**[@harmony-js/core](../README.md)**

[Globals](../README.md) › [HarmonyExtension](harmonyextension.md)

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
* [extensionType](harmonyextension.md#extensiontype)
* [messenger](harmonyextension.md#messenger)
* [provider](harmonyextension.md#provider)
* [transactions](harmonyextension.md#transactions)
* [utils](harmonyextension.md#utils)
* [wallet](harmonyextension.md#wallet)

### Methods

* [isExtension](harmonyextension.md#isextension)
* [login](harmonyextension.md#login)
* [setProvider](harmonyextension.md#setprovider)

## Constructors

###  constructor

\+ **new HarmonyExtension**(`wallet`: [ExtensionInterface](../interfaces/extensioninterface.md)): *[HarmonyExtension](harmonyextension.md)*

*Defined in [harmonyExtension.ts:49](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/517232c/packages/harmony-core/src/harmonyExtension.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`wallet` | [ExtensionInterface](../interfaces/extensioninterface.md) |  Extendsion |

**Returns:** *[HarmonyExtension](harmonyextension.md)*

## Properties

###  blockchain

• **blockchain**: *[Blockchain](blockchain.md)*

*Defined in [harmonyExtension.ts:45](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/517232c/packages/harmony-core/src/harmonyExtension.ts#L45)*

___

###  contracts

• **contracts**: *ContractFactory*

*Defined in [harmonyExtension.ts:47](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/517232c/packages/harmony-core/src/harmonyExtension.ts#L47)*

___

###  crypto

• **crypto**: *any*

*Defined in [harmonyExtension.ts:48](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/517232c/packages/harmony-core/src/harmonyExtension.ts#L48)*

___

###  extensionType

• **extensionType**: *[ExtensionType](../enums/extensiontype.md) | null*

*Defined in [harmonyExtension.ts:41](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/517232c/packages/harmony-core/src/harmonyExtension.ts#L41)*

___

###  messenger

• **messenger**: *Messenger*

*Defined in [harmonyExtension.ts:44](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/517232c/packages/harmony-core/src/harmonyExtension.ts#L44)*

___

###  provider

• **provider**: *HttpProvider | WSProvider*

*Defined in [harmonyExtension.ts:43](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/517232c/packages/harmony-core/src/harmonyExtension.ts#L43)*

___

###  transactions

• **transactions**: *TransactionFactory*

*Defined in [harmonyExtension.ts:46](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/517232c/packages/harmony-core/src/harmonyExtension.ts#L46)*

___

###  utils

• **utils**: *any*

*Defined in [harmonyExtension.ts:49](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/517232c/packages/harmony-core/src/harmonyExtension.ts#L49)*

___

###  wallet

• **wallet**: *[ExtensionInterface](../interfaces/extensioninterface.md)*

*Defined in [harmonyExtension.ts:42](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/517232c/packages/harmony-core/src/harmonyExtension.ts#L42)*

## Methods

###  isExtension

▸ **isExtension**(`wallet`: [ExtensionInterface](../interfaces/extensioninterface.md)): *void*

*Defined in [harmonyExtension.ts:72](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/517232c/packages/harmony-core/src/harmonyExtension.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`wallet` | [ExtensionInterface](../interfaces/extensioninterface.md) |

**Returns:** *void*

___

###  login

▸ **login**(): *Promise‹[ExtensionAccount](../interfaces/extensionaccount.md)›*

*Defined in [harmonyExtension.ts:84](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/517232c/packages/harmony-core/src/harmonyExtension.ts#L84)*

**Returns:** *Promise‹[ExtensionAccount](../interfaces/extensionaccount.md)›*

___

###  setProvider

▸ **setProvider**(`provider`: string | HttpProvider | WSProvider): *void*

*Defined in [harmonyExtension.ts:65](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/517232c/packages/harmony-core/src/harmonyExtension.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`provider` | string \| HttpProvider \| WSProvider |

**Returns:** *void*