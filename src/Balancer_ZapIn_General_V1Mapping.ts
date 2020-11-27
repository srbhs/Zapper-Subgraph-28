import {
  OwnershipTransferred as OwnershipTransferredEvent,
  Zapin as ZapinEvent
} from "../generated/Balancer_ZapIn_General_V1/Balancer_ZapIn_General_V1"
import {
  EasyZapInCall,
  ZapInCall,
  DestructCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetnewdzgoodwillAddressCall,
  SetnewgoodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/Balancer_ZapIn_General_V1/Balancer_ZapIn_General_V1"
import {
  Balancer_ZapIn_General_V1OwnershipTransferredEvent as Balancer_ZapIn_General_V1OwnershipTransferredEventSchema,
  Balancer_ZapIn_General_V1ZapinEvent as Balancer_ZapIn_General_V1ZapinEventSchema
} from "../generated/schema"
import {
  Balancer_ZapIn_General_V1EasyZapInCall as Balancer_ZapIn_General_V1EasyZapInCallSchema,
  Balancer_ZapIn_General_V1ZapInCall as Balancer_ZapIn_General_V1ZapInCallSchema,
  Balancer_ZapIn_General_V1destructCall as Balancer_ZapIn_General_V1destructCallSchema,
  Balancer_ZapIn_General_V1inCaseTokengetsStuckCall as Balancer_ZapIn_General_V1inCaseTokengetsStuckCallSchema,
  Balancer_ZapIn_General_V1renounceOwnershipCall as Balancer_ZapIn_General_V1renounceOwnershipCallSchema,
  Balancer_ZapIn_General_V1setnewdzgoodwillAddressCall as Balancer_ZapIn_General_V1setnewdzgoodwillAddressCallSchema,
  Balancer_ZapIn_General_V1setnewgoodwillCall as Balancer_ZapIn_General_V1setnewgoodwillCallSchema,
  Balancer_ZapIn_General_V1toggleContractActiveCall as Balancer_ZapIn_General_V1toggleContractActiveCallSchema,
  Balancer_ZapIn_General_V1transferOwnershipCall as Balancer_ZapIn_General_V1transferOwnershipCallSchema,
  Balancer_ZapIn_General_V1withdrawCall as Balancer_ZapIn_General_V1withdrawCallSchema
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new Balancer_ZapIn_General_V1OwnershipTransferredEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleZapinEvent(event: ZapinEvent): void {
  let entity = new Balancer_ZapIn_General_V1ZapinEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.save()
}

export function handleEasyZapInCall(call: EasyZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V1EasyZapInCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.tokensBought = call.outputs.tokensBought
  entity.save()
}

export function handleZapInCall(call: ZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V1ZapInCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.tokensBought = call.outputs.tokensBought
  entity.save()
}

export function handledestructCall(call: DestructCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V1destructCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V1inCaseTokengetsStuckCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V1renounceOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewdzgoodwillAddressCall(
  call: SetnewdzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V1setnewdzgoodwillAddressCallSchema(
    id
  )
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V1setnewgoodwillCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V1toggleContractActiveCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V1transferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V1withdrawCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
