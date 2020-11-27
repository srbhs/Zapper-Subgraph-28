import {
  OwnershipTransferred as OwnershipTransferredEvent,
  Zapin as ZapinEvent
} from "../generated/Balancer_ZapIn_General_V2/Balancer_ZapIn_General_V2"
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
} from "../generated/Balancer_ZapIn_General_V2/Balancer_ZapIn_General_V2"
import {
  Balancer_ZapIn_General_V2OwnershipTransferredEvent as Balancer_ZapIn_General_V2OwnershipTransferredEventSchema,
  Balancer_ZapIn_General_V2ZapinEvent as Balancer_ZapIn_General_V2ZapinEventSchema
} from "../generated/schema"
import {
  Balancer_ZapIn_General_V2EasyZapInCall as Balancer_ZapIn_General_V2EasyZapInCallSchema,
  Balancer_ZapIn_General_V2ZapInCall as Balancer_ZapIn_General_V2ZapInCallSchema,
  Balancer_ZapIn_General_V2destructCall as Balancer_ZapIn_General_V2destructCallSchema,
  Balancer_ZapIn_General_V2inCaseTokengetsStuckCall as Balancer_ZapIn_General_V2inCaseTokengetsStuckCallSchema,
  Balancer_ZapIn_General_V2renounceOwnershipCall as Balancer_ZapIn_General_V2renounceOwnershipCallSchema,
  Balancer_ZapIn_General_V2setnewdzgoodwillAddressCall as Balancer_ZapIn_General_V2setnewdzgoodwillAddressCallSchema,
  Balancer_ZapIn_General_V2setnewgoodwillCall as Balancer_ZapIn_General_V2setnewgoodwillCallSchema,
  Balancer_ZapIn_General_V2toggleContractActiveCall as Balancer_ZapIn_General_V2toggleContractActiveCallSchema,
  Balancer_ZapIn_General_V2transferOwnershipCall as Balancer_ZapIn_General_V2transferOwnershipCallSchema,
  Balancer_ZapIn_General_V2withdrawCall as Balancer_ZapIn_General_V2withdrawCallSchema
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new Balancer_ZapIn_General_V2OwnershipTransferredEventSchema(
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
  let entity = new Balancer_ZapIn_General_V2ZapinEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.save()
}

export function handleEasyZapInCall(call: EasyZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V2EasyZapInCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.tokensBought = call.outputs.tokensBought
  entity.save()
}

export function handleZapInCall(call: ZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V2ZapInCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.tokensBought = call.outputs.tokensBought
  entity.save()
}

export function handledestructCall(call: DestructCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V2destructCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V2inCaseTokengetsStuckCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V2renounceOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewdzgoodwillAddressCall(
  call: SetnewdzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V2setnewdzgoodwillAddressCallSchema(
    id
  )
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V2setnewgoodwillCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V2toggleContractActiveCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V2transferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V2withdrawCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
