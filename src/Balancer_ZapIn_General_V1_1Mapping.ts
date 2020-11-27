import {
  OwnershipTransferred as OwnershipTransferredEvent,
  Zapin as ZapinEvent
} from "../generated/Balancer_ZapIn_General_V1_1/Balancer_ZapIn_General_V1_1"
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
} from "../generated/Balancer_ZapIn_General_V1_1/Balancer_ZapIn_General_V1_1"
import {
  Balancer_ZapIn_General_V1_1OwnershipTransferredEvent as Balancer_ZapIn_General_V1_1OwnershipTransferredEventSchema,
  Balancer_ZapIn_General_V1_1ZapinEvent as Balancer_ZapIn_General_V1_1ZapinEventSchema
} from "../generated/schema"
import {
  Balancer_ZapIn_General_V1_1EasyZapInCall as Balancer_ZapIn_General_V1_1EasyZapInCallSchema,
  Balancer_ZapIn_General_V1_1ZapInCall as Balancer_ZapIn_General_V1_1ZapInCallSchema,
  Balancer_ZapIn_General_V1_1destructCall as Balancer_ZapIn_General_V1_1destructCallSchema,
  Balancer_ZapIn_General_V1_1inCaseTokengetsStuckCall as Balancer_ZapIn_General_V1_1inCaseTokengetsStuckCallSchema,
  Balancer_ZapIn_General_V1_1renounceOwnershipCall as Balancer_ZapIn_General_V1_1renounceOwnershipCallSchema,
  Balancer_ZapIn_General_V1_1setnewdzgoodwillAddressCall as Balancer_ZapIn_General_V1_1setnewdzgoodwillAddressCallSchema,
  Balancer_ZapIn_General_V1_1setnewgoodwillCall as Balancer_ZapIn_General_V1_1setnewgoodwillCallSchema,
  Balancer_ZapIn_General_V1_1toggleContractActiveCall as Balancer_ZapIn_General_V1_1toggleContractActiveCallSchema,
  Balancer_ZapIn_General_V1_1transferOwnershipCall as Balancer_ZapIn_General_V1_1transferOwnershipCallSchema,
  Balancer_ZapIn_General_V1_1withdrawCall as Balancer_ZapIn_General_V1_1withdrawCallSchema
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new Balancer_ZapIn_General_V1_1OwnershipTransferredEventSchema(
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
  let entity = new Balancer_ZapIn_General_V1_1ZapinEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.save()
}

export function handleEasyZapInCall(call: EasyZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V1_1EasyZapInCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.tokensBought = call.outputs.tokensBought
  entity.save()
}

export function handleZapInCall(call: ZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V1_1ZapInCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.tokensBought = call.outputs.tokensBought
  entity.save()
}

export function handledestructCall(call: DestructCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V1_1destructCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V1_1inCaseTokengetsStuckCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V1_1renounceOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewdzgoodwillAddressCall(
  call: SetnewdzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V1_1setnewdzgoodwillAddressCallSchema(
    id
  )
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V1_1setnewgoodwillCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V1_1toggleContractActiveCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V1_1transferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V1_1withdrawCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
