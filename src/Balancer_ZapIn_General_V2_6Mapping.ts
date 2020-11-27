import {
  OwnershipTransferred as OwnershipTransferredEvent,
  zap as zapEvent
} from "../generated/Balancer_ZapIn_General_V2_6/Balancer_ZapIn_General_V2_6"
import {
  ZapInCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetnewgoodwillCall,
  SetnewzgoodwillAddressCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/Balancer_ZapIn_General_V2_6/Balancer_ZapIn_General_V2_6"
import {
  Balancer_ZapIn_General_V2_6OwnershipTransferredEvent as Balancer_ZapIn_General_V2_6OwnershipTransferredEventSchema,
  Balancer_ZapIn_General_V2_6zapEvent as Balancer_ZapIn_General_V2_6zapEventSchema
} from "../generated/schema"
import {
  Balancer_ZapIn_General_V2_6ZapInCall as Balancer_ZapIn_General_V2_6ZapInCallSchema,
  Balancer_ZapIn_General_V2_6inCaseTokengetsStuckCall as Balancer_ZapIn_General_V2_6inCaseTokengetsStuckCallSchema,
  Balancer_ZapIn_General_V2_6renounceOwnershipCall as Balancer_ZapIn_General_V2_6renounceOwnershipCallSchema,
  Balancer_ZapIn_General_V2_6setnewgoodwillCall as Balancer_ZapIn_General_V2_6setnewgoodwillCallSchema,
  Balancer_ZapIn_General_V2_6setnewzgoodwillAddressCall as Balancer_ZapIn_General_V2_6setnewzgoodwillAddressCallSchema,
  Balancer_ZapIn_General_V2_6toggleContractActiveCall as Balancer_ZapIn_General_V2_6toggleContractActiveCallSchema,
  Balancer_ZapIn_General_V2_6transferOwnershipCall as Balancer_ZapIn_General_V2_6transferOwnershipCallSchema,
  Balancer_ZapIn_General_V2_6withdrawCall as Balancer_ZapIn_General_V2_6withdrawCallSchema
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new Balancer_ZapIn_General_V2_6OwnershipTransferredEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handlezapEvent(event: zapEvent): void {
  let entity = new Balancer_ZapIn_General_V2_6zapEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.zapContract = event.params.zapContract
  entity.userAddress = event.params.userAddress
  entity.tokenAddress = event.params.tokenAddress
  entity.volume = event.params.volume
  entity.timestamp = event.params.timestamp
  entity.save()
}

export function handleZapInCall(call: ZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V2_6ZapInCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.tokensBought = call.outputs.tokensBought
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V2_6inCaseTokengetsStuckCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V2_6renounceOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V2_6setnewgoodwillCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewzgoodwillAddressCall(
  call: SetnewzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V2_6setnewzgoodwillAddressCallSchema(
    id
  )
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V2_6toggleContractActiveCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V2_6transferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_ZapIn_General_V2_6withdrawCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
