[@harmony-js/contract](../globals.md) › [ContractFactory](contractfactory.md)

# Class: ContractFactory

## Hierarchy

* **ContractFactory**

## Index

### Constructors

* [constructor](contractfactory.md#constructor)

### Properties

* [wallet](contractfactory.md#wallet)

### Methods

* [createContract](contractfactory.md#createcontract)

## Constructors

###  constructor

\+ **new ContractFactory**(`wallet`: Wallet | any): *[ContractFactory](contractfactory.md)*

*Defined in [contractFactory.ts:6](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-contract/src/contractFactory.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`wallet` | Wallet &#124; any |

**Returns:** *[ContractFactory](contractfactory.md)*

## Properties

###  wallet

• **wallet**: *Wallet | any*

*Defined in [contractFactory.ts:6](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-contract/src/contractFactory.ts#L6)*

## Methods

###  createContract

▸ **createContract**(`abi`: any[], `address?`: undefined | string, `options?`: [ContractOptions](../interfaces/contractoptions.md)): *[Contract](contract.md)*

*Defined in [contractFactory.ts:11](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-contract/src/contractFactory.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`abi` | any[] |
`address?` | undefined &#124; string |
`options?` | [ContractOptions](../interfaces/contractoptions.md) |

**Returns:** *[Contract](contract.md)*
