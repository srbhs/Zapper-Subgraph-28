import { OwnershipTransferred as OwnershipTransferredEvent } from "../generated/UniswapV2_ZapIn_General_V2_4_1/UniswapV2_ZapIn_General_V2_4_1"
import {
  ZapInCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetnewgoodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/UniswapV2_ZapIn_General_V2_4_1/UniswapV2_ZapIn_General_V2_4_1"
import { UniswapV2_ZapIn_General_V2_4_1OwnershipTransferredEvent as UniswapV2_ZapIn_General_V2_4_1OwnershipTransferredEventSchema } from "../generated/schema"
import {
  UniswapV2_ZapIn_General_V2_4_1ZapInCall as UniswapV2_ZapIn_General_V2_4_1ZapInCallSchema,
  UniswapV2_ZapIn_General_V2_4_1inCaseTokengetsStuckCall as UniswapV2_ZapIn_General_V2_4_1inCaseTokengetsStuckCallSchema,
  UniswapV2_ZapIn_General_V2_4_1renounceOwnershipCall as UniswapV2_ZapIn_General_V2_4_1renounceOwnershipCallSchema,
  UniswapV2_ZapIn_General_V2_4_1setnewgoodwillCall as UniswapV2_ZapIn_General_V2_4_1setnewgoodwillCallSchema,
  UniswapV2_ZapIn_General_V2_4_1toggleContractActiveCall as UniswapV2_ZapIn_General_V2_4_1toggleContractActiveCallSchema,
  UniswapV2_ZapIn_General_V2_4_1transferOwnershipCall as UniswapV2_ZapIn_General_V2_4_1transferOwnershipCallSchema,
  UniswapV2_ZapIn_General_V2_4_1withdrawCall as UniswapV2_ZapIn_General_V2_4_1withdrawCallSchema
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new UniswapV2_ZapIn_General_V2_4_1OwnershipTransferredEventSchema(
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
  let entity = new UniswapV2_ZapIn_General_V2_4_1ZapInCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2_ZapIn_General_V2_4_1inCaseTokengetsStuckCallSchema(
    id
  )
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2_ZapIn_General_V2_4_1renounceOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2_ZapIn_General_V2_4_1setnewgoodwillCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2_ZapIn_General_V2_4_1toggleContractActiveCallSchema(
    id
  )
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2_ZapIn_General_V2_4_1transferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2_ZapIn_General_V2_4_1withdrawCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
