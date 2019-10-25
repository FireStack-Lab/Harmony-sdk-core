[@harmony-js/contract](../globals.md) › [Contract](contract.md)

# Class: Contract

## Hierarchy

* **Contract**

## Index

### Constructors

* [constructor](contract.md#constructor)

### Properties

* [abiCoder](contract.md#abicoder)
* [abiModel](contract.md#abimodel)
* [events](contract.md#events)
* [methods](contract.md#methods)
* [options](contract.md#options)
* [shardID](contract.md#shardid)
* [status](contract.md#status)
* [transaction](contract.md#optional-transaction)
* [wallet](contract.md#wallet)

### Accessors

* [address](contract.md#address)
* [data](contract.md#data)
* [jsonInterface](contract.md#jsoninterface)

### Methods

* [connect](contract.md#connect)
* [deploy](contract.md#deploy)
* [isCalled](contract.md#iscalled)
* [isDeployed](contract.md#isdeployed)
* [isInitialised](contract.md#isinitialised)
* [isRejected](contract.md#isrejected)
* [isSent](contract.md#issent)
* [isSigned](contract.md#issigned)
* [runEventFactory](contract.md#runeventfactory)
* [runMethodFactory](contract.md#runmethodfactory)
* [setMessegner](contract.md#setmessegner)
* [setStatus](contract.md#setstatus)

## Constructors

###  constructor

\+ **new Contract**(`abi`: any, `address`: string, `options`: [ContractOptions](../interfaces/contractoptions.md), `wallet`: Wallet, `status`: [ContractStatus](../enums/contractstatus.md)): *[Contract](contract.md)*

*Defined in [contract.ts:23](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L23)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`abi` | any |  [] |
`address` | string | "0x" |
`options` | [ContractOptions](../interfaces/contractoptions.md) |  {} |
`wallet` | Wallet | - |
`status` | [ContractStatus](../enums/contractstatus.md) |  ContractStatus.INITIALISED |

**Returns:** *[Contract](contract.md)*

## Properties

###  abiCoder

• **abiCoder**: *[AbiCoderClass](abicoderclass.md)*

*Defined in [contract.ts:18](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L18)*

___

###  abiModel

• **abiModel**: *any | [AbiModel](abimodel.md)*

*Defined in [contract.ts:17](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L17)*

___

###  events

• **events**: *any*

*Defined in [contract.ts:16](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L16)*

___

###  methods

• **methods**: *any*

*Defined in [contract.ts:15](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L15)*

___

###  options

• **options**: *[ContractOptions](../interfaces/contractoptions.md) | any*

*Defined in [contract.ts:19](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L19)*

___

###  shardID

• **shardID**: *number*

*Defined in [contract.ts:23](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L23)*

___

###  status

• **status**: *[ContractStatus](../enums/contractstatus.md)*

*Defined in [contract.ts:22](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L22)*

___

### `Optional` transaction

• **transaction**? : *Transaction*

*Defined in [contract.ts:21](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L21)*

___

###  wallet

• **wallet**: *Wallet | any*

*Defined in [contract.ts:20](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L20)*

## Accessors

###  address

• **get address**(): *string*

*Defined in [contract.ts:78](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L78)*

**Returns:** *string*

• **set address**(`value`: string): *void*

*Defined in [contract.ts:82](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *void*

___

###  data

• **get data**(): *any*

*Defined in [contract.ts:86](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L86)*

**Returns:** *any*

• **set data**(`value`: any): *void*

*Defined in [contract.ts:90](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *void*

___

###  jsonInterface

• **get jsonInterface**(): *any[]*

*Defined in [contract.ts:68](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L68)*

**Returns:** *any[]*

• **set jsonInterface**(`value`: any[]): *void*

*Defined in [contract.ts:72](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any[] |

**Returns:** *void*

## Methods

###  connect

▸ **connect**(`wallet`: Wallet): *void*

*Defined in [contract.ts:105](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`wallet` | Wallet |

**Returns:** *void*

___

###  deploy

▸ **deploy**(`options`: any): *any*

*Defined in [contract.ts:95](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | any |

**Returns:** *any*

___

###  isCalled

▸ **isCalled**(): *boolean*

*Defined in [contract.ts:61](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L61)*

**Returns:** *boolean*

___

###  isDeployed

▸ **isDeployed**(): *boolean*

*Defined in [contract.ts:55](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L55)*

**Returns:** *boolean*

___

###  isInitialised

▸ **isInitialised**(): *boolean*

*Defined in [contract.ts:46](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L46)*

**Returns:** *boolean*

___

###  isRejected

▸ **isRejected**(): *boolean*

*Defined in [contract.ts:58](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L58)*

**Returns:** *boolean*

___

###  isSent

▸ **isSent**(): *boolean*

*Defined in [contract.ts:52](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L52)*

**Returns:** *boolean*

___

###  isSigned

▸ **isSigned**(): *boolean*

*Defined in [contract.ts:49](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L49)*

**Returns:** *boolean*

___

###  runEventFactory

▸ **runEventFactory**(): *[Contract](contract.md)*

*Defined in [contract.ts:102](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L102)*

**Returns:** *[Contract](contract.md)*

___

###  runMethodFactory

▸ **runMethodFactory**(): *[Contract](contract.md)*

*Defined in [contract.ts:99](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L99)*

**Returns:** *[Contract](contract.md)*

___

###  setMessegner

▸ **setMessegner**(`messenger`: Messenger): *void*

*Defined in [contract.ts:108](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L108)*

**Parameters:**

Name | Type |
------ | ------ |
`messenger` | Messenger |

**Returns:** *void*

___

###  setStatus

▸ **setStatus**(`status`: [ContractStatus](../enums/contractstatus.md)): *void*

*Defined in [contract.ts:64](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/1e63f5a/packages/harmony-contract/src/contract.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`status` | [ContractStatus](../enums/contractstatus.md) |

**Returns:** *void*
