import {
  OwnershipTransferred as OwnershipTransferredEvent,
  Zapout as ZapoutEvent
} from "../generated/Balancer_ZapOut_General_V2/Balancer_ZapOut_General_V2"
import {
  EasyZapOutCall,
  ZapOutCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetnewdzgoodwillAddressCall,
  SetnewgoodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/Balancer_ZapOut_General_V2/Balancer_ZapOut_General_V2"
import {
  Balancer_ZapOut_General_V2OwnershipTransferredEvent as Balancer_ZapOut_General_V2OwnershipTransferredEventSchema,
  Balancer_ZapOut_General_V2ZapoutEvent as Balancer_ZapOut_General_V2ZapoutEventSchema
} from "../generated/schema"
import {
  Balancer_ZapOut_General_V2EasyZapOutCall as Balancer_ZapOut_General_V2EasyZapOutCallSchema,
  Balancer_ZapOut_General_V2ZapOutCall as Balancer_ZapOut_General_V2ZapOutCallSchema,
  Balancer_ZapOut_General_V2inCaseTokengetsStuckCall as Balancer_ZapOut_General_V2inCaseTokengetsStuckCallSchema,
  Balancer_ZapOut_General_V2renounceOwnershipCall as Balancer_ZapOut_General_V2renounceOwnershipCallSchema,
  Balancer_ZapOut_General_V2setnewdzgoodwillAddressCall as Balancer_ZapOut_General_V2setnewdzgoodwillAddressCallSchema,
  Balancer_ZapOut_General_V2setnewgoodwillCall as Balancer_ZapOut_General_V2setnewgoodwillCallSchema,
  Balancer_ZapOut_General_V2toggleContractActiveCall as Balancer_ZapOut_General_V2toggleContractActiveCallSchema,
  Balancer_ZapOut_General_V2transferOwnershipCall as Balancer_ZapOut_General_V2transferOwnershipCallSchema,
  Balancer_ZapOut_General_V2withdrawCall as Balancer_ZapOut_General_V2withdrawCallSchema
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new Balancer_ZapOut_General_V2OwnershipTransferredEventSchema(
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
  let entity = new Balancer_ZapOut_General_V2ZapoutEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.save()
}

export function handleEasyZapOutCall(call: EasyZapOutCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapOut_General_V2EasyZapOutCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handleZapOutCall(call: ZapOutCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapOut_General_V2ZapOutCallSchema(id)
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
  let entity = new Balancer_ZapOut_General_V2inCaseTokengetsStuckCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapOut_General_V2renounceOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewdzgoodwillAddressCall(
  call: SetnewdzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapOut_General_V2setnewdzgoodwillAddressCallSchema(
    id
  )
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapOut_General_V2setnewgoodwillCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapOut_General_V2toggleContractActiveCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapOut_General_V2transferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapOut_General_V2withdrawCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
