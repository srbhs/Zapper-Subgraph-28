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

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class MinterAdded extends ethereum.Event {
  get params(): MinterAdded__Params {
    return new MinterAdded__Params(this);
  }
}

export class MinterAdded__Params {
  _event: MinterAdded;

  constructor(event: MinterAdded) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class MinterRemoved extends ethereum.Event {
  get params(): MinterRemoved__Params {
    return new MinterRemoved__Params(this);
  }
}

export class MinterRemoved__Params {
  _event: MinterRemoved;

  constructor(event: MinterRemoved) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class AdminUpgradeabilityProxy extends ethereum.SmartContract {
  static bind(address: Address): AdminUpgradeabilityProxy {
    return new AdminUpgradeabilityProxy("AdminUpgradeabilityProxy", address);
  }

  allowance(owner: Address, spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );

    return result[0].toBigInt();
  }

  try_allowance(owner: Address, spender: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  approve(spender: Address, amount: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_approve(spender: Address, amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  decreaseAllowance(spender: Address, subtractedValue: BigInt): boolean {
    let result = super.call(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_decreaseAllowance(
    spender: Address,
    subtractedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  increaseAllowance(spender: Address, addedValue: BigInt): boolean {
    let result = super.call(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_increaseAllowance(
    spender: Address,
    addedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isMinter(account: Address): boolean {
    let result = super.call("isMinter", "isMinter(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_isMinter(account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isMinter", "isMinter(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  mint(account: Address, amount: BigInt): boolean {
    let result = super.call("mint", "mint(address,uint256):(bool)", [
      ethereum.Value.fromAddress(account),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_mint(account: Address, amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("mint", "mint(address,uint256):(bool)", [
      ethereum.Value.fromAddress(account),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transfer(recipient: Address, amount: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(sender: Address, recipient: Address, amount: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    sender: Address,
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class AddMinterCall extends ethereum.Call {
  get inputs(): AddMinterCall__Inputs {
    return new AddMinterCall__Inputs(this);
  }

  get outputs(): AddMinterCall__Outputs {
    return new AddMinterCall__Outputs(this);
  }
}

export class AddMinterCall__Inputs {
  _call: AddMinterCall;

  constructor(call: AddMinterCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddMinterCall__Outputs {
  _call: AddMinterCall;

  constructor(call: AddMinterCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class DecreaseAllowanceCall extends ethereum.Call {
  get inputs(): DecreaseAllowanceCall__Inputs {
    return new DecreaseAllowanceCall__Inputs(this);
  }

  get outputs(): DecreaseAllowanceCall__Outputs {
    return new DecreaseAllowanceCall__Outputs(this);
  }
}

export class DecreaseAllowanceCall__Inputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get subtractedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DecreaseAllowanceCall__Outputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class IncreaseAllowanceCall extends ethereum.Call {
  get inputs(): IncreaseAllowanceCall__Inputs {
    return new IncreaseAllowanceCall__Inputs(this);
  }

  get outputs(): IncreaseAllowanceCall__Outputs {
    return new IncreaseAllowanceCall__Outputs(this);
  }
}

export class IncreaseAllowanceCall__Inputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get addedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class IncreaseAllowanceCall__Outputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
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

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get symbol(): string {
    return this._call.inputValues[1].value.toString();
  }

  get decimals(): i32 {
    return this._call.inputValues[2].value.toI32();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class Initialize1Call extends ethereum.Call {
  get inputs(): Initialize1Call__Inputs {
    return new Initialize1Call__Inputs(this);
  }

  get outputs(): Initialize1Call__Outputs {
    return new Initialize1Call__Outputs(this);
  }
}

export class Initialize1Call__Inputs {
  _call: Initialize1Call;

  constructor(call: Initialize1Call) {
    this._call = call;
  }
}

export class Initialize1Call__Outputs {
  _call: Initialize1Call;

  constructor(call: Initialize1Call) {
    this._call = call;
  }
}

export class Initialize2Call extends ethereum.Call {
  get inputs(): Initialize2Call__Inputs {
    return new Initialize2Call__Inputs(this);
  }

  get outputs(): Initialize2Call__Outputs {
    return new Initialize2Call__Outputs(this);
  }
}

export class Initialize2Call__Inputs {
  _call: Initialize2Call;

  constructor(call: Initialize2Call) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class Initialize2Call__Outputs {
  _call: Initialize2Call;

  constructor(call: Initialize2Call) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class RenounceMinterCall extends ethereum.Call {
  get inputs(): RenounceMinterCall__Inputs {
    return new RenounceMinterCall__Inputs(this);
  }

  get outputs(): RenounceMinterCall__Outputs {
    return new RenounceMinterCall__Outputs(this);
  }
}

export class RenounceMinterCall__Inputs {
  _call: RenounceMinterCall;

  constructor(call: RenounceMinterCall) {
    this._call = call;
  }
}

export class RenounceMinterCall__Outputs {
  _call: RenounceMinterCall;

  constructor(call: RenounceMinterCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}
