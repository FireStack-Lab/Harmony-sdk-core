[@harmony-js/crypto](../globals.md) › [HarmonyAddress](harmonyaddress.md)

# Class: HarmonyAddress

## Hierarchy

* **HarmonyAddress**

## Index

### Constructors

* [constructor](harmonyaddress.md#constructor)

### Properties

* [basic](harmonyaddress.md#basic)
* [raw](harmonyaddress.md#raw)

### Accessors

* [basicHex](harmonyaddress.md#basichex)
* [bech32](harmonyaddress.md#bech32)
* [bech32TestNet](harmonyaddress.md#bech32testnet)
* [checksum](harmonyaddress.md#checksum)

### Methods

* [getBasic](harmonyaddress.md#private-getbasic)
* [isValidBasic](harmonyaddress.md#static-isvalidbasic)
* [isValidBech32](harmonyaddress.md#static-isvalidbech32)
* [isValidBech32TestNet](harmonyaddress.md#static-isvalidbech32testnet)
* [isValidChecksum](harmonyaddress.md#static-isvalidchecksum)

## Constructors

###  constructor

\+ **new HarmonyAddress**(`raw`: string): *[HarmonyAddress](harmonyaddress.md)*

*Defined in [address.ts:44](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-crypto/src/address.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`raw` | string |

**Returns:** *[HarmonyAddress](harmonyaddress.md)*

## Properties

###  basic

• **basic**: *string*

*Defined in [address.ts:31](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-crypto/src/address.ts#L31)*

___

###  raw

• **raw**: *string*

*Defined in [address.ts:30](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-crypto/src/address.ts#L30)*

## Accessors

###  basicHex

• **get basicHex**(): *string*

*Defined in [address.ts:32](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-crypto/src/address.ts#L32)*

**Returns:** *string*

___

###  bech32

• **get bech32**(): *string*

*Defined in [address.ts:39](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-crypto/src/address.ts#L39)*

**Returns:** *string*

___

###  bech32TestNet

• **get bech32TestNet**(): *string*

*Defined in [address.ts:42](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-crypto/src/address.ts#L42)*

**Returns:** *string*

___

###  checksum

• **get checksum**(): *string*

*Defined in [address.ts:35](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-crypto/src/address.ts#L35)*

**Returns:** *string*

## Methods

### `Private` getBasic

▸ **getBasic**(`addr`: string): *string*

*Defined in [address.ts:51](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-crypto/src/address.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`addr` | string |

**Returns:** *string*

___

### `Static` isValidBasic

▸ **isValidBasic**(`str`: string): *boolean*

*Defined in [address.ts:8](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-crypto/src/address.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *boolean*

___

### `Static` isValidBech32

▸ **isValidBech32**(`str`: string): *boolean*

*Defined in [address.ts:20](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-crypto/src/address.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *boolean*

___

### `Static` isValidBech32TestNet

▸ **isValidBech32TestNet**(`str`: string): *boolean*

*Defined in [address.ts:25](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-crypto/src/address.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *boolean*

___

### `Static` isValidChecksum

▸ **isValidChecksum**(`str`: string): *boolean*

*Defined in [address.ts:14](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/6759acb/packages/harmony-crypto/src/address.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *boolean*
