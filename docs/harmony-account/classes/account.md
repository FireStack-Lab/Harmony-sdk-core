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
* [signStaking](account.md#signstaking)
* [signTransaction](account.md#signtransaction)
* [toFile](account.md#tofile)
* [updateBalances](account.md#updatebalances)
* [add](account.md#static-add)
* [new](account.md#static-new)

## Constructors

###  constructor

\+ **new Account**(`key?`: undefined | string, `messenger`: Messenger): *[Account](account.md)*

*Defined in [account.ts:76](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L76)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`key?` | undefined &#124; string | - |
`messenger` | Messenger |  defaultMessenger |

**Returns:** *[Account](account.md)*

## Properties

### `Optional` address

• **address**? : *undefined | string*

*Defined in [account.ts:48](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L48)*

___

### `Optional` balance

• **balance**? : *undefined | string* = "0"

*Defined in [account.ts:49](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L49)*

___

###  encrypted

• **encrypted**: *boolean* = false

*Defined in [account.ts:54](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L54)*

___

###  messenger

• **messenger**: *Messenger*

*Defined in [account.ts:53](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L53)*

___

### `Optional` nonce

• **nonce**? : *undefined | number* = 0

*Defined in [account.ts:50](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L50)*

___

### `Optional` privateKey

• **privateKey**? : *undefined | string*

*Defined in [account.ts:46](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L46)*

___

### `Optional` publicKey

• **publicKey**? : *undefined | string*

*Defined in [account.ts:47](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L47)*

___

###  shardID

• **shardID**: *number*

*Defined in [account.ts:51](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L51)*

___

###  shards

• **shards**: *[Shards](../globals.md#shards)*

*Defined in [account.ts:52](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L52)*

## Accessors

###  bech32Address

• **get bech32Address**(): *string*

*Defined in [account.ts:63](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L63)*

**Returns:** *string*

___

###  bech32TestNetAddress

• **get bech32TestNetAddress**(): *string*

*Defined in [account.ts:66](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L66)*

**Returns:** *string*

___

###  checksumAddress

• **get checksumAddress**(): *string*

*Defined in [account.ts:60](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L60)*

**`function`** checksumAddress checsumAddress getter

**Returns:** *string*

get the checksumAddress

___

###  getShardsCount

• **get getShardsCount**(): *number*

*Defined in [account.ts:74](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L74)*

**`function`** getShardsCount getShards number with this Account

**Returns:** *number*

shard size

## Methods

### `Private` _import

▸ **_import**(`key`: string): *[Account](account.md)*

*Defined in [account.ts:364](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L364)*

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

*Defined in [account.ts:351](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L351)*

**`function`** _new private method create Account

**Returns:** *[Account](account.md)*

Account instance

___

###  fromFile

▸ **fromFile**(`keyStore`: string, `password`: string): *Promise‹[Account](account.md)›*

*Defined in [account.ts:105](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`keyStore` | string |
`password` | string |

**Returns:** *Promise‹[Account](account.md)›*

___

###  getAddressFromShardID

▸ **getAddressFromShardID**(`shardID`: number): *undefined | string*

*Defined in [account.ts:303](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L303)*

**Parameters:**

Name | Type |
------ | ------ |
`shardID` | number |

**Returns:** *undefined | string*

___

###  getAddresses

▸ **getAddresses**(): *string[]*

*Defined in [account.ts:311](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L311)*

**Returns:** *string[]*

___

###  getBalance

▸ **getBalance**(`blockNumber`: string): *Promise‹object›*

*Defined in [account.ts:126](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L126)*

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

*Defined in [account.ts:320](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L320)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`shardID` | number | - |
`blockNumber` | string | "latest" |

**Returns:** *Promise‹object›*

___

###  setMessenger

▸ **setMessenger**(`messenger`: Messenger): *void*

*Defined in [account.ts:299](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L299)*

**Parameters:**

Name | Type |
------ | ------ |
`messenger` | Messenger |

**Returns:** *void*

___

###  signStaking

▸ **signStaking**(`staking`: StakingTransaction, `updateNonce`: boolean, `encodeMode`: string, `blockNumber`: string, `shardID`: number): *Promise‹StakingTransaction›*

*Defined in [account.ts:246](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L246)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`staking` | StakingTransaction | - |
`updateNonce` | boolean | true |
`encodeMode` | string | "rlp" |
`blockNumber` | string | "latest" |
`shardID` | number |  this.messenger.currentShard |

**Returns:** *Promise‹StakingTransaction›*

___

###  signTransaction

▸ **signTransaction**(`transaction`: Transaction, `updateNonce`: boolean, `encodeMode`: string, `blockNumber`: string): *Promise‹Transaction›*

*Defined in [account.ts:186](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L186)*

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

*Defined in [account.ts:94](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`password` | string |
`options?` | EncryptOptions |

**Returns:** *Promise‹string›*

___

###  updateBalances

▸ **updateBalances**(`blockNumber`: string): *Promise‹void›*

*Defined in [account.ts:169](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L169)*

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

*Defined in [account.ts:41](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L41)*

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

*Defined in [account.ts:32](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/bb13a3b/packages/harmony-account/src/account.ts#L32)*

**`function`** new static method create account

**Returns:** *[Account](account.md)*

Account instance
