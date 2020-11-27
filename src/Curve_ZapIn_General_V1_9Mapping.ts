import { OwnershipTransferred as OwnershipTransferredEvent } from "../generated/Curve_ZapIn_General_V1_9/Curve_ZapIn_General_V1_9"
import {
  ZapInCall,
  AddPoolCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetnewgoodwillCall,
  SetnewzgoodwillAddressCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  UpdateIntermediateStableCall,
  UpdatePoolCall,
  WithdrawCall
} from "../generated/Curve_ZapIn_General_V1_9/Curve_ZapIn_General_V1_9"
import { Curve_ZapIn_General_V1_9OwnershipTransferredEvent as Curve_ZapIn_General_V1_9OwnershipTransferredEventSchema } from "../generated/schema"
import {
  Curve_ZapIn_General_V1_9ZapInCall as Curve_ZapIn_General_V1_9ZapInCallSchema,
  Curve_ZapIn_General_V1_9addPoolCall as Curve_ZapIn_General_V1_9addPoolCallSchema,
  Curve_ZapIn_General_V1_9inCaseTokengetsStuckCall as Curve_ZapIn_General_V1_9inCaseTokengetsStuckCallSchema,
  Curve_ZapIn_General_V1_9renounceOwnershipCall as Curve_ZapIn_General_V1_9renounceOwnershipCallSchema,
  Curve_ZapIn_General_V1_9setnewgoodwillCall as Curve_ZapIn_General_V1_9setnewgoodwillCallSchema,
  Curve_ZapIn_General_V1_9setnewzgoodwillAddressCall as Curve_ZapIn_General_V1_9setnewzgoodwillAddressCallSchema,
  Curve_ZapIn_General_V1_9toggleContractActiveCall as Curve_ZapIn_General_V1_9toggleContractActiveCallSchema,
  Curve_ZapIn_General_V1_9transferOwnershipCall as Curve_ZapIn_General_V1_9transferOwnershipCallSchema,
  Curve_ZapIn_General_V1_9updateIntermediateStableCall as Curve_ZapIn_General_V1_9updateIntermediateStableCallSchema,
  Curve_ZapIn_General_V1_9updatePoolCall as Curve_ZapIn_General_V1_9updatePoolCallSchema,
  Curve_ZapIn_General_V1_9withdrawCall as Curve_ZapIn_General_V1_9withdrawCallSchema
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new Curve_ZapIn_General_V1_9OwnershipTransferredEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleZapInCall(call: ZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_ZapIn_General_V1_9ZapInCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.toWhomToIssue = call.inputs.toWhomToIssue
  entity.fromToken = call.inputs.fromToken
  entity.swapAddress = call.inputs.swapAddress
  entity.incomingTokenQty = call.inputs.incomingTokenQty
  entity.minPoolTokens = call.inputs.minPoolTokens
  entity.crvTokensBought = call.outputs.crvTokensBought
  entity.save()
}

export function handleaddPoolCall(call: AddPoolCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_ZapIn_General_V1_9addPoolCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.swapAddress = call.inputs.swapAddress
  entity.tokenAddress = call.inputs.tokenAddress
  entity.poolTokens = call.inputs.poolTokens
  entity.isMetaPool = call.inputs.isMetaPool
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_ZapIn_General_V1_9inCaseTokengetsStuckCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_ZapIn_General_V1_9renounceOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_ZapIn_General_V1_9setnewgoodwillCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewzgoodwillAddressCall(
  call: SetnewzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_ZapIn_General_V1_9setnewzgoodwillAddressCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_ZapIn_General_V1_9toggleContractActiveCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_ZapIn_General_V1_9transferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handleupdateIntermediateStableCall(
  call: UpdateIntermediateStableCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_ZapIn_General_V1_9updateIntermediateStableCallSchema(
    id
  )
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newIntermediate = call.inputs.newIntermediate
  entity.save()
}

export function handleupdatePoolCall(call: UpdatePoolCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_ZapIn_General_V1_9updatePoolCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.swapAddress = call.inputs.swapAddress
  entity.tokenAddress = call.inputs.tokenAddress
  entity.poolTokens = call.inputs.poolTokens
  entity.isMetaPool = call.inputs.isMetaPool
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_ZapIn_General_V1_9withdrawCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
