**[@harmony-js/contract](../README.md)**

[Globals](../README.md) › [ContractMethod](contractmethod.md)

# Class: ContractMethod

## Hierarchy

* **ContractMethod**

## Index

### Constructors

* [constructor](contractmethod.md#constructor)

### Properties

* [abiItem](contractmethod.md#abiitem)
* [callPayload](contractmethod.md#optional-callpayload)
* [callResponse](contractmethod.md#optional-callresponse)
* [contract](contractmethod.md#contract)
* [methodKey](contractmethod.md#methodkey)
* [params](contractmethod.md#params)
* [transaction](contractmethod.md#protected-transaction)
* [wallet](contractmethod.md#wallet)

### Methods

* [afterCall](contractmethod.md#protected-aftercall)
* [call](contractmethod.md#call)
* [confirm](contractmethod.md#protected-confirm)
* [createTransaction](contractmethod.md#protected-createtransaction)
* [debug](contractmethod.md#debug)
* [encodeABI](contractmethod.md#encodeabi)
* [estimateGas](contractmethod.md#estimategas)
* [send](contractmethod.md#send)
* [sendTransaction](contractmethod.md#protected-sendtransaction)
* [signTransaction](contractmethod.md#protected-signtransaction)

## Constructors

###  constructor

\+ **new ContractMethod**(`methodKey`: string, `params`: any, `abiItem`: [AbiItemModel](../interfaces/abiitemmodel.md), `contract`: [Contract](contract.md)): *[ContractMethod](contractmethod.md)*

*Defined in [methods/method.ts:22](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/2ea7368/packages/harmony-contract/src/methods/method.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`methodKey` | string |
`params` | any |
`abiItem` | [AbiItemModel](../interfaces/abiitemmodel.md) |
`contract` | [Contract](contract.md) |

**Returns:** *[ContractMethod](contractmethod.md)*

## Properties

###  abiItem

• **abiItem**: *[AbiItemModel](../interfaces/abiitemmodel.md)*

*Defined in [methods/method.ts:18](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/2ea7368/packages/harmony-contract/src/methods/method.ts#L18)*

___

### `Optional` callPayload

• **callPayload**? : *any*

*Defined in [methods/method.ts:20](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/2ea7368/packages/harmony-contract/src/methods/method.ts#L20)*

___

### `Optional` callResponse

• **callResponse**? : *any*

*Defined in [methods/method.ts:19](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/2ea7368/packages/harmony-contract/src/methods/method.ts#L19)*

___

###  contract

• **contract**: *[Contract](contract.md)*

*Defined in [methods/method.ts:14](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/2ea7368/packages/harmony-contract/src/methods/method.ts#L14)*

___

###  methodKey

• **methodKey**: *string*

*Defined in [methods/method.ts:16](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/2ea7368/packages/harmony-contract/src/methods/method.ts#L16)*

___

###  params

• **params**: *any*

*Defined in [methods/method.ts:15](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/2ea7368/packages/harmony-contract/src/methods/method.ts#L15)*

___

### `Protected` transaction

• **transaction**: *Transaction*

*Defined in [methods/method.ts:22](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/2ea7368/packages/harmony-contract/src/methods/method.ts#L22)*

___

###  wallet

• **wallet**: *Wallet | any*

*Defined in [methods/method.ts:17](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/2ea7368/packages/harmony-contract/src/methods/method.ts#L17)*

## Methods

### `Protected` afterCall

▸ **afterCall**(`response`: any): *any*

*Defined in [methods/method.ts:258](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/2ea7368/packages/harmony-contract/src/methods/method.ts#L258)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | any |

**Returns:** *any*

___

###  call

▸ **call**(`options`: any, `blockNumber`: any): *Promise‹any›*

*Defined in [methods/method.ts:56](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/2ea7368/packages/harmony-contract/src/methods/method.ts#L56)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | any | - |
`blockNumber` | any | "latest" |

**Returns:** *Promise‹any›*

___

### `Protected` confirm

▸ **confirm**(`id`: string): *Promise‹void›*

*Defined in [methods/method.ts:214](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/2ea7368/packages/harmony-contract/src/methods/method.ts#L214)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹void›*

___

### `Protected` createTransaction

▸ **createTransaction**(): *Transaction*

*Defined in [methods/method.ts:232](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/2ea7368/packages/harmony-contract/src/methods/method.ts#L232)*

**Returns:** *Transaction*

___

###  debug

▸ **debug**(): *object*

*Defined in [methods/method.ts:172](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/2ea7368/packages/harmony-contract/src/methods/method.ts#L172)*

**Returns:** *object*

* **callPayload**: *any* =  this.callPayload

* **callResponse**: *any* =  this.callResponse

___

###  encodeABI

▸ **encodeABI**(): *string*

*Defined in [methods/method.ts:168](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/2ea7368/packages/harmony-contract/src/methods/method.ts#L168)*

**Returns:** *string*

___

###  estimateGas

▸ **estimateGas**(): *Promise‹any›*

*Defined in [methods/method.ts:145](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/2ea7368/packages/harmony-contract/src/methods/method.ts#L145)*

**Returns:** *Promise‹any›*

___

###  send

▸ **send**(`params`: any): *Emitter*

*Defined in [methods/method.ts:33](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/2ea7368/packages/harmony-contract/src/methods/method.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | any |

**Returns:** *Emitter*

___

### `Protected` sendTransaction

▸ **sendTransaction**(`signed`: Transaction): *Promise‹[Transaction, string]›*

*Defined in [methods/method.ts:205](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/2ea7368/packages/harmony-contract/src/methods/method.ts#L205)*

**Parameters:**

Name | Type |
------ | ------ |
`signed` | Transaction |

**Returns:** *Promise‹[Transaction, string]›*

___

### `Protected` signTransaction

▸ **signTransaction**(`updateNonce`: boolean): *Promise‹any›*

*Defined in [methods/method.ts:179](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/2ea7368/packages/harmony-contract/src/methods/method.ts#L179)*

**Parameters:**

Name | Type |
------ | ------ |
`updateNonce` | boolean |

**Returns:** *Promise‹any›*