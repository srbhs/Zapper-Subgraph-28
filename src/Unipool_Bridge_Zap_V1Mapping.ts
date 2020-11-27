import { OwnershipTransferred as OwnershipTransferredEvent } from "../generated/Unipool_Bridge_Zap_V1/Unipool_Bridge_Zap_V1"
import {
  ZapBridgeCall,
  DestructCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetnewUniSwapFactoryAddressCall,
  SetnewdzgoodwillAddressCall,
  SetnewgoodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/Unipool_Bridge_Zap_V1/Unipool_Bridge_Zap_V1"
import { Unipool_Bridge_Zap_V1OwnershipTransferredEvent as Unipool_Bridge_Zap_V1OwnershipTransferredEventSchema } from "../generated/schema"
import {
  Unipool_Bridge_Zap_V1ZapBridgeCall as Unipool_Bridge_Zap_V1ZapBridgeCallSchema,
  Unipool_Bridge_Zap_V1destructCall as Unipool_Bridge_Zap_V1destructCallSchema,
  Unipool_Bridge_Zap_V1inCaseTokengetsStuckCall as Unipool_Bridge_Zap_V1inCaseTokengetsStuckCallSchema,
  Unipool_Bridge_Zap_V1renounceOwnershipCall as Unipool_Bridge_Zap_V1renounceOwnershipCallSchema,
  Unipool_Bridge_Zap_V1setnewUniSwapFactoryAddressCall as Unipool_Bridge_Zap_V1setnewUniSwapFactoryAddressCallSchema,
  Unipool_Bridge_Zap_V1setnewdzgoodwillAddressCall as Unipool_Bridge_Zap_V1setnewdzgoodwillAddressCallSchema,
  Unipool_Bridge_Zap_V1setnewgoodwillCall as Unipool_Bridge_Zap_V1setnewgoodwillCallSchema,
  Unipool_Bridge_Zap_V1toggleContractActiveCall as Unipool_Bridge_Zap_V1toggleContractActiveCallSchema,
  Unipool_Bridge_Zap_V1transferOwnershipCall as Unipool_Bridge_Zap_V1transferOwnershipCallSchema,
  Unipool_Bridge_Zap_V1withdrawCall as Unipool_Bridge_Zap_V1withdrawCallSchema
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new Unipool_Bridge_Zap_V1OwnershipTransferredEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleZapBridgeCall(call: ZapBridgeCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Unipool_Bridge_Zap_V1ZapBridgeCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handledestructCall(call: DestructCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Unipool_Bridge_Zap_V1destructCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Unipool_Bridge_Zap_V1inCaseTokengetsStuckCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Unipool_Bridge_Zap_V1renounceOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewUniSwapFactoryAddressCall(
  call: SetnewUniSwapFactoryAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Unipool_Bridge_Zap_V1setnewUniSwapFactoryAddressCallSchema(
    id
  )
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewdzgoodwillAddressCall(
  call: SetnewdzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Unipool_Bridge_Zap_V1setnewdzgoodwillAddressCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Unipool_Bridge_Zap_V1setnewgoodwillCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Unipool_Bridge_Zap_V1toggleContractActiveCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Unipool_Bridge_Zap_V1transferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Unipool_Bridge_Zap_V1withdrawCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
