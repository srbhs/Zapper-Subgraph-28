import { OwnershipTransferred as OwnershipTransferredEvent } from "../generated/UniswapV2_ZapIn/UniswapV2_ZapIn"
import {
  ZapInCall,
  DestructCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetnewdzgoodwillAddressCall,
  SetnewgoodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  UpdateSlippageCall,
  WithdrawCall
} from "../generated/UniswapV2_ZapIn/UniswapV2_ZapIn"
import { UniswapV2_ZapInOwnershipTransferredEvent as UniswapV2_ZapInOwnershipTransferredEventSchema } from "../generated/schema"
import {
  UniswapV2_ZapInZapInCall as UniswapV2_ZapInZapInCallSchema,
  UniswapV2_ZapIndestructCall as UniswapV2_ZapIndestructCallSchema,
  UniswapV2_ZapIninCaseTokengetsStuckCall as UniswapV2_ZapIninCaseTokengetsStuckCallSchema,
  UniswapV2_ZapInrenounceOwnershipCall as UniswapV2_ZapInrenounceOwnershipCallSchema,
  UniswapV2_ZapInsetnewdzgoodwillAddressCall as UniswapV2_ZapInsetnewdzgoodwillAddressCallSchema,
  UniswapV2_ZapInsetnewgoodwillCall as UniswapV2_ZapInsetnewgoodwillCallSchema,
  UniswapV2_ZapIntoggleContractActiveCall as UniswapV2_ZapIntoggleContractActiveCallSchema,
  UniswapV2_ZapIntransferOwnershipCall as UniswapV2_ZapIntransferOwnershipCallSchema,
  UniswapV2_ZapInupdateSlippageCall as UniswapV2_ZapInupdateSlippageCallSchema,
  UniswapV2_ZapInwithdrawCall as UniswapV2_ZapInwithdrawCallSchema
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new UniswapV2_ZapInOwnershipTransferredEventSchema(
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
  let entity = new UniswapV2_ZapInZapInCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.slippage = call.inputs.slippage
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handledestructCall(call: DestructCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2_ZapIndestructCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2_ZapIninCaseTokengetsStuckCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2_ZapInrenounceOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewdzgoodwillAddressCall(
  call: SetnewdzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2_ZapInsetnewdzgoodwillAddressCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2_ZapInsetnewgoodwillCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2_ZapIntoggleContractActiveCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2_ZapIntransferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handleupdateSlippageCall(call: UpdateSlippageCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2_ZapInupdateSlippageCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2_ZapInwithdrawCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
