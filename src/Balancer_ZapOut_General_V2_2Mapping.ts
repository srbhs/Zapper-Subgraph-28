import {
  OwnershipTransferred as OwnershipTransferredEvent,
  Zapout as ZapoutEvent
} from "../generated/Balancer_ZapOut_General_V2_2/Balancer_ZapOut_General_V2_2"
import {
  EasyZapOutCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetnewgoodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/Balancer_ZapOut_General_V2_2/Balancer_ZapOut_General_V2_2"
import {
  Balancer_ZapOut_General_V2_2OwnershipTransferredEvent as Balancer_ZapOut_General_V2_2OwnershipTransferredEventSchema,
  Balancer_ZapOut_General_V2_2ZapoutEvent as Balancer_ZapOut_General_V2_2ZapoutEventSchema
} from "../generated/schema"
import {
  Balancer_ZapOut_General_V2_2EasyZapOutCall as Balancer_ZapOut_General_V2_2EasyZapOutCallSchema,
  Balancer_ZapOut_General_V2_2inCaseTokengetsStuckCall as Balancer_ZapOut_General_V2_2inCaseTokengetsStuckCallSchema,
  Balancer_ZapOut_General_V2_2renounceOwnershipCall as Balancer_ZapOut_General_V2_2renounceOwnershipCallSchema,
  Balancer_ZapOut_General_V2_2setnewgoodwillCall as Balancer_ZapOut_General_V2_2setnewgoodwillCallSchema,
  Balancer_ZapOut_General_V2_2toggleContractActiveCall as Balancer_ZapOut_General_V2_2toggleContractActiveCallSchema,
  Balancer_ZapOut_General_V2_2transferOwnershipCall as Balancer_ZapOut_General_V2_2transferOwnershipCallSchema,
  Balancer_ZapOut_General_V2_2withdrawCall as Balancer_ZapOut_General_V2_2withdrawCallSchema
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new Balancer_ZapOut_General_V2_2OwnershipTransferredEventSchema(
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
  let entity = new Balancer_ZapOut_General_V2_2ZapoutEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.save()
}

export function handleEasyZapOutCall(call: EasyZapOutCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapOut_General_V2_2EasyZapOutCallSchema(id)
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
  let entity = new Balancer_ZapOut_General_V2_2inCaseTokengetsStuckCallSchema(
    id
  )
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapOut_General_V2_2renounceOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapOut_General_V2_2setnewgoodwillCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapOut_General_V2_2toggleContractActiveCallSchema(
    id
  )
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapOut_General_V2_2transferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapOut_General_V2_2withdrawCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
