[@harmony-js/account](../README.md) › [Globals](../globals.md) › [Wallet](wallet.md)

# Class: Wallet

## Hierarchy

* **Wallet**

## Index

### Constructors

* [constructor](wallet.md#constructor)

### Properties

* [accountMap](wallet.md#private-accountmap)
* [defaultSigner](wallet.md#protected-optional-defaultsigner)
* [messenger](wallet.md#messenger)

### Accessors

* [accounts](wallet.md#accounts)
* [signer](wallet.md#signer)

### Methods

* [addByKeyStore](wallet.md#addbykeystore)
* [addByMnemonic](wallet.md#addbymnemonic)
* [addByPrivateKey](wallet.md#addbyprivatekey)
* [createAccount](wallet.md#createaccount)
* [decryptAccount](wallet.md#decryptaccount)
* [encryptAccount](wallet.md#encryptaccount)
* [getAccount](wallet.md#getaccount)
* [isValidMnemonic](wallet.md#private-isvalidmnemonic)
* [newMnemonic](wallet.md#newmnemonic)
* [removeAccount](wallet.md#removeaccount)
* [setMessenger](wallet.md#setmessenger)
* [setSigner](wallet.md#setsigner)
* [signTransaction](wallet.md#signtransaction)
* [generateMnemonic](wallet.md#static-generatemnemonic)

## Constructors

###  constructor

\+ **new Wallet**(`messenger`: Messenger): *[Wallet](wallet.md)*

*Defined in [wallet.ts:38](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-account/src/wallet.ts#L38)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messenger` | Messenger |  defaultMessenger |

**Returns:** *[Wallet](wallet.md)*

## Properties

### `Private` accountMap

• **accountMap**: *Map‹string, [Account](account.md)›* =  new Map()

*Defined in [wallet.ts:20](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-account/src/wallet.ts#L20)*

**`memberof`** Wallet

___

### `Protected` `Optional` defaultSigner

• **defaultSigner**? : *undefined | string*

*Defined in [wallet.ts:15](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-account/src/wallet.ts#L15)*

___

###  messenger

• **messenger**: *Messenger*

*Defined in [wallet.ts:14](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-account/src/wallet.ts#L14)*

## Accessors

###  accounts

• **get accounts**(): *string[]*

*Defined in [wallet.ts:25](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-account/src/wallet.ts#L25)*

**`memberof`** Wallet

**Returns:** *string[]*

accounts addresses

___

###  signer

• **get signer**(): *[Account](account.md) | undefined*

*Defined in [wallet.ts:29](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-account/src/wallet.ts#L29)*

**Returns:** *[Account](account.md) | undefined*

## Methods

###  addByKeyStore

▸ **addByKeyStore**(`keyStore`: string, `password`: string): *Promise‹[Account](account.md)›*

*Defined in [wallet.ts:104](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-account/src/wallet.ts#L104)*

**`function`** addByKeyStore

**`memberof`** Wallet

**`description`** add an account using privateKey

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`keyStore` | string | keystore jsonString to add |
`password` | string | password to decrypt the file |

**Returns:** *Promise‹[Account](account.md)›*

return added Account

___

###  addByMnemonic

▸ **addByMnemonic**(`phrase`: string, `index`: number): *[Account](account.md)*

*Defined in [wallet.ts:59](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-account/src/wallet.ts#L59)*

**`function`** addByMnemonic

**`memberof`** Wallet

**`description`** add account using Mnemonic phrases

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`phrase` | string | - | Mnemonic phrase |
`index` | number | 0 | index to hdKey root  |

**Returns:** *[Account](account.md)*

___

###  addByPrivateKey

▸ **addByPrivateKey**(`privateKey`: string): *[Account](account.md)*

*Defined in [wallet.ts:78](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-account/src/wallet.ts#L78)*

**`function`** addByPrivateKey

**`memberof`** Wallet

**`description`** add an account using privateKey

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`privateKey` | string | privateKey to add |

**Returns:** *[Account](account.md)*

return added Account

___

###  createAccount

▸ **createAccount**(`password?`: undefined | string, `options?`: EncryptOptions): *Promise‹[Account](account.md)›*

*Defined in [wallet.ts:128](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-account/src/wallet.ts#L128)*

**`function`** createAccount

**`description`** create a new account using Mnemonic

**Parameters:**

Name | Type |
------ | ------ |
`password?` | undefined &#124; string |
`options?` | EncryptOptions |

**Returns:** *Promise‹[Account](account.md)›*

{description}

___

###  decryptAccount

▸ **decryptAccount**(`address`: string, `password`: string): *Promise‹[Account](account.md)›*

*Defined in [wallet.ts:179](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-account/src/wallet.ts#L179)*

**`function`** decryptAccount

**`memberof`** Wallet

**`description`** to decrypt an account that lives in the wallet,if not encrypted, return original,
if not found, throw error

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`address` | string | address in accounts |
`password` | string | string that used to encrypt |

**Returns:** *Promise‹[Account](account.md)›*

___

###  encryptAccount

▸ **encryptAccount**(`address`: string, `password`: string, `options?`: EncryptOptions): *Promise‹[Account](account.md)›*

*Defined in [wallet.ts:151](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-account/src/wallet.ts#L151)*

**`function`** encryptAccount

**`memberof`** Wallet

**`description`** to encrypt an account that lives in the wallet,
if encrypted, returns original one, if not found, throw error

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`address` | string | address in accounts |
`password` | string | string that used to encrypt |
`options?` | EncryptOptions | encryption options |

**Returns:** *Promise‹[Account](account.md)›*

___

###  getAccount

▸ **getAccount**(`address`: string): *[Account](account.md) | undefined*

*Defined in [wallet.ts:203](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-account/src/wallet.ts#L203)*

**`function`** getAccount

**`memberof`** Wallet

**`description`** get Account instance using address as param

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`address` | string | address hex |

**Returns:** *[Account](account.md) | undefined*

Account instance which lives in Wallet

___

### `Private` isValidMnemonic

▸ **isValidMnemonic**(`phrase`: string): *boolean*

*Defined in [wallet.ts:284](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-account/src/wallet.ts#L284)*

**`function`** isValidMnemonic

**`memberof`** Wallet

**`description`** check if Mnemonic is valid

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`phrase` | string | Mnemonic phrase |

**Returns:** *boolean*

___

###  newMnemonic

▸ **newMnemonic**(): *string*

*Defined in [wallet.ts:48](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-account/src/wallet.ts#L48)*

**`function`** newMnemonic

**`memberof`** Wallet

**Returns:** *string*

Mnemonics

___

###  removeAccount

▸ **removeAccount**(`address`: string): *void*

*Defined in [wallet.ts:213](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-account/src/wallet.ts#L213)*

**`function`** removeAccount

**`memberof`** Wallet

**`description`** remove Account using address as param

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *void*

___

###  setMessenger

▸ **setMessenger**(`messenger`: Messenger): *void*

*Defined in [wallet.ts:220](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-account/src/wallet.ts#L220)*

**Parameters:**

Name | Type |
------ | ------ |
`messenger` | Messenger |

**Returns:** *void*

___

###  setSigner

▸ **setSigner**(`address`: string): *void*

*Defined in [wallet.ts:224](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-account/src/wallet.ts#L224)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *void*

___

###  signTransaction

▸ **signTransaction**(`transaction`: Transaction, `account`: [Account](account.md) | undefined, `password`: string | undefined, `updateNonce`: boolean, `encodeMode`: string, `blockNumber`: string): *Promise‹Transaction›*

*Defined in [wallet.ts:231](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-account/src/wallet.ts#L231)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`transaction` | Transaction | - |
`account` | [Account](account.md) &#124; undefined |  this.signer |
`password` | string &#124; undefined |  undefined |
`updateNonce` | boolean | true |
`encodeMode` | string | "rlp" |
`blockNumber` | string | "latest" |

**Returns:** *Promise‹Transaction›*

___

### `Static` generateMnemonic

▸ **generateMnemonic**(): *string*

*Defined in [wallet.ts:10](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/a192dab/packages/harmony-account/src/wallet.ts#L10)*

**Returns:** *string*
