import { OwnershipTransferred as OwnershipTransferredEvent } from "../generated/Curve_General_ZapOut_V2/Curve_General_ZapOut_V2"
import {
  ZapOutCall,
  ZapoutToUnderlyingCall,
  Token2EthCall,
  Token2TokenCall,
  AddCRVTokenCall,
  AddCTokenCall,
  AddYTokenCall,
  ApproveTokenCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetCRVTokenAddressesCall,
  SetnewdzgoodwillAddressCall,
  SetnewgoodwillCall,
  SetnewsUSDTokenAddressCall,
  SetcTokensCall,
  SetyTokensCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/Curve_General_ZapOut_V2/Curve_General_ZapOut_V2"
import { Curve_General_ZapOut_V2OwnershipTransferredEvent as Curve_General_ZapOut_V2OwnershipTransferredEventSchema } from "../generated/schema"
import {
  Curve_General_ZapOut_V2ZapOutCall as Curve_General_ZapOut_V2ZapOutCallSchema,
  Curve_General_ZapOut_V2ZapoutToUnderlyingCall as Curve_General_ZapOut_V2ZapoutToUnderlyingCallSchema,
  Curve_General_ZapOut_V2token2EthCall as Curve_General_ZapOut_V2token2EthCallSchema,
  Curve_General_ZapOut_V2token2TokenCall as Curve_General_ZapOut_V2token2TokenCallSchema,
  Curve_General_ZapOut_V2addCRVTokenCall as Curve_General_ZapOut_V2addCRVTokenCallSchema,
  Curve_General_ZapOut_V2addCTokenCall as Curve_General_ZapOut_V2addCTokenCallSchema,
  Curve_General_ZapOut_V2addYTokenCall as Curve_General_ZapOut_V2addYTokenCallSchema,
  Curve_General_ZapOut_V2approveTokenCall as Curve_General_ZapOut_V2approveTokenCallSchema,
  Curve_General_ZapOut_V2inCaseTokengetsStuckCall as Curve_General_ZapOut_V2inCaseTokengetsStuckCallSchema,
  Curve_General_ZapOut_V2renounceOwnershipCall as Curve_General_ZapOut_V2renounceOwnershipCallSchema,
  Curve_General_ZapOut_V2setCRVTokenAddressesCall as Curve_General_ZapOut_V2setCRVTokenAddressesCallSchema,
  Curve_General_ZapOut_V2setnewdzgoodwillAddressCall as Curve_General_ZapOut_V2setnewdzgoodwillAddressCallSchema,
  Curve_General_ZapOut_V2setnewgoodwillCall as Curve_General_ZapOut_V2setnewgoodwillCallSchema,
  Curve_General_ZapOut_V2setnewsUSDTokenAddressCall as Curve_General_ZapOut_V2setnewsUSDTokenAddressCallSchema,
  Curve_General_ZapOut_V2setcTokensCall as Curve_General_ZapOut_V2setcTokensCallSchema,
  Curve_General_ZapOut_V2setyTokensCall as Curve_General_ZapOut_V2setyTokensCallSchema,
  Curve_General_ZapOut_V2toggleContractActiveCall as Curve_General_ZapOut_V2toggleContractActiveCallSchema,
  Curve_General_ZapOut_V2transferOwnershipCall as Curve_General_ZapOut_V2transferOwnershipCallSchema,
  Curve_General_ZapOut_V2withdrawCall as Curve_General_ZapOut_V2withdrawCallSchema
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new Curve_General_ZapOut_V2OwnershipTransferredEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleZapOutCall(call: ZapOutCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2ZapOutCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.ToTokensBought = call.outputs.ToTokensBought
  entity.save()
}

export function handleZapoutToUnderlyingCall(
  call: ZapoutToUnderlyingCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2ZapoutToUnderlyingCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoken2EthCall(call: Token2EthCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2token2EthCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.tokens2Trade = call.inputs.tokens2Trade
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handletoken2TokenCall(call: Token2TokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2token2TokenCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.tokens2Trade = call.inputs.tokens2Trade
  entity.tokenBought = call.outputs.tokenBought
  entity.save()
}

export function handleaddCRVTokenCall(call: AddCRVTokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2addCRVTokenCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleaddCTokenCall(call: AddCTokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2addCTokenCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleaddYTokenCall(call: AddYTokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2addYTokenCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleapproveTokenCall(call: ApproveTokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2approveTokenCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2inCaseTokengetsStuckCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2renounceOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetCRVTokenAddressesCall(
  call: SetCRVTokenAddressesCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2setCRVTokenAddressesCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewdzgoodwillAddressCall(
  call: SetnewdzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2setnewdzgoodwillAddressCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2setnewgoodwillCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewsUSDTokenAddressCall(
  call: SetnewsUSDTokenAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2setnewsUSDTokenAddressCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetcTokensCall(call: SetcTokensCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2setcTokensCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetyTokensCall(call: SetyTokensCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2setyTokensCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2toggleContractActiveCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2transferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2withdrawCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
