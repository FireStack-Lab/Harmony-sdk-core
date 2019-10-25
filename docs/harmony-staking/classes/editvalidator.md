[@harmony-js/staking](../globals.md) › [EditValidator](editvalidator.md)

# Class: EditValidator

## Hierarchy

* **EditValidator**

## Index

### Constructors

* [constructor](editvalidator.md#constructor)

### Properties

* [commissionRate](editvalidator.md#commissionrate)
* [description](editvalidator.md#description)
* [minSelfDelegation](editvalidator.md#minselfdelegation)
* [stakingAddress](editvalidator.md#stakingaddress)

### Methods

* [encode](editvalidator.md#encode)

## Constructors

###  constructor

\+ **new EditValidator**(`description`: [Description](description.md), `stakingAddress`: string, `commissionRate`: [Decimal](decimal.md), `minSelfDelegation`: number): *[EditValidator](editvalidator.md)*

*Defined in [stakingTransaction.ts:315](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L315)*

**Parameters:**

Name | Type |
------ | ------ |
`description` | [Description](description.md) |
`stakingAddress` | string |
`commissionRate` | [Decimal](decimal.md) |
`minSelfDelegation` | number |

**Returns:** *[EditValidator](editvalidator.md)*

## Properties

###  commissionRate

• **commissionRate**: *[Decimal](decimal.md)*

*Defined in [stakingTransaction.ts:314](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L314)*

___

###  description

• **description**: *[Description](description.md)*

*Defined in [stakingTransaction.ts:312](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L312)*

___

###  minSelfDelegation

• **minSelfDelegation**: *number*

*Defined in [stakingTransaction.ts:315](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L315)*

___

###  stakingAddress

• **stakingAddress**: *string*

*Defined in [stakingTransaction.ts:313](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L313)*

## Methods

###  encode

▸ **encode**(): *any[]*

*Defined in [stakingTransaction.ts:327](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L327)*

**Returns:** *any[]*
