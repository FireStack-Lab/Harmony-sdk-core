[@harmony-js/account](../README.md) › [Globals](../globals.md) › [Account](account.md)

# Class: Account

## Hierarchy

* **Account**

## Index

### Constructors

* [constructor](account.md#constructor)

### Properties

* [address](account.md#optional-address)
* [balance](account.md#optional-balance)
* [encrypted](account.md#encrypted)
* [messenger](account.md#messenger)
* [nonce](account.md#optional-nonce)
* [privateKey](account.md#optional-privatekey)
* [publicKey](account.md#optional-publickey)
* [shardID](account.md#shardid)
* [shards](account.md#shards)

### Accessors

* [bech32Address](account.md#bech32address)
* [bech32TestNetAddress](account.md#bech32testnetaddress)
* [checksumAddress](account.md#checksumaddress)
* [getShardsCount](account.md#getshardscount)

### Methods

* [_import](account.md#private-_import)
* [_new](account.md#private-_new)
* [fromFile](account.md#fromfile)
* [getAddressFromShardID](account.md#getaddressfromshardid)
* [getAddresses](account.md#getaddresses)
* [getBalance](account.md#getbalance)
* [getShardBalance](account.md#getshardbalance)
* [setMessenger](account.md#setmessenger)
* [signTransaction](account.md#signtransaction)
* [toFile](account.md#tofile)
* [updateBalances](account.md#updatebalances)
* [add](account.md#static-add)
* [new](account.md#static-new)

## Constructors

###  constructor

\+ **new Account**(`key?`: undefined | string, `messenger`: Messenger): *[Account](account.md)*

*Defined in [account.ts:69](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/account.ts#L69)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`key?` | undefined &#124; string | - |
`messenger` | Messenger |  defaultMessenger |

**Returns:** *[Account](account.md)*

## Properties

### `Optional` address

• **address**? : *undefined | string*

*Defined in [account.ts:41](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/account.ts#L41)*

___

### `Optional` balance

• **balance**? : *undefined | string* = "0"

*Defined in [account.ts:42](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/account.ts#L42)*

___

###  encrypted

• **encrypted**: *boolean* = false

*Defined in [account.ts:47](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/account.ts#L47)*

___

###  messenger

• **messenger**: *Messenger*

*Defined in [account.ts:46](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/account.ts#L46)*

___

### `Optional` nonce

• **nonce**? : *undefined | number* = 0

*Defined in [account.ts:43](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/account.ts#L43)*

___

### `Optional` privateKey

• **privateKey**? : *undefined | string*

*Defined in [account.ts:39](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/account.ts#L39)*

___

### `Optional` publicKey

• **publicKey**? : *undefined | string*

*Defined in [account.ts:40](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/account.ts#L40)*

___

###  shardID

• **shardID**: *number*

*Defined in [account.ts:44](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/account.ts#L44)*

___

###  shards

• **shards**: *[Shards](../globals.md#shards)*

*Defined in [account.ts:45](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/account.ts#L45)*

## Accessors

###  bech32Address

• **get bech32Address**(): *string*

*Defined in [account.ts:56](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/account.ts#L56)*

**Returns:** *string*

___

###  bech32TestNetAddress

• **get bech32TestNetAddress**(): *string*

*Defined in [account.ts:59](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/account.ts#L59)*

**Returns:** *string*

___

###  checksumAddress

• **get checksumAddress**(): *string*

*Defined in [account.ts:53](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/account.ts#L53)*

**`function`** checksumAddress checsumAddress getter

**Returns:** *string*

get the checksumAddress

___

###  getShardsCount

• **get getShardsCount**(): *number*

*Defined in [account.ts:67](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/account.ts#L67)*

**`function`** getShardsCount getShards number with this Account

**Returns:** *number*

shard size

## Methods

### `Private` _import

▸ **_import**(`key`: string): *[Account](account.md)*

*Defined in [account.ts:290](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/account.ts#L290)*

**`function`** _import private method import a private Key

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | private key |

**Returns:** *[Account](account.md)*

Account instance

___

### `Private` _new

▸ **_new**(): *[Account](account.md)*

*Defined in [account.ts:277](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/account.ts#L277)*

**`function`** _new private method create Account

**Returns:** *[Account](account.md)*

Account instance

___

###  fromFile

▸ **fromFile**(`keyStore`: string, `password`: string): *Promise‹[Account](account.md)›*

*Defined in [account.ts:98](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/account.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`keyStore` | string |
`password` | string |

**Returns:** *Promise‹[Account](account.md)›*

___

###  getAddressFromShardID

▸ **getAddressFromShardID**(`shardID`: number): *undefined | string*

*Defined in [account.ts:229](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/account.ts#L229)*

**Parameters:**

Name | Type |
------ | ------ |
`shardID` | number |

**Returns:** *undefined | string*

___

###  getAddresses

▸ **getAddresses**(): *string[]*

*Defined in [account.ts:237](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/account.ts#L237)*

**Returns:** *string[]*

___

###  getBalance

▸ **getBalance**(`blockNumber`: string): *Promise‹object›*

*Defined in [account.ts:119](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/account.ts#L119)*

**`function`** getBalance get Account's balance

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`blockNumber` | string | "latest" |

**Returns:** *Promise‹object›*

{description}

___

###  getShardBalance

▸ **getShardBalance**(`shardID`: number, `blockNumber`: string): *Promise‹object›*

*Defined in [account.ts:246](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/account.ts#L246)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`shardID` | number | - |
`blockNumber` | string | "latest" |

**Returns:** *Promise‹object›*

___

###  setMessenger

▸ **setMessenger**(`messenger`: Messenger): *void*

*Defined in [account.ts:225](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/account.ts#L225)*

**Parameters:**

Name | Type |
------ | ------ |
`messenger` | Messenger |

**Returns:** *void*

___

###  signTransaction

▸ **signTransaction**(`transaction`: Transaction, `updateNonce`: boolean, `encodeMode`: string, `blockNumber`: string): *Promise‹Transaction›*

*Defined in [account.ts:179](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/account.ts#L179)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`transaction` | Transaction | - |
`updateNonce` | boolean | true |
`encodeMode` | string | "rlp" |
`blockNumber` | string | "latest" |

**Returns:** *Promise‹Transaction›*

___

###  toFile

▸ **toFile**(`password`: string, `options?`: EncryptOptions): *Promise‹string›*

*Defined in [account.ts:87](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/account.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`password` | string |
`options?` | EncryptOptions |

**Returns:** *Promise‹string›*

___

###  updateBalances

▸ **updateBalances**(`blockNumber`: string): *Promise‹void›*

*Defined in [account.ts:162](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/account.ts#L162)*

**`function`** updateShards

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`blockNumber` | string | "latest" |

**Returns:** *Promise‹void›*

{description}

___

### `Static` add

▸ **add**(`key`: string): *[Account](account.md)*

*Defined in [account.ts:34](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/account.ts#L34)*

**`function`** add static method add a private key to Account

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | private Key |

**Returns:** *[Account](account.md)*

Account instance

___

### `Static` new

▸ **new**(): *[Account](account.md)*

*Defined in [account.ts:25](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-account/src/account.ts#L25)*

**`function`** new static method create account

**Returns:** *[Account](account.md)*

Account instance
