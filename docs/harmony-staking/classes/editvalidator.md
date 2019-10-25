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

*Defined in [stakingTransaction.ts:296](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-staking/src/stakingTransaction.ts#L296)*

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

*Defined in [stakingTransaction.ts:295](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-staking/src/stakingTransaction.ts#L295)*

___

###  description

• **description**: *[Description](description.md)*

*Defined in [stakingTransaction.ts:293](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-staking/src/stakingTransaction.ts#L293)*

___

###  minSelfDelegation

• **minSelfDelegation**: *number*

*Defined in [stakingTransaction.ts:296](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-staking/src/stakingTransaction.ts#L296)*

___

###  stakingAddress

• **stakingAddress**: *string*

*Defined in [stakingTransaction.ts:294](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-staking/src/stakingTransaction.ts#L294)*

## Methods

###  encode

▸ **encode**(): *any[]*

*Defined in [stakingTransaction.ts:308](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-staking/src/stakingTransaction.ts#L308)*

**Returns:** *any[]*
