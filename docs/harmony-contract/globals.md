[@harmony-js/contract](globals.md)

# @harmony-js/contract

## Index

### Enumerations

* [ContractStatus](enums/contractstatus.md)
* [UnicodeNormalizationForm](enums/unicodenormalizationform.md)

### Classes

* [AbiCoder](classes/abicoder.md)
* [AbiCoderClass](classes/abicoderclass.md)
* [AbiItem](classes/abiitem.md)
* [AbiModel](classes/abimodel.md)
* [Coder](classes/coder.md)
* [CoderAddress](classes/coderaddress.md)
* [CoderAnonymous](classes/coderanonymous.md)
* [CoderArray](classes/coderarray.md)
* [CoderBoolean](classes/coderboolean.md)
* [CoderDynamicBytes](classes/coderdynamicbytes.md)
* [CoderFixedBytes](classes/coderfixedbytes.md)
* [CoderNull](classes/codernull.md)
* [CoderNumber](classes/codernumber.md)
* [CoderString](classes/coderstring.md)
* [CoderTuple](classes/codertuple.md)
* [Contract](classes/contract.md)
* [ContractFactory](classes/contractfactory.md)
* [ContractMethod](classes/contractmethod.md)
* [EventFactory](classes/eventfactory.md)
* [EventMethod](classes/eventmethod.md)
* [MethodFactory](classes/methodfactory.md)

### Interfaces

* [AbiInput](interfaces/abiinput.md)
* [AbiItemModel](interfaces/abiitemmodel.md)
* [AbiOutput](interfaces/abioutput.md)
* [ContractOptions](interfaces/contractoptions.md)
* [DecodedResult](interfaces/decodedresult.md)
* [EventFragment](interfaces/eventfragment.md)
* [FunctionFragment](interfaces/functionfragment.md)
* [ParamType](interfaces/paramtype.md)
* [ParseNode](interfaces/parsenode.md)
* [ParseState](interfaces/parsestate.md)

### Type aliases

* [CoerceFunc](globals.md#coercefunc)

### Variables

* [HashZero](globals.md#const-hashzero)
* [MaxUint256](globals.md#const-maxuint256)
* [NegativeOne](globals.md#const-negativeone)
* [One](globals.md#const-one)
* [Zero](globals.md#const-zero)
* [defaultAbiCoder](globals.md#const-defaultabicoder)
* [paramTypeArray](globals.md#const-paramtypearray)
* [paramTypeBytes](globals.md#const-paramtypebytes)
* [paramTypeNumber](globals.md#const-paramtypenumber)
* [regexIdentifier](globals.md#const-regexidentifier)
* [regexParen](globals.md#const-regexparen)
* [uint256Coder](globals.md#const-uint256coder)

### Functions

* [_decodeDynamicBytes](globals.md#_decodedynamicbytes)
* [_encodeDynamicBytes](globals.md#_encodedynamicbytes)
* [abiMapper](globals.md#const-abimapper)
* [alignSize](globals.md#alignsize)
* [bnToString](globals.md#bntostring)
* [decode](globals.md#const-decode)
* [deepCopy](globals.md#deepcopy)
* [defaultCoerceFunc](globals.md#const-defaultcoercefunc)
* [eventFilterEncoder](globals.md#const-eventfilterencoder)
* [flattenTypes](globals.md#const-flattentypes)
* [formatBytes32String](globals.md#formatbytes32string)
* [formatParamType](globals.md#formatparamtype)
* [formatSignature](globals.md#formatsignature)
* [getParamCoder](globals.md#getparamcoder)
* [getTupleParamCoder](globals.md#gettupleparamcoder)
* [inputAddressFormatter](globals.md#const-inputaddressformatter)
* [inputBlockNumberFormatter](globals.md#const-inputblocknumberformatter)
* [inputLogFormatter](globals.md#const-inputlogformatter)
* [isConstant](globals.md#const-isconstant)
* [isPayable](globals.md#const-ispayable)
* [isPredefinedBlockNumber](globals.md#const-ispredefinedblocknumber)
* [isType](globals.md#istype)
* [jsonInterfaceMethodToString](globals.md#const-jsoninterfacemethodtostring)
* [methodEncoder](globals.md#const-methodencoder)
* [outputLogFormatter](globals.md#const-outputlogformatter)
* [pack](globals.md#pack)
* [parseBytes32String](globals.md#parsebytes32string)
* [parseParam](globals.md#parseparam)
* [parseParamType](globals.md#parseparamtype)
* [parseSignature](globals.md#parsesignature)
* [parseSignatureEvent](globals.md#parsesignatureevent)
* [parseSignatureFunction](globals.md#parsesignaturefunction)
* [shallowCopy](globals.md#shallowcopy)
* [splitNesting](globals.md#splitnesting)
* [toTopic](globals.md#const-totopic)
* [toUtf8Bytes](globals.md#toutf8bytes)
* [toUtf8String](globals.md#toutf8string)
* [unpack](globals.md#unpack)
* [verifyType](globals.md#verifytype)

### Object literals

* [opaque](globals.md#const-opaque)
* [paramTypeSimple](globals.md#const-paramtypesimple)

## Type aliases

###  CoerceFunc

Ƭ **CoerceFunc**: *function*

*Defined in [abi/abiCoder.ts:35](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L35)*

#### Type declaration:

▸ (`type`: string, `value`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`value` | any |

## Variables

### `Const` HashZero

• **HashZero**: *"0x0000000000000000000000000000000000000000000000000000000000000000"* = "0x0000000000000000000000000000000000000000000000000000000000000000"

*Defined in [abi/abiCoder.ts:28](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L28)*

___

### `Const` MaxUint256

• **MaxUint256**: *BN* =  hexToBN(
  '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
)

*Defined in [abi/abiCoder.ts:31](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L31)*

___

### `Const` NegativeOne

• **NegativeOne**: *BN* =  new BN(-1)

*Defined in [abi/abiCoder.ts:24](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L24)*

___

### `Const` One

• **One**: *BN* =  new BN(1)

*Defined in [abi/abiCoder.ts:25](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L25)*

___

### `Const` Zero

• **Zero**: *BN* =  new BN(0)

*Defined in [abi/abiCoder.ts:27](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L27)*

___

### `Const` defaultAbiCoder

• **defaultAbiCoder**: *[AbiCoder](classes/abicoder.md)* =  new AbiCoder()

*Defined in [abi/abiCoder.ts:1568](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L1568)*

___

### `Const` paramTypeArray

• **paramTypeArray**: *RegExp* =  new RegExp(/^(.*)\[([0-9]*)\]$/)

*Defined in [abi/abiCoder.ts:74](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L74)*

___

### `Const` paramTypeBytes

• **paramTypeBytes**: *RegExp* =  new RegExp(/^bytes([0-9]*)$/)

*Defined in [abi/abiCoder.ts:72](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L72)*

___

### `Const` paramTypeNumber

• **paramTypeNumber**: *RegExp* =  new RegExp(/^(u?int)([0-9]*)$/)

*Defined in [abi/abiCoder.ts:73](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L73)*

___

### `Const` regexIdentifier

• **regexIdentifier**: *RegExp* =  new RegExp('^[A-Za-z_][A-Za-z0-9_]*$')

*Defined in [abi/abiCoder.ts:95](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L95)*

___

### `Const` regexParen

• **regexParen**: *RegExp* =  new RegExp('^([^)(]*)\\((.*)\\)([^)(]*)$')

*Defined in [abi/abiCoder.ts:94](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L94)*

___

### `Const` uint256Coder

• **uint256Coder**: *[CoderNumber](classes/codernumber.md)* =  new CoderNumber(
  (type: string, value: any) => {
    return value;
  },
  32,
  false,
  'none',
)

*Defined in [abi/abiCoder.ts:627](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L627)*

## Functions

###  _decodeDynamicBytes

▸ **_decodeDynamicBytes**(`data`: Uint8Array, `offset`: number, `localName`: string): *[DecodedResult](interfaces/decodedresult.md)*

*Defined in [abi/abiCoder.ts:766](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L766)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | Uint8Array |
`offset` | number |
`localName` | string |

**Returns:** *[DecodedResult](interfaces/decodedresult.md)*

___

###  _encodeDynamicBytes

▸ **_encodeDynamicBytes**(`value`: Uint8Array): *Uint8Array*

*Defined in [abi/abiCoder.ts:759](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L759)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Uint8Array |

**Returns:** *Uint8Array*

___

### `Const` abiMapper

▸ **abiMapper**(`abi`: any[], `abiCoder`: [AbiCoderClass](classes/abicoderclass.md)): *AbiModel*

*Defined in [utils/mapper.ts:8](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/utils/mapper.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`abi` | any[] |
`abiCoder` | [AbiCoderClass](classes/abicoderclass.md) |

**Returns:** *AbiModel*

___

###  alignSize

▸ **alignSize**(`size`: number): *number*

*Defined in [abi/abiCoder.ts:855](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L855)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *number*

___

###  bnToString

▸ **bnToString**(`result`: any): *string | any*

*Defined in [abi/utils.ts:49](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/utils.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`result` | any |

**Returns:** *string | any*

___

### `Const` decode

▸ **decode**(`abiCoder`: [AbiCoderClass](classes/abicoderclass.md), `abiItemModel`: [AbiItemModel](interfaces/abiitemmodel.md), `response`: any): *any*

*Defined in [utils/decoder.ts:4](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/utils/decoder.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`abiCoder` | [AbiCoderClass](classes/abicoderclass.md) |
`abiItemModel` | [AbiItemModel](interfaces/abiitemmodel.md) |
`response` | any |

**Returns:** *any*

___

###  deepCopy

▸ **deepCopy**(`object`: any, `frozen?`: undefined | false | true): *any*

*Defined in [abi/abiCoder.ts:1452](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L1452)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |
`frozen?` | undefined &#124; false &#124; true |

**Returns:** *any*

___

### `Const` defaultCoerceFunc

▸ **defaultCoerceFunc**(`type`: string, `value`: any): *any*

*Defined in [abi/abiCoder.ts:76](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`value` | any |

**Returns:** *any*

___

### `Const` eventFilterEncoder

▸ **eventFilterEncoder**(`abiCoder`: [AbiCoderClass](classes/abicoderclass.md), `abiItemModel`: [AbiItemModel](interfaces/abiitemmodel.md), `filter`: any): *any[]*

*Defined in [utils/encoder.ts:36](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/utils/encoder.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`abiCoder` | [AbiCoderClass](classes/abicoderclass.md) |
`abiItemModel` | [AbiItemModel](interfaces/abiitemmodel.md) |
`filter` | any |

**Returns:** *any[]*

___

### `Const` flattenTypes

▸ **flattenTypes**(`includeTuple`: any, `puts`: any[]): *any[]*

*Defined in [abi/utils.ts:12](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/utils.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`includeTuple` | any |
`puts` | any[] |

**Returns:** *any[]*

___

###  formatBytes32String

▸ **formatBytes32String**(`text`: string): *string*

*Defined in [abi/abiCoder.ts:1399](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L1399)*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *string*

___

###  formatParamType

▸ **formatParamType**(`paramType`: [ParamType](interfaces/paramtype.md)): *string*

*Defined in [abi/abiCoder.ts:346](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L346)*

**Parameters:**

Name | Type |
------ | ------ |
`paramType` | [ParamType](interfaces/paramtype.md) |

**Returns:** *string*

___

###  formatSignature

▸ **formatSignature**(`fragment`: [EventFragment](interfaces/eventfragment.md) | [FunctionFragment](interfaces/functionfragment.md)): *string*

*Defined in [abi/abiCoder.ts:442](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L442)*

**Parameters:**

Name | Type |
------ | ------ |
`fragment` | [EventFragment](interfaces/eventfragment.md) &#124; [FunctionFragment](interfaces/functionfragment.md) |

**Returns:** *string*

___

###  getParamCoder

▸ **getParamCoder**(`coerceFunc`: [CoerceFunc](globals.md#coercefunc), `param`: [ParamType](interfaces/paramtype.md) | any): *any*

*Defined in [abi/abiCoder.ts:1157](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L1157)*

**Parameters:**

Name | Type |
------ | ------ |
`coerceFunc` | [CoerceFunc](globals.md#coercefunc) |
`param` | [ParamType](interfaces/paramtype.md) &#124; any |

**Returns:** *any*

___

###  getTupleParamCoder

▸ **getTupleParamCoder**(`coerceFunc`: [CoerceFunc](globals.md#coercefunc), `components`: any[], `localName`: string): *[CoderTuple](classes/codertuple.md)*

*Defined in [abi/abiCoder.ts:1141](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L1141)*

**Parameters:**

Name | Type |
------ | ------ |
`coerceFunc` | [CoerceFunc](globals.md#coercefunc) |
`components` | any[] |
`localName` | string |

**Returns:** *[CoderTuple](classes/codertuple.md)*

___

### `Const` inputAddressFormatter

▸ **inputAddressFormatter**(`address`: string): *string*

*Defined in [utils/formatter.ts:122](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/utils/formatter.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *string*

___

### `Const` inputBlockNumberFormatter

▸ **inputBlockNumberFormatter**(`blockNumber`: any): *any*

*Defined in [utils/formatter.ts:94](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/utils/formatter.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`blockNumber` | any |

**Returns:** *any*

___

### `Const` inputLogFormatter

▸ **inputLogFormatter**(`options`: any): *any*

*Defined in [utils/formatter.ts:17](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/utils/formatter.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | any |

**Returns:** *any*

___

### `Const` isConstant

▸ **isConstant**(`abiItem`: [AbiItemModel](interfaces/abiitemmodel.md)): *undefined | false | true*

*Defined in [utils/mapper.ts:87](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/utils/mapper.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`abiItem` | [AbiItemModel](interfaces/abiitemmodel.md) |

**Returns:** *undefined | false | true*

___

### `Const` isPayable

▸ **isPayable**(`abiItem`: [AbiItemModel](interfaces/abiitemmodel.md)): *boolean*

*Defined in [utils/mapper.ts:95](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/utils/mapper.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`abiItem` | [AbiItemModel](interfaces/abiitemmodel.md) |

**Returns:** *boolean*

___

### `Const` isPredefinedBlockNumber

▸ **isPredefinedBlockNumber**(`blockNumber`: string): *boolean*

*Defined in [utils/formatter.ts:114](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/utils/formatter.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`blockNumber` | string |

**Returns:** *boolean*

___

###  isType

▸ **isType**(`object`: any, `type`: string): *boolean*

*Defined in [abi/abiCoder.ts:1433](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L1433)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |
`type` | string |

**Returns:** *boolean*

___

### `Const` jsonInterfaceMethodToString

▸ **jsonInterfaceMethodToString**(`json`: any): *string*

*Defined in [abi/utils.ts:4](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/utils.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`json` | any |

**Returns:** *string*

___

### `Const` methodEncoder

▸ **methodEncoder**(`abiCoder`: [AbiCoderClass](classes/abicoderclass.md), `abiItemModel`: [AbiItemModel](interfaces/abiitemmodel.md), `deployData`: string): *string*

*Defined in [utils/encoder.ts:5](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/utils/encoder.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`abiCoder` | [AbiCoderClass](classes/abicoderclass.md) |
`abiItemModel` | [AbiItemModel](interfaces/abiitemmodel.md) |
`deployData` | string |

**Returns:** *string*

___

### `Const` outputLogFormatter

▸ **outputLogFormatter**(`log`: any): *any*

*Defined in [utils/formatter.ts:54](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/utils/formatter.ts#L54)*

Formats the output of a log

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`log` | any | object  |

**Returns:** *any*

log

___

###  pack

▸ **pack**(`coders`: [Coder](classes/coder.md)[], `values`: any[]): *Uint8Array*

*Defined in [abi/abiCoder.ts:859](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L859)*

**Parameters:**

Name | Type |
------ | ------ |
`coders` | [Coder](classes/coder.md)[] |
`values` | any[] |

**Returns:** *Uint8Array*

___

###  parseBytes32String

▸ **parseBytes32String**(`bytes`: Arrayish): *string*

*Defined in [abi/abiCoder.ts:1412](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L1412)*

**Parameters:**

Name | Type |
------ | ------ |
`bytes` | Arrayish |

**Returns:** *string*

___

###  parseParam

▸ **parseParam**(`param`: string, `allowIndexed?`: undefined | false | true): *[ParamType](interfaces/paramtype.md)*

*Defined in [abi/abiCoder.ts:125](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L125)*

**Parameters:**

Name | Type |
------ | ------ |
`param` | string |
`allowIndexed?` | undefined &#124; false &#124; true |

**Returns:** *[ParamType](interfaces/paramtype.md)*

___

###  parseParamType

▸ **parseParamType**(`type`: string): *[ParamType](interfaces/paramtype.md)*

*Defined in [abi/abiCoder.ts:341](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L341)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *[ParamType](interfaces/paramtype.md)*

___

###  parseSignature

▸ **parseSignature**(`fragment`: string): *[EventFragment](interfaces/eventfragment.md) | [FunctionFragment](interfaces/functionfragment.md)*

*Defined in [abi/abiCoder.ts:453](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L453)*

**Parameters:**

Name | Type |
------ | ------ |
`fragment` | string |

**Returns:** *[EventFragment](interfaces/eventfragment.md) | [FunctionFragment](interfaces/functionfragment.md)*

___

###  parseSignatureEvent

▸ **parseSignatureEvent**(`fragment`: string): *[EventFragment](interfaces/eventfragment.md)*

*Defined in [abi/abiCoder.ts:301](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L301)*

**Parameters:**

Name | Type |
------ | ------ |
`fragment` | string |

**Returns:** *[EventFragment](interfaces/eventfragment.md)*

___

###  parseSignatureFunction

▸ **parseSignatureFunction**(`fragment`: string): *[FunctionFragment](interfaces/functionfragment.md)*

*Defined in [abi/abiCoder.ts:350](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L350)*

**Parameters:**

Name | Type |
------ | ------ |
`fragment` | string |

**Returns:** *[FunctionFragment](interfaces/functionfragment.md)*

___

###  shallowCopy

▸ **shallowCopy**(`object`: any): *any*

*Defined in [abi/abiCoder.ts:1437](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L1437)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *any*

___

###  splitNesting

▸ **splitNesting**(`value`: string): *any[]*

*Defined in [abi/abiCoder.ts:1101](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L1101)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *any[]*

___

### `Const` toTopic

▸ **toTopic**(`value`: any): *any*

*Defined in [utils/formatter.ts:132](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/utils/formatter.ts#L132)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *any*

___

###  toUtf8Bytes

▸ **toUtf8Bytes**(`str`: string, `form`: [UnicodeNormalizationForm](enums/unicodenormalizationform.md)): *Uint8Array*

*Defined in [abi/abiCoder.ts:1231](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L1231)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`str` | string | - |
`form` | [UnicodeNormalizationForm](enums/unicodenormalizationform.md) |  UnicodeNormalizationForm.current |

**Returns:** *Uint8Array*

___

###  toUtf8String

▸ **toUtf8String**(`bytes`: Arrayish, `ignoreErrors?`: undefined | false | true): *string*

*Defined in [abi/abiCoder.ts:1274](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L1274)*

**Parameters:**

Name | Type |
------ | ------ |
`bytes` | Arrayish |
`ignoreErrors?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  unpack

▸ **unpack**(`coders`: [Coder](classes/coder.md)[], `data`: Uint8Array, `offset`: number): *[DecodedResult](interfaces/decodedresult.md)*

*Defined in [abi/abiCoder.ts:923](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L923)*

**Parameters:**

Name | Type |
------ | ------ |
`coders` | [Coder](classes/coder.md)[] |
`data` | Uint8Array |
`offset` | number |

**Returns:** *[DecodedResult](interfaces/decodedresult.md)*

___

###  verifyType

▸ **verifyType**(`type`: string): *string*

*Defined in [abi/abiCoder.ts:97](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *string*

## Object literals

### `Const` opaque

### ▪ **opaque**: *object*

*Defined in [abi/abiCoder.ts:1446](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L1446)*

###  boolean

• **boolean**: *true* = true

*Defined in [abi/abiCoder.ts:1447](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L1447)*

###  number

• **number**: *true* = true

*Defined in [abi/abiCoder.ts:1448](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L1448)*

###  string

• **string**: *true* = true

*Defined in [abi/abiCoder.ts:1449](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L1449)*

___

### `Const` paramTypeSimple

### ▪ **paramTypeSimple**: *object*

*Defined in [abi/abiCoder.ts:1134](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L1134)*

###  address

• **address**: *[CoderAddress](classes/coderaddress.md)* =  CoderAddress

*Defined in [abi/abiCoder.ts:1135](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L1135)*

###  bool

• **bool**: *[CoderBoolean](classes/coderboolean.md)* =  CoderBoolean

*Defined in [abi/abiCoder.ts:1136](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L1136)*

###  bytes

• **bytes**: *[CoderDynamicBytes](classes/coderdynamicbytes.md)* =  CoderDynamicBytes

*Defined in [abi/abiCoder.ts:1138](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L1138)*

###  string

• **string**: *[CoderString](classes/coderstring.md)* =  CoderString

*Defined in [abi/abiCoder.ts:1137](https://github.com/FireStack-Lab/Harmony-sdk-core/blob/436f358/packages/harmony-contract/src/abi/abiCoder.ts#L1137)*
