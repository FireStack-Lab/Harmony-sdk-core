[@harmony-js/core](../globals.md) › [ExtensionInterface](extensioninterface.md)

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

*Defined in [harmonyExtension.ts:39](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-core/src/harmonyExtension.ts#L39)*

#### Type declaration:

▸ (): *Promise‹[ExtensionAccount](extensionaccount.md)›*

___

### `Optional` isMathWallet

• **isMathWallet**? : *undefined | false | true*

*Defined in [harmonyExtension.ts:42](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-core/src/harmonyExtension.ts#L42)*

___

### `Optional` messenger

• **messenger**? : *[Messenger](../classes/harmony.md#messenger)*

*Defined in [harmonyExtension.ts:40](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-core/src/harmonyExtension.ts#L40)*

___

###  network

• **network**: *[ExtensionNetwork](extensionnetwork.md)*

*Defined in [harmonyExtension.ts:43](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-core/src/harmonyExtension.ts#L43)*

___

###  signTransaction

• **signTransaction**: *function*

*Defined in [harmonyExtension.ts:33](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-core/src/harmonyExtension.ts#L33)*

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

*Defined in [harmonyExtension.ts:41](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-core/src/harmonyExtension.ts#L41)*
