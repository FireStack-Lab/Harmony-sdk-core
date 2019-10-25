[@harmony-js/contract](../globals.md) › [CoderNumber](codernumber.md)

# Class: CoderNumber

## Hierarchy

* [Coder](coder.md)

  ↳ **CoderNumber**

## Index

### Constructors

* [constructor](codernumber.md#constructor)

### Properties

* [coerceFunc](codernumber.md#coercefunc)
* [dynamic](codernumber.md#dynamic)
* [localName](codernumber.md#optional-localname)
* [name](codernumber.md#name)
* [signed](codernumber.md#signed)
* [size](codernumber.md#size)
* [type](codernumber.md#type)

### Methods

* [decode](codernumber.md#decode)
* [encode](codernumber.md#encode)

## Constructors

###  constructor

\+ **new CoderNumber**(`coerceFunc`: [CoerceFunc](../globals.md#coercefunc), `size`: number, `signed`: boolean, `localName`: string): *[CoderNumber](codernumber.md)*

*Overrides [Coder](coder.md).[constructor](coder.md#constructor)*

*Defined in [abi/abiCoder.ts:550](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-contract/src/abi/abiCoder.ts#L550)*

**Parameters:**

Name | Type |
------ | ------ |
`coerceFunc` | [CoerceFunc](../globals.md#coercefunc) |
`size` | number |
`signed` | boolean |
`localName` | string |

**Returns:** *[CoderNumber](codernumber.md)*

## Properties

###  coerceFunc

• **coerceFunc**: *[CoerceFunc](../globals.md#coercefunc)*

*Inherited from [Coder](coder.md).[coerceFunc](coder.md#coercefunc)*

*Defined in [abi/abiCoder.ts:486](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-contract/src/abi/abiCoder.ts#L486)*

___

###  dynamic

• **dynamic**: *boolean*

*Inherited from [Coder](coder.md).[dynamic](coder.md#dynamic)*

*Defined in [abi/abiCoder.ts:490](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-contract/src/abi/abiCoder.ts#L490)*

___

### `Optional` localName

• **localName**? : *undefined | string*

*Inherited from [Coder](coder.md).[localName](coder.md#optional-localname)*

*Defined in [abi/abiCoder.ts:489](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-contract/src/abi/abiCoder.ts#L489)*

___

###  name

• **name**: *string*

*Inherited from [Coder](coder.md).[name](coder.md#name)*

*Defined in [abi/abiCoder.ts:487](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-contract/src/abi/abiCoder.ts#L487)*

___

###  signed

• **signed**: *boolean*

*Defined in [abi/abiCoder.ts:550](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-contract/src/abi/abiCoder.ts#L550)*

___

###  size

• **size**: *number*

*Defined in [abi/abiCoder.ts:549](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-contract/src/abi/abiCoder.ts#L549)*

___

###  type

• **type**: *string*

*Inherited from [Coder](coder.md).[type](coder.md#type)*

*Defined in [abi/abiCoder.ts:488](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-contract/src/abi/abiCoder.ts#L488)*

## Methods

###  decode

▸ **decode**(`data`: Uint8Array, `offset`: number): *[DecodedResult](../interfaces/decodedresult.md)*

*Overrides [Coder](coder.md).[decode](coder.md#abstract-decode)*

*Defined in [abi/abiCoder.ts:598](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-contract/src/abi/abiCoder.ts#L598)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | Uint8Array |
`offset` | number |

**Returns:** *[DecodedResult](../interfaces/decodedresult.md)*

___

###  encode

▸ **encode**(`value`: BN | number | string): *Uint8Array*

*Overrides [Coder](coder.md).[encode](coder.md#abstract-encode)*

*Defined in [abi/abiCoder.ts:564](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-contract/src/abi/abiCoder.ts#L564)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | BN &#124; number &#124; string |

**Returns:** *Uint8Array*
