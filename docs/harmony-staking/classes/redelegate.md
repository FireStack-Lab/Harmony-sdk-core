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

*Defined in [stakingTransaction.ts:359](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L359)*

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

*Defined in [stakingTransaction.ts:359](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L359)*

___

###  delegatorAddress

• **delegatorAddress**: *string*

*Defined in [stakingTransaction.ts:356](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L356)*

___

###  validatorDstAddress

• **validatorDstAddress**: *string*

*Defined in [stakingTransaction.ts:358](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L358)*

___

###  validatorSrcAddress

• **validatorSrcAddress**: *string*

*Defined in [stakingTransaction.ts:357](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L357)*

## Methods

###  encode

▸ **encode**(): *any[]*

*Defined in [stakingTransaction.ts:371](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-staking/src/stakingTransaction.ts#L371)*

**Returns:** *any[]*
