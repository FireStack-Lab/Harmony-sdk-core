[@harmony-js/crypto](globals.md)

# @harmony-js/crypto

## Index

### Classes

* [HarmonyAddress](classes/harmonyaddress.md)

### Interfaces

* [Decoded](interfaces/decoded.md)
* [EncryptOptions](interfaces/encryptoptions.md)
* [Hexable](interfaces/hexable.md)
* [Keystore](interfaces/keystore.md)
* [PBKDF2Params](interfaces/pbkdf2params.md)
* [ScryptParams](interfaces/scryptparams.md)
* [Signature](interfaces/signature.md)

### Type aliases

* [Arrayish](globals.md#arrayish)
* [KDF](globals.md#kdf)
* [KDFParams](globals.md#kdfparams)

### Variables

* [CALL_EXCEPTION](globals.md#const-call_exception)
* [CHARSET](globals.md#const-charset)
* [DEFAULT_ALGORITHM](globals.md#const-default_algorithm)
* [GENERATOR](globals.md#const-generator)
* [HRP](globals.md#const-hrp)
* [HexCharacters](globals.md#const-hexcharacters)
* [INSUFFICIENT_FUNDS](globals.md#const-insufficient_funds)
* [INVALID_ARGUMENT](globals.md#const-invalid_argument)
* [LogLevel](globals.md#let-loglevel)
* [MISSING_ARGUMENT](globals.md#const-missing_argument)
* [MISSING_NEW](globals.md#const-missing_new)
* [NONCE_EXPIRED](globals.md#const-nonce_expired)
* [NOT_IMPLEMENTED](globals.md#const-not_implemented)
* [NUMERIC_FAULT](globals.md#const-numeric_fault)
* [REPLACEMENT_UNDERPRICED](globals.md#const-replacement_underpriced)
* [UNEXPECTED_ARGUMENT](globals.md#const-unexpected_argument)
* [UNKNOWN_ERROR](globals.md#const-unknown_error)
* [UNSUPPORTED_OPERATION](globals.md#const-unsupported_operation)
* [_censorErrors](globals.md#let-_censorerrors)
* [_permanentCensorErrors](globals.md#let-_permanentcensorerrors)
* [secp256k1](globals.md#const-secp256k1)
* [tHRP](globals.md#const-thrp)

### Functions

* [_decode](globals.md#_decode)
* [_decodeChildren](globals.md#_decodechildren)
* [_encode](globals.md#_encode)
* [addSlice](globals.md#addslice)
* [arrayify](globals.md#arrayify)
* [arrayifyInteger](globals.md#arrayifyinteger)
* [bech32Decode](globals.md#const-bech32decode)
* [bech32Encode](globals.md#const-bech32encode)
* [bytesPadLeft](globals.md#bytespadleft)
* [bytesPadRight](globals.md#bytespadright)
* [checkArgumentCount](globals.md#checkargumentcount)
* [checkNew](globals.md#checknew)
* [checkNormalize](globals.md#checknormalize)
* [concat](globals.md#concat)
* [convertBits](globals.md#const-convertbits)
* [createChecksum](globals.md#createchecksum)
* [decode](globals.md#decode)
* [decrypt](globals.md#const-decrypt)
* [decryptPhrase](globals.md#const-decryptphrase)
* [encode](globals.md#encode)
* [encrypt](globals.md#const-encrypt)
* [encryptPhrase](globals.md#const-encryptphrase)
* [fromBech32](globals.md#const-frombech32)
* [generatePrivateKey](globals.md#const-generateprivatekey)
* [getAddress](globals.md#getaddress)
* [getAddressFromPrivateKey](globals.md#const-getaddressfromprivatekey)
* [getAddressFromPublicKey](globals.md#const-getaddressfrompublickey)
* [getContractAddress](globals.md#getcontractaddress)
* [getDerivedKey](globals.md#getderivedkey)
* [getPubkeyFromPrivateKey](globals.md#const-getpubkeyfromprivatekey)
* [getPublic](globals.md#const-getpublic)
* [hexDataLength](globals.md#hexdatalength)
* [hexDataSlice](globals.md#hexdataslice)
* [hexStripZeros](globals.md#hexstripzeros)
* [hexToByteArray](globals.md#const-hextobytearray)
* [hexToIntArray](globals.md#const-hextointarray)
* [hexZeroPad](globals.md#hexzeropad)
* [hexlify](globals.md#hexlify)
* [hrpExpand](globals.md#const-hrpexpand)
* [info](globals.md#info)
* [isArrayish](globals.md#isarrayish)
* [isHex](globals.md#const-ishex)
* [isHexString](globals.md#ishexstring)
* [isHexable](globals.md#ishexable)
* [isSignature](globals.md#issignature)
* [isValidChecksumAddress](globals.md#const-isvalidchecksumaddress)
* [joinSignature](globals.md#joinsignature)
* [keccak256](globals.md#keccak256)
* [log](globals.md#log)
* [padZeros](globals.md#padzeros)
* [polymod](globals.md#const-polymod)
* [randomBytes](globals.md#const-randombytes)
* [recoverAddress](globals.md#recoveraddress)
* [recoverPublicKey](globals.md#recoverpublickey)
* [setCensorship](globals.md#setcensorship)
* [setLogLevel](globals.md#setloglevel)
* [sha3_256](globals.md#sha3_256)
* [sign](globals.md#const-sign)
* [splitSignature](globals.md#splitsignature)
* [stripZeros](globals.md#stripzeros)
* [throwError](globals.md#throwerror)
* [toBech32](globals.md#const-tobech32)
* [toChecksumAddress](globals.md#const-tochecksumaddress)
* [unarrayifyInteger](globals.md#unarrayifyinteger)
* [validatePrivateKey](globals.md#const-validateprivatekey)
* [verifyChecksum](globals.md#verifychecksum)
* [verifySignature](globals.md#verifysignature)
* [warn](globals.md#warn)

### Object literals

* [LogLevels](globals.md#const-loglevels)

## Type aliases

###  Arrayish

Ƭ **Arrayish**: *string | ArrayLike‹number›*

*Defined in [bytes.ts:6](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bytes.ts#L6)*

___

###  KDF

Ƭ **KDF**: *"pbkdf2" | "scrypt"*

*Defined in [types.ts:1](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/types.ts#L1)*

___

###  KDFParams

Ƭ **KDFParams**: *[PBKDF2Params](interfaces/pbkdf2params.md) | [ScryptParams](interfaces/scryptparams.md)*

*Defined in [types.ts:17](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/types.ts#L17)*

## Variables

### `Const` CALL_EXCEPTION

• **CALL_EXCEPTION**: *"CALL_EXCEPTION"* = "CALL_EXCEPTION"

*Defined in [errors.ts:21](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L21)*

___

### `Const` CHARSET

• **CHARSET**: *"qpzry9x8gf2tvdw0s3jn54khce6mua7l"* = "qpzry9x8gf2tvdw0s3jn54khce6mua7l"

*Defined in [bech32.ts:24](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bech32.ts#L24)*

___

### `Const` DEFAULT_ALGORITHM

• **DEFAULT_ALGORITHM**: *"aes-128-ctr"* = "aes-128-ctr"

*Defined in [keystore.ts:19](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/keystore.ts#L19)*

___

### `Const` GENERATOR

• **GENERATOR**: *number[]* =  [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3]

*Defined in [bech32.ts:25](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bech32.ts#L25)*

___

### `Const` HRP

• **HRP**: *"one"* = "one"

*Defined in [bech32.ts:125](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bech32.ts#L125)*

___

### `Const` HexCharacters

• **HexCharacters**: *string* = "0123456789abcdef"

*Defined in [bytes.ts:197](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bytes.ts#L197)*

___

### `Const` INSUFFICIENT_FUNDS

• **INSUFFICIENT_FUNDS**: *"INSUFFICIENT_FUNDS"* = "INSUFFICIENT_FUNDS"

*Defined in [errors.ts:45](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L45)*

___

### `Const` INVALID_ARGUMENT

• **INVALID_ARGUMENT**: *"INVALID_ARGUMENT"* = "INVALID_ARGUMENT"

*Defined in [errors.ts:26](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L26)*

___

### `Let` LogLevel

• **LogLevel**: *number* =  LogLevels.default

*Defined in [errors.ts:181](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L181)*

___

### `Const` MISSING_ARGUMENT

• **MISSING_ARGUMENT**: *"MISSING_ARGUMENT"* = "MISSING_ARGUMENT"

*Defined in [errors.ts:31](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L31)*

___

### `Const` MISSING_NEW

• **MISSING_NEW**: *"MISSING_NEW"* = "MISSING_NEW"

*Defined in [errors.ts:11](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L11)*

___

### `Const` NONCE_EXPIRED

• **NONCE_EXPIRED**: *"NONCE_EXPIRED"* = "NONCE_EXPIRED"

*Defined in [errors.ts:49](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L49)*

___

### `Const` NOT_IMPLEMENTED

• **NOT_IMPLEMENTED**: *"NOT_IMPLEMENTED"* = "NOT_IMPLEMENTED"

*Defined in [errors.ts:7](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L7)*

___

### `Const` NUMERIC_FAULT

• **NUMERIC_FAULT**: *"NUMERIC_FAULT"* = "NUMERIC_FAULT"

*Defined in [errors.ts:41](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L41)*

___

### `Const` REPLACEMENT_UNDERPRICED

• **REPLACEMENT_UNDERPRICED**: *"REPLACEMENT_UNDERPRICED"* = "REPLACEMENT_UNDERPRICED"

*Defined in [errors.ts:53](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L53)*

___

### `Const` UNEXPECTED_ARGUMENT

• **UNEXPECTED_ARGUMENT**: *"UNEXPECTED_ARGUMENT"* = "UNEXPECTED_ARGUMENT"

*Defined in [errors.ts:36](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L36)*

___

### `Const` UNKNOWN_ERROR

• **UNKNOWN_ERROR**: *"UNKNOWN_ERROR"* = "UNKNOWN_ERROR"

*Defined in [errors.ts:4](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L4)*

___

### `Const` UNSUPPORTED_OPERATION

• **UNSUPPORTED_OPERATION**: *"UNSUPPORTED_OPERATION"* = "UNSUPPORTED_OPERATION"

*Defined in [errors.ts:57](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L57)*

___

### `Let` _censorErrors

• **_censorErrors**: *boolean* = false

*Defined in [errors.ts:62](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L62)*

___

### `Let` _permanentCensorErrors

• **_permanentCensorErrors**: *boolean* = false

*Defined in [errors.ts:60](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L60)*

___

### `Const` secp256k1

• **secp256k1**: *EC* =  elliptic.ec('secp256k1')

*Defined in [keyTool.ts:10](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/keyTool.ts#L10)*

___

### `Const` tHRP

• **tHRP**: *"tone"* = "tone"

*Defined in [bech32.ts:126](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bech32.ts#L126)*

## Functions

###  _decode

▸ **_decode**(`data`: Uint8Array, `offset`: number): *object*

*Defined in [rlp.ts:92](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/rlp.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | Uint8Array |
`offset` | number |

**Returns:** *object*

* **consumed**: *number*

* **result**: *any*

___

###  _decodeChildren

▸ **_decodeChildren**(`data`: Uint8Array, `offset`: number, `childOffset`: number, `length`: number): *[Decoded](interfaces/decoded.md)*

*Defined in [rlp.ts:69](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/rlp.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | Uint8Array |
`offset` | number |
`childOffset` | number |
`length` | number |

**Returns:** *[Decoded](interfaces/decoded.md)*

___

###  _encode

▸ **_encode**(`object`: any[] | string): *number[]*

*Defined in [rlp.ts:26](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/rlp.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any[] &#124; string |

**Returns:** *number[]*

___

###  addSlice

▸ **addSlice**(`array`: Uint8Array): *Uint8Array*

*Defined in [bytes.ts:27](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bytes.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`array` | Uint8Array |

**Returns:** *Uint8Array*

___

###  arrayify

▸ **arrayify**(`value`: [Arrayish](globals.md#arrayish) | [Hexable](interfaces/hexable.md)): *Uint8Array | null*

*Defined in [bytes.ts:65](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bytes.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Arrayish](globals.md#arrayish) &#124; [Hexable](interfaces/hexable.md) |

**Returns:** *Uint8Array | null*

___

###  arrayifyInteger

▸ **arrayifyInteger**(`value`: number): *number[]*

*Defined in [rlp.ts:5](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/rlp.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *number[]*

___

### `Const` bech32Decode

▸ **bech32Decode**(`bechString`: string): *null | object*

*Defined in [bech32.ts:84](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bech32.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`bechString` | string |

**Returns:** *null | object*

___

### `Const` bech32Encode

▸ **bech32Encode**(`hrp`: string, `data`: Buffer): *string*

*Defined in [bech32.ts:74](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bech32.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`hrp` | string |
`data` | Buffer |

**Returns:** *string*

___

###  bytesPadLeft

▸ **bytesPadLeft**(`value`: string, `byteLength`: number): *string*

*Defined in [bytes.ts:339](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bytes.ts#L339)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`byteLength` | number |

**Returns:** *string*

___

###  bytesPadRight

▸ **bytesPadRight**(`value`: string, `byteLength`: number): *string*

*Defined in [bytes.ts:357](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bytes.ts#L357)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`byteLength` | number |

**Returns:** *string*

___

###  checkArgumentCount

▸ **checkArgumentCount**(`count`: number, `expectedCount`: number, `suffix?`: undefined | string): *void*

*Defined in [errors.ts:114](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |
`expectedCount` | number |
`suffix?` | undefined &#124; string |

**Returns:** *void*

___

###  checkNew

▸ **checkNew**(`self`: any, `kind`: any): *void*

*Defined in [errors.ts:108](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L108)*

**Parameters:**

Name | Type |
------ | ------ |
`self` | any |
`kind` | any |

**Returns:** *void*

___

###  checkNormalize

▸ **checkNormalize**(): *void*

*Defined in [errors.ts:147](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L147)*

**Returns:** *void*

___

###  concat

▸ **concat**(`objects`: [Arrayish](globals.md#arrayish)[]): *Uint8Array*

*Defined in [bytes.ts:121](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bytes.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`objects` | [Arrayish](globals.md#arrayish)[] |

**Returns:** *Uint8Array*

___

### `Const` convertBits

▸ **convertBits**(`data`: Buffer, `fromWidth`: number, `toWidth`: number, `pad`: boolean): *null | Buffer*

*Defined in [bech32.ts:143](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bech32.ts#L143)*

convertBits

groups buffers of a certain width to buffers of the desired width.

For example, converts byte buffers to buffers of maximum 5 bit numbers,
padding those numbers as necessary. Necessary for encoding Ethereum-style
addresses as bech32 ones.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`data` | Buffer | - |
`fromWidth` | number | - |
`toWidth` | number | - |
`pad` | boolean | true |

**Returns:** *null | Buffer*

___

###  createChecksum

▸ **createChecksum**(`hrp`: string, `data`: Buffer): *Buffer*

*Defined in [bech32.ts:59](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bech32.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`hrp` | string |
`data` | Buffer |

**Returns:** *Buffer*

___

###  decode

▸ **decode**(`data`: [Arrayish](globals.md#arrayish)): *any*

*Defined in [rlp.ts:152](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/rlp.ts#L152)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Arrayish](globals.md#arrayish) |

**Returns:** *any*

___

### `Const` decrypt

▸ **decrypt**(`keystore`: [Keystore](interfaces/keystore.md), `password`: string): *Promise‹string›*

*Defined in [keystore.ts:135](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/keystore.ts#L135)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`keystore` | [Keystore](interfaces/keystore.md) | Keystore file |
`password` | string | password string |

**Returns:** *Promise‹string›*

privateKey

___

### `Const` decryptPhrase

▸ **decryptPhrase**(`keystore`: [Keystore](interfaces/keystore.md), `password`: string): *Promise‹string›*

*Defined in [keystore.ts:221](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/keystore.ts#L221)*

**Parameters:**

Name | Type |
------ | ------ |
`keystore` | [Keystore](interfaces/keystore.md) |
`password` | string |

**Returns:** *Promise‹string›*

___

###  encode

▸ **encode**(`object`: any): *string*

*Defined in [rlp.ts:60](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/rlp.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *string*

___

### `Const` encrypt

▸ **encrypt**(`privateKey`: string, `password`: string, `options?`: [EncryptOptions](interfaces/encryptoptions.md)): *Promise‹string›*

*Defined in [keystore.ts:63](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/keystore.ts#L63)*

This method will map the current Account object to V3Keystore object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`privateKey` | string | - |
`password` | string | - |
`options?` | [EncryptOptions](interfaces/encryptoptions.md) |   |

**Returns:** *Promise‹string›*

___

### `Const` encryptPhrase

▸ **encryptPhrase**(`phrase`: string, `password`: string, `options?`: [EncryptOptions](interfaces/encryptoptions.md)): *Promise‹string›*

*Defined in [keystore.ts:167](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/keystore.ts#L167)*

**Parameters:**

Name | Type |
------ | ------ |
`phrase` | string |
`password` | string |
`options?` | [EncryptOptions](interfaces/encryptoptions.md) |

**Returns:** *Promise‹string›*

___

### `Const` fromBech32

▸ **fromBech32**(`address`: string, `useHRP`: string): *string*

*Defined in [bech32.ts:214](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bech32.ts#L214)*

fromBech32Address

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`address` | string | - | a valid Harmony bech32 address |
`useHRP` | string |  HRP | - |

**Returns:** *string*

a canonical 20-byte Ethereum-style address

___

### `Const` generatePrivateKey

▸ **generatePrivateKey**(): *string*

*Defined in [keyTool.ts:17](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/keyTool.ts#L17)*

**Returns:** *string*

___

###  getAddress

▸ **getAddress**(`address`: string): *[HarmonyAddress](classes/harmonyaddress.md)*

*Defined in [address.ts:78](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/address.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *[HarmonyAddress](classes/harmonyaddress.md)*

___

### `Const` getAddressFromPrivateKey

▸ **getAddressFromPrivateKey**(`privateKey`: string): *string*

*Defined in [keyTool.ts:45](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/keyTool.ts#L45)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`privateKey` | string | private key string |

**Returns:** *string*

address with `length = 40`

___

### `Const` getAddressFromPublicKey

▸ **getAddressFromPublicKey**(`publicKey`: string): *string*

*Defined in [keyTool.ts:66](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/keyTool.ts#L66)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`publicKey` | string | public key string |

**Returns:** *string*

address with `length = 40`

___

###  getContractAddress

▸ **getContractAddress**(`from`: string, `nonce`: number): *string*

*Defined in [keyTool.ts:130](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/keyTool.ts#L130)*

**Parameters:**

Name | Type |
------ | ------ |
`from` | string |
`nonce` | number |

**Returns:** *string*

___

###  getDerivedKey

▸ **getDerivedKey**(`key`: Buffer, `kdf`: [KDF](globals.md#kdf), `params`: [KDFParams](globals.md#kdfparams)): *Promise‹Buffer›*

*Defined in [keystore.ts:32](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/keystore.ts#L32)*

getDerivedKey

NOTE: only scrypt and pbkdf2 are supported.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | Buffer | the passphrase |
`kdf` | [KDF](globals.md#kdf) | the key derivation function to be used |
`params` | [KDFParams](globals.md#kdfparams) | params for the kdf  |

**Returns:** *Promise‹Buffer›*

___

### `Const` getPubkeyFromPrivateKey

▸ **getPubkeyFromPrivateKey**(`privateKey`: string): *string*

*Defined in [keyTool.ts:36](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/keyTool.ts#L36)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`privateKey` | string | private key String |

**Returns:** *string*

___

### `Const` getPublic

▸ **getPublic**(`privateKey`: string, `compress?`: undefined | false | true): *string*

*Defined in [keyTool.ts:52](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/keyTool.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`privateKey` | string |
`compress?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  hexDataLength

▸ **hexDataLength**(`data`: string): *null | number*

*Defined in [bytes.ts:279](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bytes.ts#L279)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | string |

**Returns:** *null | number*

___

###  hexDataSlice

▸ **hexDataSlice**(`data`: string, `offset`: number, `endOffset?`: undefined | number): *string*

*Defined in [bytes.ts:286](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bytes.ts#L286)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | string |
`offset` | number |
`endOffset?` | undefined &#124; number |

**Returns:** *string*

___

###  hexStripZeros

▸ **hexStripZeros**(`value`: string): *string*

*Defined in [bytes.ts:312](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bytes.ts#L312)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *string*

___

### `Const` hexToByteArray

▸ **hexToByteArray**(`hex`: string): *Uint8Array*

*Defined in [bytes.ts:452](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bytes.ts#L452)*

hexToByteArray

Convers a hex string to a Uint8Array

**Parameters:**

Name | Type |
------ | ------ |
`hex` | string |

**Returns:** *Uint8Array*

___

### `Const` hexToIntArray

▸ **hexToIntArray**(`hex`: string): *number[]*

*Defined in [bytes.ts:468](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bytes.ts#L468)*

hexToIntArray

**Parameters:**

Name | Type |
------ | ------ |
`hex` | string |

**Returns:** *number[]*

___

###  hexZeroPad

▸ **hexZeroPad**(`value`: string, `length`: number): *string*

*Defined in [bytes.ts:325](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bytes.ts#L325)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`length` | number |

**Returns:** *string*

___

###  hexlify

▸ **hexlify**(`value`: [Arrayish](globals.md#arrayish) | [Hexable](interfaces/hexable.md) | number): *string*

*Defined in [bytes.ts:199](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bytes.ts#L199)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Arrayish](globals.md#arrayish) &#124; [Hexable](interfaces/hexable.md) &#124; number |

**Returns:** *string*

___

### `Const` hrpExpand

▸ **hrpExpand**(`hrp`: string): *Buffer*

*Defined in [bech32.ts:42](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bech32.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`hrp` | string |

**Returns:** *Buffer*

___

###  info

▸ **info**(...`args`: [any, Array]): *void*

*Defined in [errors.ts:203](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L203)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [any, Array] |

**Returns:** *void*

___

###  isArrayish

▸ **isArrayish**(`value`: any): *boolean*

*Defined in [bytes.ts:43](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bytes.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *boolean*

___

### `Const` isHex

▸ **isHex**(`str`: string): *boolean*

*Defined in [bytes.ts:492](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bytes.ts#L492)*

isHex

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`str` | string | string to be tested |

**Returns:** *boolean*

___

###  isHexString

▸ **isHexString**(`value`: any, `length?`: undefined | number): *boolean*

*Defined in [bytes.ts:187](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bytes.ts#L187)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`length?` | undefined &#124; number |

**Returns:** *boolean*

___

###  isHexable

▸ **isHexable**(`value`: any): *boolean*

*Defined in [bytes.ts:23](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bytes.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *boolean*

___

###  isSignature

▸ **isSignature**(`value`: any): *boolean*

*Defined in [bytes.ts:376](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bytes.ts#L376)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *boolean*

___

### `Const` isValidChecksumAddress

▸ **isValidChecksumAddress**(`address`: string): *boolean*

*Defined in [keyTool.ts:183](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/keyTool.ts#L183)*

isValidChecksumAddress

takes hex-encoded string and returns boolean if address is checksumed

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *boolean*

___

###  joinSignature

▸ **joinSignature**(`signature`: [Signature](interfaces/signature.md)): *string*

*Defined in [bytes.ts:432](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bytes.ts#L432)*

**Parameters:**

Name | Type |
------ | ------ |
`signature` | [Signature](interfaces/signature.md) |

**Returns:** *string*

___

###  keccak256

▸ **keccak256**(`data`: [Arrayish](globals.md#arrayish)): *string*

*Defined in [keccak256.ts:6](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/keccak256.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Arrayish](globals.md#arrayish) |

**Returns:** *string*

___

###  log

▸ **log**(`logLevel`: string, `args`: [any, Array]): *void*

*Defined in [errors.ts:192](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L192)*

**Parameters:**

Name | Type |
------ | ------ |
`logLevel` | string |
`args` | [any, Array] |

**Returns:** *void*

___

###  padZeros

▸ **padZeros**(`value`: [Arrayish](globals.md#arrayish), `length`: number): *Uint8Array*

*Defined in [bytes.ts:173](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bytes.ts#L173)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Arrayish](globals.md#arrayish) |
`length` | number |

**Returns:** *Uint8Array*

___

### `Const` polymod

▸ **polymod**(`values`: Buffer): *number*

*Defined in [bech32.ts:27](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bech32.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | Buffer |

**Returns:** *number*

___

### `Const` randomBytes

▸ **randomBytes**(`bytes`: number): *string*

*Defined in [random.ts:8](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/random.ts#L8)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bytes` | number | bytes number to generate |

**Returns:** *string*

ramdom hex string

___

###  recoverAddress

▸ **recoverAddress**(`digest`: bytes.Arrayish | string, `signature`: [Signature](interfaces/signature.md) | string): *string*

*Defined in [keyTool.ts:166](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/keyTool.ts#L166)*

**Parameters:**

Name | Type |
------ | ------ |
`digest` | bytes.Arrayish &#124; string |
`signature` | [Signature](interfaces/signature.md) &#124; string |

**Returns:** *string*

___

###  recoverPublicKey

▸ **recoverPublicKey**(`digest`: bytes.Arrayish | string, `signature`: [Signature](interfaces/signature.md) | string): *string*

*Defined in [keyTool.ts:147](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/keyTool.ts#L147)*

**Parameters:**

Name | Type |
------ | ------ |
`digest` | bytes.Arrayish &#124; string |
`signature` | [Signature](interfaces/signature.md) &#124; string |

**Returns:** *string*

___

###  setCensorship

▸ **setCensorship**(`censorship`: boolean, `permanent?`: undefined | false | true): *void*

*Defined in [errors.ts:136](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L136)*

**Parameters:**

Name | Type |
------ | ------ |
`censorship` | boolean |
`permanent?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  setLogLevel

▸ **setLogLevel**(`logLevel`: string): *void*

*Defined in [errors.ts:183](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L183)*

**Parameters:**

Name | Type |
------ | ------ |
`logLevel` | string |

**Returns:** *void*

___

###  sha3_256

▸ **sha3_256**(`data`: [Arrayish](globals.md#arrayish)): *string*

*Defined in [keccak256.ts:14](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/keccak256.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Arrayish](globals.md#arrayish) |

**Returns:** *string*

___

### `Const` sign

▸ **sign**(`digest`: bytes.Arrayish | string, `privateKey`: string): *[Signature](interfaces/signature.md)*

*Defined in [keyTool.ts:108](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/keyTool.ts#L108)*

**Parameters:**

Name | Type |
------ | ------ |
`digest` | bytes.Arrayish &#124; string |
`privateKey` | string |

**Returns:** *[Signature](interfaces/signature.md)*

___

###  splitSignature

▸ **splitSignature**(`signature`: [Arrayish](globals.md#arrayish) | [Signature](interfaces/signature.md)): *[Signature](interfaces/signature.md)*

*Defined in [bytes.ts:380](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bytes.ts#L380)*

**Parameters:**

Name | Type |
------ | ------ |
`signature` | [Arrayish](globals.md#arrayish) &#124; [Signature](interfaces/signature.md) |

**Returns:** *[Signature](interfaces/signature.md)*

___

###  stripZeros

▸ **stripZeros**(`value`: [Arrayish](globals.md#arrayish)): *Uint8Array*

*Defined in [bytes.ts:148](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bytes.ts#L148)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Arrayish](globals.md#arrayish) |

**Returns:** *Uint8Array*

___

###  throwError

▸ **throwError**(`message`: string, `code`: string | null | undefined, `params`: any): *never*

*Defined in [errors.ts:65](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`code` | string &#124; null &#124; undefined |
`params` | any |

**Returns:** *never*

___

### `Const` toBech32

▸ **toBech32**(`address`: string, `useHRP`: string): *string*

*Defined in [bech32.ts:190](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bech32.ts#L190)*

toBech32Address

bech32Encodes a canonical 20-byte Ethereum-style address as a bech32 Harmony
address.

The expected format is one1<address><checksum> where address and checksum
are the result of bech32 encoding a Buffer containing the address bytes.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`address` | string | - |
`useHRP` | string |  HRP |

**Returns:** *string*

38 char bech32 bech32Encoded Harmony address

___

### `Const` toChecksumAddress

▸ **toChecksumAddress**(`address`: string): *string*

*Defined in [keyTool.ts:78](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/keyTool.ts#L78)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`address` | string | raw address |

**Returns:** *string*

checksumed address

___

###  unarrayifyInteger

▸ **unarrayifyInteger**(`data`: Uint8Array, `offset`: number, `length`: number): *number*

*Defined in [rlp.ts:14](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/rlp.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | Uint8Array |
`offset` | number |
`length` | number |

**Returns:** *number*

___

### `Const` validatePrivateKey

▸ **validatePrivateKey**(`privateKey`: string): *boolean*

*Defined in [keyTool.ts:187](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/keyTool.ts#L187)*

**Parameters:**

Name | Type |
------ | ------ |
`privateKey` | string |

**Returns:** *boolean*

___

###  verifyChecksum

▸ **verifyChecksum**(`hrp`: string, `data`: Buffer): *boolean*

*Defined in [bech32.ts:55](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/bech32.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`hrp` | string |
`data` | Buffer |

**Returns:** *boolean*

___

###  verifySignature

▸ **verifySignature**(`digest`: bytes.Arrayish, `signature`: [Signature](interfaces/signature.md), `publicKey`: string): *boolean*

*Defined in [keyTool.ts:139](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/keyTool.ts#L139)*

**Parameters:**

Name | Type |
------ | ------ |
`digest` | bytes.Arrayish |
`signature` | [Signature](interfaces/signature.md) |
`publicKey` | string |

**Returns:** *boolean*

___

###  warn

▸ **warn**(...`args`: [any, Array]): *void*

*Defined in [errors.ts:199](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L199)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [any, Array] |

**Returns:** *void*

## Object literals

### `Const` LogLevels

### ▪ **LogLevels**: *object*

*Defined in [errors.ts:173](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L173)*

###  debug

• **debug**: *number* = 1

*Defined in [errors.ts:174](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L174)*

###  default

• **default**: *number* = 2

*Defined in [errors.ts:175](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L175)*

###  error

• **error**: *number* = 4

*Defined in [errors.ts:178](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L178)*

###  info

• **info**: *number* = 2

*Defined in [errors.ts:176](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L176)*

###  off

• **off**: *number* = 5

*Defined in [errors.ts:179](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L179)*

###  warn

• **warn**: *number* = 3

*Defined in [errors.ts:177](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/33571de/packages/harmony-crypto/src/errors.ts#L177)*
