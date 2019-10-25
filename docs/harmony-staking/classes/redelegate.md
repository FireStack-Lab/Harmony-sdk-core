[@harmony-js/staking](../globals.md) › [Redelegate](redelegate.md)

# Class: Redelegate

## Hierarchy

* **Redelegate**

## Index

### Constructors

* [constructor](redelegate.md#constructor)

### Properties

* [amount](redelegate.md#amount)
* [delegatorAddress](redelegate.md#delegatoraddress)
* [validatorDstAddress](redelegate.md#validatordstaddress)
* [validatorSrcAddress](redelegate.md#validatorsrcaddress)

### Methods

* [encode](redelegate.md#encode)

## Constructors

###  constructor

\+ **new Redelegate**(`delegatorAddress`: string, `validatorSrcAddress`: string, `validatorDstAddress`: string, `amount`: number): *[Redelegate](redelegate.md)*

*Defined in [stakingTransaction.ts:340](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-staking/src/stakingTransaction.ts#L340)*

**Parameters:**

Name | Type |
------ | ------ |
`delegatorAddress` | string |
`validatorSrcAddress` | string |
`validatorDstAddress` | string |
`amount` | number |

**Returns:** *[Redelegate](redelegate.md)*

## Properties

###  amount

• **amount**: *number*

*Defined in [stakingTransaction.ts:340](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-staking/src/stakingTransaction.ts#L340)*

___

###  delegatorAddress

• **delegatorAddress**: *string*

*Defined in [stakingTransaction.ts:337](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-staking/src/stakingTransaction.ts#L337)*

___

###  validatorDstAddress

• **validatorDstAddress**: *string*

*Defined in [stakingTransaction.ts:339](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-staking/src/stakingTransaction.ts#L339)*

___

###  validatorSrcAddress

• **validatorSrcAddress**: *string*

*Defined in [stakingTransaction.ts:338](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-staking/src/stakingTransaction.ts#L338)*

## Methods

###  encode

▸ **encode**(): *any[]*

*Defined in [stakingTransaction.ts:352](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-staking/src/stakingTransaction.ts#L352)*

**Returns:** *any[]*
