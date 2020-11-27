import {
  OwnershipTransferred as OwnershipTransferredEvent,
  Zapout as ZapoutEvent
} from "../generated/Balancer_Unzap_V1_1/Balancer_Unzap_V1_1"
import {
  EasyZapOutCall,
  ZapOutCall,
  DestructCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetnewdzgoodwillAddressCall,
  SetnewgoodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  UpdateSlippageCall,
  WithdrawCall
} from "../generated/Balancer_Unzap_V1_1/Balancer_Unzap_V1_1"
import {
  Balancer_Unzap_V1_1OwnershipTransferredEvent as Balancer_Unzap_V1_1OwnershipTransferredEventSchema,
  Balancer_Unzap_V1_1ZapoutEvent as Balancer_Unzap_V1_1ZapoutEventSchema
} from "../generated/schema"
import {
  Balancer_Unzap_V1_1EasyZapOutCall as Balancer_Unzap_V1_1EasyZapOutCallSchema,
  Balancer_Unzap_V1_1ZapOutCall as Balancer_Unzap_V1_1ZapOutCallSchema,
  Balancer_Unzap_V1_1destructCall as Balancer_Unzap_V1_1destructCallSchema,
  Balancer_Unzap_V1_1inCaseTokengetsStuckCall as Balancer_Unzap_V1_1inCaseTokengetsStuckCallSchema,
  Balancer_Unzap_V1_1renounceOwnershipCall as Balancer_Unzap_V1_1renounceOwnershipCallSchema,
  Balancer_Unzap_V1_1setnewdzgoodwillAddressCall as Balancer_Unzap_V1_1setnewdzgoodwillAddressCallSchema,
  Balancer_Unzap_V1_1setnewgoodwillCall as Balancer_Unzap_V1_1setnewgoodwillCallSchema,
  Balancer_Unzap_V1_1toggleContractActiveCall as Balancer_Unzap_V1_1toggleContractActiveCallSchema,
  Balancer_Unzap_V1_1transferOwnershipCall as Balancer_Unzap_V1_1transferOwnershipCallSchema,
  Balancer_Unzap_V1_1updateSlippageCall as Balancer_Unzap_V1_1updateSlippageCallSchema,
  Balancer_Unzap_V1_1withdrawCall as Balancer_Unzap_V1_1withdrawCallSchema
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new Balancer_Unzap_V1_1OwnershipTransferredEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleZapoutEvent(event: ZapoutEvent): void {
  let entity = new Balancer_Unzap_V1_1ZapoutEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.save()
}

export function handleEasyZapOutCall(call: EasyZapOutCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_Unzap_V1_1EasyZapOutCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.slippage = call.inputs.slippage
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handleZapOutCall(call: ZapOutCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_Unzap_V1_1ZapOutCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.slippage = call.inputs.slippage
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handledestructCall(call: DestructCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_Unzap_V1_1destructCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_Unzap_V1_1inCaseTokengetsStuckCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_Unzap_V1_1renounceOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewdzgoodwillAddressCall(
  call: SetnewdzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_Unzap_V1_1setnewdzgoodwillAddressCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_Unzap_V1_1setnewgoodwillCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_Unzap_V1_1toggleContractActiveCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_Unzap_V1_1transferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handleupdateSlippageCall(call: UpdateSlippageCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_Unzap_V1_1updateSlippageCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_Unzap_V1_1withdrawCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
