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

*Defined in [stakingTransaction.ts:282](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L282)*

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

*Defined in [stakingTransaction.ts:282](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L282)*

___

###  commission

• **commission**: *[CommissionRate](commissionrate.md)*

*Defined in [stakingTransaction.ts:278](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L278)*

___

###  description

• **description**: *[Description](description.md)*

*Defined in [stakingTransaction.ts:277](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L277)*

___

###  minSelfDelegation

• **minSelfDelegation**: *number*

*Defined in [stakingTransaction.ts:279](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L279)*

___

###  pubKey

• **pubKey**: *string*

*Defined in [stakingTransaction.ts:281](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L281)*

___

###  stakingAddress

• **stakingAddress**: *string*

*Defined in [stakingTransaction.ts:280](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L280)*

## Methods

###  encode

▸ **encode**(): *any[]*

*Defined in [stakingTransaction.ts:299](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L299)*

**Returns:** *any[]*
