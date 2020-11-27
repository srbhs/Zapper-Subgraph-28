import { OwnershipTransferred as OwnershipTransferredEvent } from "../generated/Zapper_Swap_General_V1_3/Zapper_Swap_General_V1_3"
import {
  MultiExchangeSwapCall,
  AddATokenCall,
  AddCTokenCall,
  AddYTokenCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  UnwrapCall,
  UnwrapWethCall,
  WrapCall
} from "../generated/Zapper_Swap_General_V1_3/Zapper_Swap_General_V1_3"
import { Zapper_Swap_General_V1_3OwnershipTransferredEvent as Zapper_Swap_General_V1_3OwnershipTransferredEventSchema } from "../generated/schema"
import {
  Zapper_Swap_General_V1_3MultiExchangeSwapCall as Zapper_Swap_General_V1_3MultiExchangeSwapCallSchema,
  Zapper_Swap_General_V1_3addATokenCall as Zapper_Swap_General_V1_3addATokenCallSchema,
  Zapper_Swap_General_V1_3addCTokenCall as Zapper_Swap_General_V1_3addCTokenCallSchema,
  Zapper_Swap_General_V1_3addYTokenCall as Zapper_Swap_General_V1_3addYTokenCallSchema,
  Zapper_Swap_General_V1_3inCaseTokengetsStuckCall as Zapper_Swap_General_V1_3inCaseTokengetsStuckCallSchema,
  Zapper_Swap_General_V1_3renounceOwnershipCall as Zapper_Swap_General_V1_3renounceOwnershipCallSchema,
  Zapper_Swap_General_V1_3toggleContractActiveCall as Zapper_Swap_General_V1_3toggleContractActiveCallSchema,
  Zapper_Swap_General_V1_3transferOwnershipCall as Zapper_Swap_General_V1_3transferOwnershipCallSchema,
  Zapper_Swap_General_V1_3unwrapCall as Zapper_Swap_General_V1_3unwrapCallSchema,
  Zapper_Swap_General_V1_3unwrapWethCall as Zapper_Swap_General_V1_3unwrapWethCallSchema,
  Zapper_Swap_General_V1_3wrapCall as Zapper_Swap_General_V1_3wrapCallSchema
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new Zapper_Swap_General_V1_3OwnershipTransferredEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleMultiExchangeSwapCall(call: MultiExchangeSwapCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Zapper_Swap_General_V1_3MultiExchangeSwapCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.toWhomToIssue = call.inputs.toWhomToIssue
  entity.path = call.inputs.path
  entity.amountIn = call.inputs.amountIn
  entity.minTokenOut = call.inputs.minTokenOut
  entity.starts = call.inputs.starts
  entity.withPool = call.inputs.withPool
  entity.poolData = call.inputs.poolData
  entity.tokensBought = call.outputs.tokensBought
  entity.save()
}

export function handleaddATokenCall(call: AddATokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Zapper_Swap_General_V1_3addATokenCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleaddCTokenCall(call: AddCTokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Zapper_Swap_General_V1_3addCTokenCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleaddYTokenCall(call: AddYTokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Zapper_Swap_General_V1_3addYTokenCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Zapper_Swap_General_V1_3inCaseTokengetsStuckCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Zapper_Swap_General_V1_3renounceOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Zapper_Swap_General_V1_3toggleContractActiveCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Zapper_Swap_General_V1_3transferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handleunwrapCall(call: UnwrapCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Zapper_Swap_General_V1_3unwrapCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.tokens2Trade = call.inputs.tokens2Trade
  entity.minTokens = call.inputs.minTokens
  entity.tokensUnwrapped = call.outputs.tokensUnwrapped
  entity.toToken = call.outputs.toToken
  entity.save()
}

export function handleunwrapWethCall(call: UnwrapWethCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Zapper_Swap_General_V1_3unwrapWethCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.tokens2Trade = call.inputs.tokens2Trade
  entity.minTokens = call.inputs.minTokens
  entity.tokensUnwrapped = call.outputs.tokensUnwrapped
  entity.toToken = call.outputs.toToken
  entity.save()
}

export function handlewrapCall(call: WrapCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Zapper_Swap_General_V1_3wrapCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.tokens2Trade = call.inputs.tokens2Trade
  entity.minTokens = call.inputs.minTokens
  entity.tokensWrapped = call.outputs.tokensWrapped
  entity.save()
}
