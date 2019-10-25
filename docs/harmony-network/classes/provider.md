[@harmony-js/network](../globals.md) › [Provider](provider.md)

# Class: Provider

## Hierarchy

* **Provider**

## Index

### Constructors

* [constructor](provider.md#constructor)

### Properties

* [provider](provider.md#provider)
* [providerType](provider.md#providertype)

### Methods

* [getType](provider.md#private-gettype)
* [onInitSetProvider](provider.md#private-oninitsetprovider)
* [getProvider](provider.md#static-getprovider)

## Constructors

###  constructor

\+ **new Provider**(`url`: string | [WSProvider](wsprovider.md) | [HttpProvider](httpprovider.md)): *[Provider](provider.md)*

*Defined in [providers/provider.ts:20](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/providers/provider.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string &#124; [WSProvider](wsprovider.md) &#124; [HttpProvider](httpprovider.md) |

**Returns:** *[Provider](provider.md)*

## Properties

###  provider

• **provider**: *[WSProvider](wsprovider.md) | [HttpProvider](httpprovider.md)*

*Defined in [providers/provider.ts:19](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/providers/provider.ts#L19)*

___

###  providerType

• **providerType**: *[ProviderType](../enums/providertype.md)*

*Defined in [providers/provider.ts:20](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/providers/provider.ts#L20)*

## Methods

### `Private` getType

▸ **getType**(`provider`: [HttpProvider](httpprovider.md) | [WSProvider](wsprovider.md)): *[http](../enums/providertype.md#http) | [ws](../enums/providertype.md#ws)*

*Defined in [providers/provider.ts:46](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/providers/provider.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`provider` | [HttpProvider](httpprovider.md) &#124; [WSProvider](wsprovider.md) |

**Returns:** *[http](../enums/providertype.md#http) | [ws](../enums/providertype.md#ws)*

___

### `Private` onInitSetProvider

▸ **onInitSetProvider**(`providerUrl`: string | [HttpProvider](httpprovider.md) | [WSProvider](wsprovider.md)): *[HttpProvider](httpprovider.md) | [WSProvider](wsprovider.md)*

*Defined in [providers/provider.ts:25](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/providers/provider.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`providerUrl` | string &#124; [HttpProvider](httpprovider.md) &#124; [WSProvider](wsprovider.md) |

**Returns:** *[HttpProvider](httpprovider.md) | [WSProvider](wsprovider.md)*

___

### `Static` getProvider

▸ **getProvider**(`provider`: string | [HttpProvider](httpprovider.md) | [WSProvider](wsprovider.md)): *[Provider](provider.md)*

*Defined in [providers/provider.ts:11](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-network/src/providers/provider.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`provider` | string &#124; [HttpProvider](httpprovider.md) &#124; [WSProvider](wsprovider.md) |

**Returns:** *[Provider](provider.md)*
