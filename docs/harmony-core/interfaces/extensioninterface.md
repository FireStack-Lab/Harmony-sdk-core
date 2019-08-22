**[@harmony-js/core](../README.md)**

[Globals](../README.md) › [ExtensionInterface](extensioninterface.md)

# Interface: ExtensionInterface

## Hierarchy

* **ExtensionInterface**

## Index

### Properties

* [getAccount](extensioninterface.md#getaccount)
* [isMathWallet](extensioninterface.md#optional-ismathwallet)
* [messenger](extensioninterface.md#optional-messenger)
* [network](extensioninterface.md#network)
* [signTransaction](extensioninterface.md#signtransaction)
* [version](extensioninterface.md#version)

## Properties

###  getAccount

• **getAccount**: *function*

*Defined in [harmonyExtension.ts:31](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/517232c/packages/harmony-core/src/harmonyExtension.ts#L31)*

#### Type declaration:

▸ (): *Promise‹[ExtensionAccount](extensionaccount.md)›*

___

### `Optional` isMathWallet

• **isMathWallet**? : *undefined | false | true*

*Defined in [harmonyExtension.ts:34](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/517232c/packages/harmony-core/src/harmonyExtension.ts#L34)*

___

### `Optional` messenger

• **messenger**? : *[Messenger](../classes/harmony.md#messenger)*

*Defined in [harmonyExtension.ts:32](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/517232c/packages/harmony-core/src/harmonyExtension.ts#L32)*

___

###  network

• **network**: *[ExtensionNetwork](extensionnetwork.md)*

*Defined in [harmonyExtension.ts:35](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/517232c/packages/harmony-core/src/harmonyExtension.ts#L35)*

___

###  signTransaction

• **signTransaction**: *function*

*Defined in [harmonyExtension.ts:25](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/517232c/packages/harmony-core/src/harmonyExtension.ts#L25)*

#### Type declaration:

▸ (`transaction`: Transaction, `updateNonce`: boolean, `encodeMode`: string, `blockNumber`: string): *Promise‹Transaction›*

**Parameters:**

Name | Type |
------ | ------ |
`transaction` | Transaction |
`updateNonce` | boolean |
`encodeMode` | string |
`blockNumber` | string |

___

###  version

• **version**: *string*

*Defined in [harmonyExtension.ts:33](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/517232c/packages/harmony-core/src/harmonyExtension.ts#L33)*