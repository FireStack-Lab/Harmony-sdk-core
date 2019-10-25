[@harmony-js/staking](../globals.md) › [NewValidator](newvalidator.md)

# Class: NewValidator

## Hierarchy

* **NewValidator**

## Index

### Constructors

* [constructor](newvalidator.md#constructor)

### Properties

* [amount](newvalidator.md#amount)
* [commission](newvalidator.md#commission)
* [description](newvalidator.md#description)
* [minSelfDelegation](newvalidator.md#minselfdelegation)
* [pubKey](newvalidator.md#pubkey)
* [stakingAddress](newvalidator.md#stakingaddress)

### Methods

* [encode](newvalidator.md#encode)

## Constructors

###  constructor

\+ **new NewValidator**(`description`: [Description](description.md), `commission`: [CommissionRate](commissionrate.md), `minSelfDelegation`: number, `stakingAddress`: string, `pubKey`: string, `amount`: number): *[NewValidator](newvalidator.md)*

*Defined in [stakingTransaction.ts:263](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-staking/src/stakingTransaction.ts#L263)*

**Parameters:**

Name | Type |
------ | ------ |
`description` | [Description](description.md) |
`commission` | [CommissionRate](commissionrate.md) |
`minSelfDelegation` | number |
`stakingAddress` | string |
`pubKey` | string |
`amount` | number |

**Returns:** *[NewValidator](newvalidator.md)*

## Properties

###  amount

• **amount**: *number*

*Defined in [stakingTransaction.ts:263](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-staking/src/stakingTransaction.ts#L263)*

___

###  commission

• **commission**: *[CommissionRate](commissionrate.md)*

*Defined in [stakingTransaction.ts:259](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-staking/src/stakingTransaction.ts#L259)*

___

###  description

• **description**: *[Description](description.md)*

*Defined in [stakingTransaction.ts:258](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-staking/src/stakingTransaction.ts#L258)*

___

###  minSelfDelegation

• **minSelfDelegation**: *number*

*Defined in [stakingTransaction.ts:260](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-staking/src/stakingTransaction.ts#L260)*

___

###  pubKey

• **pubKey**: *string*

*Defined in [stakingTransaction.ts:262](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-staking/src/stakingTransaction.ts#L262)*

___

###  stakingAddress

• **stakingAddress**: *string*

*Defined in [stakingTransaction.ts:261](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-staking/src/stakingTransaction.ts#L261)*

## Methods

###  encode

▸ **encode**(): *any[]*

*Defined in [stakingTransaction.ts:280](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-staking/src/stakingTransaction.ts#L280)*

**Returns:** *any[]*
