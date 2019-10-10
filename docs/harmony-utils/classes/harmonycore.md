[@harmony-js/utils](../globals.md) › [HarmonyCore](harmonycore.md)

# Class: HarmonyCore

## Hierarchy

* **HarmonyCore**

## Index

### Constructors

* [constructor](harmonycore.md#constructor)

### Properties

* [chainId](harmonycore.md#chainid)
* [chainType](harmonycore.md#chaintype)

### Accessors

* [chainPrefix](harmonycore.md#chainprefix)
* [getChainId](harmonycore.md#getchainid)

### Methods

* [setChainId](harmonycore.md#setchainid)
* [setChainType](harmonycore.md#setchaintype)

## Constructors

###  constructor

\+ **new HarmonyCore**(`chainType`: [ChainType](../enums/chaintype.md), `chainId`: [ChainID](../enums/chainid.md)): *[HarmonyCore](harmonycore.md)*

*Defined in [chain.ts:42](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-utils/src/chain.ts#L42)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`chainType` | [ChainType](../enums/chaintype.md) | - |
`chainId` | [ChainID](../enums/chainid.md) |  defaultConfig.Default.Chain_ID |

**Returns:** *[HarmonyCore](harmonycore.md)*

## Properties

###  chainId

• **chainId**: *[ChainID](../enums/chainid.md)*

*Defined in [chain.ts:42](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-utils/src/chain.ts#L42)*

___

###  chainType

• **chainType**: *[ChainType](../enums/chaintype.md)*

*Defined in [chain.ts:41](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-utils/src/chain.ts#L41)*

## Accessors

###  chainPrefix

• **get chainPrefix**(): *string*

*Defined in [chain.ts:47](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-utils/src/chain.ts#L47)*

**Returns:** *string*

___

###  getChainId

• **get getChainId**(): *[ChainID](../enums/chainid.md)*

*Defined in [chain.ts:60](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-utils/src/chain.ts#L60)*

**Returns:** *[ChainID](../enums/chainid.md)*

## Methods

###  setChainId

▸ **setChainId**(`chainId`: [ChainID](../enums/chainid.md)): *void*

*Defined in [chain.ts:63](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-utils/src/chain.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`chainId` | [ChainID](../enums/chainid.md) |

**Returns:** *void*

___

###  setChainType

▸ **setChainType**(`chainType`: [ChainType](../enums/chaintype.md)): *void*

*Defined in [chain.ts:66](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/ad01043/packages/harmony-utils/src/chain.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`chainType` | [ChainType](../enums/chaintype.md) |

**Returns:** *void*
