[@harmony-js/account](../README.md) › [Globals](../globals.md) › [HDNode](hdnode.md)

# Class: HDNode

## Hierarchy

* **HDNode**

## Index

### Constructors

* [constructor](hdnode.md#constructor)

### Properties

* [addressCount](hdnode.md#private-addresscount)
* [addresses](hdnode.md#private-addresses)
* [gasLimit](hdnode.md#gaslimit)
* [gasPrice](hdnode.md#gasprice)
* [hdwallet](hdnode.md#private-hdwallet)
* [index](hdnode.md#private-index)
* [messenger](hdnode.md#messenger)
* [path](hdnode.md#private-path)
* [provider](hdnode.md#provider)
* [shardID](hdnode.md#private-shardid)
* [wallets](hdnode.md#private-wallets)

### Methods

* [addByPrivateKey](hdnode.md#addbyprivatekey)
* [getAccounts](hdnode.md#getaccounts)
* [getAddress](hdnode.md#getaddress)
* [getAddresses](hdnode.md#getaddresses)
* [getHdWallet](hdnode.md#gethdwallet)
* [getPrivateKey](hdnode.md#getprivatekey)
* [normalizePrivateKeys](hdnode.md#normalizeprivatekeys)
* [setProvider](hdnode.md#setprovider)
* [setSigner](hdnode.md#setsigner)
* [signTransaction](hdnode.md#signtransaction)
* [generateMnemonic](hdnode.md#static-generatemnemonic)
* [isValidMnemonic](hdnode.md#static-isvalidmnemonic)

## Constructors

###  constructor

\+ **new HDNode**(`provider`: string | HttpProvider | WSProvider, `menmonic?`: undefined | string, `index`: number, `addressCount`: number, `shardID`: number, `chainType`: ChainType, `chainId`: ChainID, `gasLimit`: string, `gasPrice`: string): *[HDNode](hdnode.md)*

*Defined in [hdnode.ts:59](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/hdnode.ts#L59)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`provider` | string &#124; HttpProvider &#124; WSProvider | "http://localhost:9500" |
`menmonic?` | undefined &#124; string | - |
`index` | number | 0 |
`addressCount` | number | 1 |
`shardID` | number | 0 |
`chainType` | ChainType |  ChainType.Harmony |
`chainId` | ChainID |  ChainID.Default |
`gasLimit` | string | "1000000" |
`gasPrice` | string | "2000000000" |

**Returns:** *[HDNode](hdnode.md)*

## Properties

### `Private` addressCount

• **addressCount**: *number*

*Defined in [hdnode.ts:57](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/hdnode.ts#L57)*

___

### `Private` addresses

• **addresses**: *string[]*

*Defined in [hdnode.ts:58](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/hdnode.ts#L58)*

___

###  gasLimit

• **gasLimit**: *string*

*Defined in [hdnode.ts:50](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/hdnode.ts#L50)*

___

###  gasPrice

• **gasPrice**: *string*

*Defined in [hdnode.ts:51](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/hdnode.ts#L51)*

___

### `Private` hdwallet

• **hdwallet**: *hdkey | undefined*

*Defined in [hdnode.ts:54](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/hdnode.ts#L54)*

___

### `Private` index

• **index**: *number*

*Defined in [hdnode.ts:56](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/hdnode.ts#L56)*

___

###  messenger

• **messenger**: *Messenger*

*Defined in [hdnode.ts:52](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/hdnode.ts#L52)*

___

### `Private` path

• **path**: *string*

*Defined in [hdnode.ts:55](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/hdnode.ts#L55)*

___

###  provider

• **provider**: *HttpProvider | WSProvider*

*Defined in [hdnode.ts:49](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/hdnode.ts#L49)*

___

### `Private` shardID

• **shardID**: *number*

*Defined in [hdnode.ts:53](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/hdnode.ts#L53)*

___

### `Private` wallets

• **wallets**: *[WalletsInterfaces](../interfaces/walletsinterfaces.md)*

*Defined in [hdnode.ts:59](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/hdnode.ts#L59)*

## Methods

###  addByPrivateKey

▸ **addByPrivateKey**(`privateKey`: string): *string*

*Defined in [hdnode.ts:234](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/hdnode.ts#L234)*

**Parameters:**

Name | Type |
------ | ------ |
`privateKey` | string |

**Returns:** *string*

___

###  getAccounts

▸ **getAccounts**(`cb?`: Function): *string[]*

*Defined in [hdnode.ts:131](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/hdnode.ts#L131)*

**Parameters:**

Name | Type |
------ | ------ |
`cb?` | Function |

**Returns:** *string[]*

___

###  getAddress

▸ **getAddress**(`idx?`: undefined | number): *string*

*Defined in [hdnode.ts:224](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/hdnode.ts#L224)*

**Parameters:**

Name | Type |
------ | ------ |
`idx?` | undefined &#124; number |

**Returns:** *string*

___

###  getAddresses

▸ **getAddresses**(): *string[]*

*Defined in [hdnode.ts:231](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/hdnode.ts#L231)*

**Returns:** *string[]*

___

###  getHdWallet

▸ **getHdWallet**(`mnemonic`: string): *void*

*Defined in [hdnode.ts:111](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/hdnode.ts#L111)*

**Parameters:**

Name | Type |
------ | ------ |
`mnemonic` | string |

**Returns:** *void*

___

###  getPrivateKey

▸ **getPrivateKey**(`address`: string, `cb?`: Function): *any*

*Defined in [hdnode.ts:138](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/hdnode.ts#L138)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |
`cb?` | Function |

**Returns:** *any*

___

###  normalizePrivateKeys

▸ **normalizePrivateKeys**(`mnemonic`: string | string[]): *false | string[]*

*Defined in [hdnode.ts:87](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/hdnode.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`mnemonic` | string &#124; string[] |

**Returns:** *false | string[]*

___

###  setProvider

▸ **setProvider**(`provider`: string | HttpProvider | WSProvider): *HttpProvider | WSProvider*

*Defined in [hdnode.ts:97](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/hdnode.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`provider` | string &#124; HttpProvider &#124; WSProvider |

**Returns:** *HttpProvider | WSProvider*

___

###  setSigner

▸ **setSigner**(`address`: string): *void*

*Defined in [hdnode.ts:242](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/hdnode.ts#L242)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *void*

___

###  signTransaction

▸ **signTransaction**(`txParams`: any | [Web3TxPrams](../interfaces/web3txprams.md)): *Promise‹string›*

*Defined in [hdnode.ts:153](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/hdnode.ts#L153)*

**Parameters:**

Name | Type |
------ | ------ |
`txParams` | any &#124; [Web3TxPrams](../interfaces/web3txprams.md) |

**Returns:** *Promise‹string›*

___

### `Static` generateMnemonic

▸ **generateMnemonic**(): *string*

*Defined in [hdnode.ts:46](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/hdnode.ts#L46)*

**Returns:** *string*

___

### `Static` isValidMnemonic

▸ **isValidMnemonic**(`phrase`: string): *boolean*

*Defined in [hdnode.ts:40](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/hdnode.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`phrase` | string |

**Returns:** *boolean*
