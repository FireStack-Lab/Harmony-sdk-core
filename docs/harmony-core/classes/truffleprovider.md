**[@harmony-js/core](../README.md)**

[Globals](../README.md) › [TruffleProvider](truffleprovider.md)

# Class: TruffleProvider

## Hierarchy

* HDNode

  * **TruffleProvider**

## Index

### Constructors

* [constructor](truffleprovider.md#constructor)

### Properties

* [provider](truffleprovider.md#provider)

### Methods

* [addByPrivateKey](truffleprovider.md#addbyprivatekey)
* [getAccounts](truffleprovider.md#getaccounts)
* [getAddress](truffleprovider.md#getaddress)
* [getAddresses](truffleprovider.md#getaddresses)
* [getHdWallet](truffleprovider.md#gethdwallet)
* [getPrivateKey](truffleprovider.md#getprivatekey)
* [normalizePrivateKeys](truffleprovider.md#normalizeprivatekeys)
* [resolveArgs](truffleprovider.md#resolveargs)
* [resolveCallback](truffleprovider.md#resolvecallback)
* [resolveResult](truffleprovider.md#resolveresult)
* [send](truffleprovider.md#send)
* [sendAsync](truffleprovider.md#sendasync)
* [setProvider](truffleprovider.md#setprovider)
* [setSigner](truffleprovider.md#setsigner)
* [signTransaction](truffleprovider.md#signtransaction)
* [generateMnemonic](truffleprovider.md#static-generatemnemonic)
* [isValidMnemonic](truffleprovider.md#static-isvalidmnemonic)

## Constructors

###  constructor

\+ **new TruffleProvider**(`provider`: string | HttpProvider | WSProvider, `menmonic?`: undefined | string, `index`: number, `addressCount`: number, `chainType`: ChainType, `chainId`: ChainID, `gasLimit`: string, `gasPrice`: string): *[TruffleProvider](truffleprovider.md)*

*Overrides void*

*Defined in [truffleProvider.ts:19](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/d171933/packages/harmony-core/src/truffleProvider.ts#L19)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`provider` | string \| HttpProvider \| WSProvider | "http://localhost:9500" |
`menmonic?` | undefined \| string | - |
`index` | number | 0 |
`addressCount` | number | 1 |
`chainType` | ChainType |  ChainType.Harmony |
`chainId` | ChainID |  ChainID.Default |
`gasLimit` | string | "1000000" |
`gasPrice` | string | "2000000000" |

**Returns:** *[TruffleProvider](truffleprovider.md)*

## Properties

###  provider

• **provider**: *HttpProvider | WSProvider*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-account/dist/hdnode.d.ts:30

## Methods

###  addByPrivateKey

▸ **addByPrivateKey**(`privateKey`: string): *string*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-account/dist/hdnode.d.ts:49

**Parameters:**

Name | Type |
------ | ------ |
`privateKey` | string |

**Returns:** *string*

___

###  getAccounts

▸ **getAccounts**(`cb?`: Function): *string[]*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-account/dist/hdnode.d.ts:44

**Parameters:**

Name | Type |
------ | ------ |
`cb?` | Function |

**Returns:** *string[]*

___

###  getAddress

▸ **getAddress**(`idx?`: undefined | number): *string*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-account/dist/hdnode.d.ts:47

**Parameters:**

Name | Type |
------ | ------ |
`idx?` | undefined \| number |

**Returns:** *string*

___

###  getAddresses

▸ **getAddresses**(): *string[]*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-account/dist/hdnode.d.ts:48

**Returns:** *string[]*

___

###  getHdWallet

▸ **getHdWallet**(`mnemonic`: string): *void*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-account/dist/hdnode.d.ts:43

**Parameters:**

Name | Type |
------ | ------ |
`mnemonic` | string |

**Returns:** *void*

___

###  getPrivateKey

▸ **getPrivateKey**(`address`: string, `cb?`: Function): *any*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-account/dist/hdnode.d.ts:45

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |
`cb?` | Function |

**Returns:** *any*

___

###  normalizePrivateKeys

▸ **normalizePrivateKeys**(`mnemonic`: string | string[]): *false | string[]*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-account/dist/hdnode.d.ts:41

**Parameters:**

Name | Type |
------ | ------ |
`mnemonic` | string \| string[] |

**Returns:** *false | string[]*

___

###  resolveArgs

▸ **resolveArgs**(...`args`: [RPCRequestPayload‹any›, any]): *[ArgsResolver](../interfaces/argsresolver.md)*

*Defined in [truffleProvider.ts:119](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/d171933/packages/harmony-core/src/truffleProvider.ts#L119)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [RPCRequestPayload‹any›, any] |

**Returns:** *[ArgsResolver](../interfaces/argsresolver.md)*

___

###  resolveCallback

▸ **resolveCallback**(`err`: any, `res`: any, `callback`: function): *void*

*Defined in [truffleProvider.ts:145](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/d171933/packages/harmony-core/src/truffleProvider.ts#L145)*

**Parameters:**

▪ **err**: *any*

▪ **res**: *any*

▪ **callback**: *function*

▸ (`error`: any, `res?`: ResponseMiddleware | any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |
`res?` | ResponseMiddleware \| any |

**Returns:** *void*

___

###  resolveResult

▸ **resolveResult**(`response`: ResponseMiddleware | any): *any*

*Defined in [truffleProvider.ts:139](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/d171933/packages/harmony-core/src/truffleProvider.ts#L139)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | ResponseMiddleware \| any |

**Returns:** *any*

___

###  send

▸ **send**(...`args`: [RPCRequestPayload‹any›, any]): *Promise‹any›*

*Defined in [truffleProvider.ts:41](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/d171933/packages/harmony-core/src/truffleProvider.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [RPCRequestPayload‹any›, any] |

**Returns:** *Promise‹any›*

___

###  sendAsync

▸ **sendAsync**(...`args`: [RPCRequestPayload‹any›, any]): *Promise‹any›*

*Defined in [truffleProvider.ts:115](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/d171933/packages/harmony-core/src/truffleProvider.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [RPCRequestPayload‹any›, any] |

**Returns:** *Promise‹any›*

___

###  setProvider

▸ **setProvider**(`provider`: string | HttpProvider | WSProvider): *HttpProvider | WSProvider*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-account/dist/hdnode.d.ts:42

**Parameters:**

Name | Type |
------ | ------ |
`provider` | string \| HttpProvider \| WSProvider |

**Returns:** *HttpProvider | WSProvider*

___

###  setSigner

▸ **setSigner**(`address`: string): *void*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-account/dist/hdnode.d.ts:50

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *void*

___

###  signTransaction

▸ **signTransaction**(`txParams`: any | Web3TxPrams): *Promise‹string›*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-account/dist/hdnode.d.ts:46

**Parameters:**

Name | Type |
------ | ------ |
`txParams` | any \| Web3TxPrams |

**Returns:** *Promise‹string›*

___

### `Static` generateMnemonic

▸ **generateMnemonic**(): *string*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-account/dist/hdnode.d.ts:29

**Returns:** *string*

___

### `Static` isValidMnemonic

▸ **isValidMnemonic**(`phrase`: string): *boolean*

*Inherited from void*

Defined in /home/travis/build/FireStack-Lab/Harmony-sdk-core/packages/harmony-account/dist/hdnode.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`phrase` | string |

**Returns:** *boolean*