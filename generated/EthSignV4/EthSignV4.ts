// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AdminChanged extends ethereum.Event {
  get params(): AdminChanged__Params {
    return new AdminChanged__Params(this);
  }
}

export class AdminChanged__Params {
  _event: AdminChanged;

  constructor(event: AdminChanged) {
    this._event = event;
  }

  get previousAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class BeaconUpgraded extends ethereum.Event {
  get params(): BeaconUpgraded__Params {
    return new BeaconUpgraded__Params(this);
  }
}

export class BeaconUpgraded__Params {
  _event: BeaconUpgraded;

  constructor(event: BeaconUpgraded) {
    this._event = event;
  }

  get beacon(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ContractHidden extends ethereum.Event {
  get params(): ContractHidden__Params {
    return new ContractHidden__Params(this);
  }
}

export class ContractHidden__Params {
  _event: ContractHidden;

  constructor(event: ContractHidden) {
    this._event = event;
  }

  get contractId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get party(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ContractSigningCompleted extends ethereum.Event {
  get params(): ContractSigningCompleted__Params {
    return new ContractSigningCompleted__Params(this);
  }
}

export class ContractSigningCompleted__Params {
  _event: ContractSigningCompleted;

  constructor(event: ContractSigningCompleted) {
    this._event = event;
  }

  get contractId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SignerSigned extends ethereum.Event {
  get params(): SignerSigned__Params {
    return new SignerSigned__Params(this);
  }
}

export class SignerSigned__Params {
  _event: SignerSigned;

  constructor(event: SignerSigned) {
    this._event = event;
  }

  get contractId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get signer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get ipfsCIDv0(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class SignersAdded extends ethereum.Event {
  get params(): SignersAdded__Params {
    return new SignersAdded__Params(this);
  }
}

export class SignersAdded__Params {
  _event: SignersAdded;

  constructor(event: SignersAdded) {
    this._event = event;
  }

  get contractId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get signers(): Array<Address> {
    return this._event.parameters[1].value.toAddressArray();
  }
}

export class Upgraded extends ethereum.Event {
  get params(): Upgraded__Params {
    return new Upgraded__Params(this);
  }
}

export class Upgraded__Params {
  _event: Upgraded;

  constructor(event: Upgraded) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class EthSignV4__decodeSignerDataResult {
  value0: Address;
  value1: i32;
  value2: i32;

  constructor(value0: Address, value1: i32, value2: i32) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set(
      "value1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value1))
    );
    map.set(
      "value2",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value2))
    );
    return map;
  }
}

export class EthSignV4__getContractResultValue0Struct extends ethereum.Tuple {
  get strictMode(): boolean {
    return this[0].toBoolean();
  }

  get expiry(): BigInt {
    return this[1].toBigInt();
  }

  get rawDataHash(): Bytes {
    return this[2].toBytes();
  }

  get ipfsCIDv0(): Bytes {
    return this[3].toBytes();
  }

  get signersLeftPerStep(): Array<i32> {
    return this[4].toI32Array();
  }

  get packedSignersAndStatus(): Array<BigInt> {
    return this[5].toBigIntArray();
  }
}

export class EthSignV4 extends ethereum.SmartContract {
  static bind(address: Address): EthSignV4 {
    return new EthSignV4("EthSignV4", address);
  }

  STATUS_BITMASK(): i32 {
    let result = super.call("STATUS_BITMASK", "STATUS_BITMASK():(uint8)", []);

    return result[0].toI32();
  }

  try_STATUS_BITMASK(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "STATUS_BITMASK",
      "STATUS_BITMASK():(uint8)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  STEP_BITMASK(): i32 {
    let result = super.call("STEP_BITMASK", "STEP_BITMASK():(uint8)", []);

    return result[0].toI32();
  }

  try_STEP_BITMASK(): ethereum.CallResult<i32> {
    let result = super.tryCall("STEP_BITMASK", "STEP_BITMASK():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  chainId(): BigInt {
    let result = super.call("chainId", "chainId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_chainId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("chainId", "chainId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  create(
    strictMode_: boolean,
    expiry_: BigInt,
    rawDataHash_: Bytes,
    ipfsCIDv0_: Bytes,
    signersPerStep: Array<i32>,
    signers: Array<Address>,
    signersData: Array<BigInt>
  ): Bytes {
    let result = super.call(
      "create",
      "create(bool,uint32,bytes32,bytes32,uint8[],address[],uint168[]):(bytes32)",
      [
        ethereum.Value.fromBoolean(strictMode_),
        ethereum.Value.fromUnsignedBigInt(expiry_),
        ethereum.Value.fromFixedBytes(rawDataHash_),
        ethereum.Value.fromFixedBytes(ipfsCIDv0_),
        ethereum.Value.fromI32Array(signersPerStep),
        ethereum.Value.fromAddressArray(signers),
        ethereum.Value.fromUnsignedBigIntArray(signersData)
      ]
    );

    return result[0].toBytes();
  }

  try_create(
    strictMode_: boolean,
    expiry_: BigInt,
    rawDataHash_: Bytes,
    ipfsCIDv0_: Bytes,
    signersPerStep: Array<i32>,
    signers: Array<Address>,
    signersData: Array<BigInt>
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "create",
      "create(bool,uint32,bytes32,bytes32,uint8[],address[],uint168[]):(bytes32)",
      [
        ethereum.Value.fromBoolean(strictMode_),
        ethereum.Value.fromUnsignedBigInt(expiry_),
        ethereum.Value.fromFixedBytes(rawDataHash_),
        ethereum.Value.fromFixedBytes(ipfsCIDv0_),
        ethereum.Value.fromI32Array(signersPerStep),
        ethereum.Value.fromAddressArray(signers),
        ethereum.Value.fromUnsignedBigIntArray(signersData)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  decodeSignerData(signerData: BigInt): EthSignV4__decodeSignerDataResult {
    let result = super.call(
      "decodeSignerData",
      "decodeSignerData(uint168):(address,uint8,uint8)",
      [ethereum.Value.fromUnsignedBigInt(signerData)]
    );

    return new EthSignV4__decodeSignerDataResult(
      result[0].toAddress(),
      result[1].toI32(),
      result[2].toI32()
    );
  }

  try_decodeSignerData(
    signerData: BigInt
  ): ethereum.CallResult<EthSignV4__decodeSignerDataResult> {
    let result = super.tryCall(
      "decodeSignerData",
      "decodeSignerData(uint168):(address,uint8,uint8)",
      [ethereum.Value.fromUnsignedBigInt(signerData)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new EthSignV4__decodeSignerDataResult(
        value[0].toAddress(),
        value[1].toI32(),
        value[2].toI32()
      )
    );
  }

  encodeSignerData(signer: Address, step: i32): BigInt {
    let result = super.call(
      "encodeSignerData",
      "encodeSignerData(address,uint8):(uint168)",
      [
        ethereum.Value.fromAddress(signer),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(step))
      ]
    );

    return result[0].toBigInt();
  }

  try_encodeSignerData(
    signer: Address,
    step: i32
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "encodeSignerData",
      "encodeSignerData(address,uint8):(uint168)",
      [
        ethereum.Value.fromAddress(signer),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(step))
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getContract(contractId: Bytes): EthSignV4__getContractResultValue0Struct {
    let result = super.call(
      "getContract",
      "getContract(bytes32):((bool,uint32,bytes32,bytes32,uint8[],uint168[]))",
      [ethereum.Value.fromFixedBytes(contractId)]
    );

    return changetype<EthSignV4__getContractResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getContract(
    contractId: Bytes
  ): ethereum.CallResult<EthSignV4__getContractResultValue0Struct> {
    let result = super.tryCall(
      "getContract",
      "getContract(bytes32):((bool,uint32,bytes32,bytes32,uint8[],uint168[]))",
      [ethereum.Value.fromFixedBytes(contractId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<EthSignV4__getContractResultValue0Struct>(value[0].toTuple())
    );
  }

  hashString(str: string): Bytes {
    let result = super.call("hashString", "hashString(string):(bytes32)", [
      ethereum.Value.fromString(str)
    ]);

    return result[0].toBytes();
  }

  try_hashString(str: string): ethereum.CallResult<Bytes> {
    let result = super.tryCall("hashString", "hashString(string):(bytes32)", [
      ethereum.Value.fromString(str)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  isTrustedForwarder(forwarder: Address): boolean {
    let result = super.call(
      "isTrustedForwarder",
      "isTrustedForwarder(address):(bool)",
      [ethereum.Value.fromAddress(forwarder)]
    );

    return result[0].toBoolean();
  }

  try_isTrustedForwarder(forwarder: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isTrustedForwarder",
      "isTrustedForwarder(address):(bool)",
      [ethereum.Value.fromAddress(forwarder)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class CreateCall extends ethereum.Call {
  get inputs(): CreateCall__Inputs {
    return new CreateCall__Inputs(this);
  }

  get outputs(): CreateCall__Outputs {
    return new CreateCall__Outputs(this);
  }
}

export class CreateCall__Inputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get strictMode_(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }

  get expiry_(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get rawDataHash_(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get ipfsCIDv0_(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get signersPerStep(): Array<i32> {
    return this._call.inputValues[4].value.toI32Array();
  }

  get signers(): Array<Address> {
    return this._call.inputValues[5].value.toAddressArray();
  }

  get signersData(): Array<BigInt> {
    return this._call.inputValues[6].value.toBigIntArray();
  }
}

export class CreateCall__Outputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get contractId(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class HideCall extends ethereum.Call {
  get inputs(): HideCall__Inputs {
    return new HideCall__Inputs(this);
  }

  get outputs(): HideCall__Outputs {
    return new HideCall__Outputs(this);
  }
}

export class HideCall__Inputs {
  _call: HideCall;

  constructor(call: HideCall) {
    this._call = call;
  }

  get contractId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class HideCall__Outputs {
  _call: HideCall;

  constructor(call: HideCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get chainId_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get forwarder(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SignCall extends ethereum.Call {
  get inputs(): SignCall__Inputs {
    return new SignCall__Inputs(this);
  }

  get outputs(): SignCall__Outputs {
    return new SignCall__Outputs(this);
  }
}

export class SignCall__Inputs {
  _call: SignCall;

  constructor(call: SignCall) {
    this._call = call;
  }

  get contractId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get index(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get ipfsCIDv0_(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get signature(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SignCall__Outputs {
  _call: SignCall;

  constructor(call: SignCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpgradeToCall extends ethereum.Call {
  get inputs(): UpgradeToCall__Inputs {
    return new UpgradeToCall__Inputs(this);
  }

  get outputs(): UpgradeToCall__Outputs {
    return new UpgradeToCall__Outputs(this);
  }
}

export class UpgradeToCall__Inputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpgradeToCall__Outputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }
}

export class UpgradeToAndCallCall extends ethereum.Call {
  get inputs(): UpgradeToAndCallCall__Inputs {
    return new UpgradeToAndCallCall__Inputs(this);
  }

  get outputs(): UpgradeToAndCallCall__Outputs {
    return new UpgradeToAndCallCall__Outputs(this);
  }
}

export class UpgradeToAndCallCall__Inputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpgradeToAndCallCall__Outputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }
}
