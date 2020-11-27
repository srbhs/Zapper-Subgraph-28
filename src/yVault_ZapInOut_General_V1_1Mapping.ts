import {
  OwnershipTransferred as OwnershipTransferredEvent,
  Zapin as ZapinEvent,
  Zapout as ZapoutEvent
} from "../generated/yVault_ZapInOut_General_V1_1/yVault_ZapInOut_General_V1_1"
import {
  ZapInCall,
  ZapOutToUnderlyingCall,
  AddNewYVaultCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetnewgoodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  UpdateCurveZapInCall,
  WithdrawCall
} from "../generated/yVault_ZapInOut_General_V1_1/yVault_ZapInOut_General_V1_1"
import {
  yVault_ZapInOut_General_V1_1OwnershipTransferredEvent as yVault_ZapInOut_General_V1_1OwnershipTransferredEventSchema,
  yVault_ZapInOut_General_V1_1ZapinEvent as yVault_ZapInOut_General_V1_1ZapinEventSchema,
  yVault_ZapInOut_General_V1_1ZapoutEvent as yVault_ZapInOut_General_V1_1ZapoutEventSchema
} from "../generated/schema"
import {
  yVault_ZapInOut_General_V1_1ZapInCall as yVault_ZapInOut_General_V1_1ZapInCallSchema,
  yVault_ZapInOut_General_V1_1ZapOutToUnderlyingCall as yVault_ZapInOut_General_V1_1ZapOutToUnderlyingCallSchema,
  yVault_ZapInOut_General_V1_1addNewYVaultCall as yVault_ZapInOut_General_V1_1addNewYVaultCallSchema,
  yVault_ZapInOut_General_V1_1inCaseTokengetsStuckCall as yVault_ZapInOut_General_V1_1inCaseTokengetsStuckCallSchema,
  yVault_ZapInOut_General_V1_1renounceOwnershipCall as yVault_ZapInOut_General_V1_1renounceOwnershipCallSchema,
  yVault_ZapInOut_General_V1_1setnewgoodwillCall as yVault_ZapInOut_General_V1_1setnewgoodwillCallSchema,
  yVault_ZapInOut_General_V1_1toggleContractActiveCall as yVault_ZapInOut_General_V1_1toggleContractActiveCallSchema,
  yVault_ZapInOut_General_V1_1transferOwnershipCall as yVault_ZapInOut_General_V1_1transferOwnershipCallSchema,
  yVault_ZapInOut_General_V1_1updateCurveZapInCall as yVault_ZapInOut_General_V1_1updateCurveZapInCallSchema,
  yVault_ZapInOut_General_V1_1withdrawCall as yVault_ZapInOut_General_V1_1withdrawCallSchema
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new yVault_ZapInOut_General_V1_1OwnershipTransferredEventSchema(
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
  let entity = new yVault_ZapInOut_General_V1_1ZapinEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.save()
}

export function handleZapoutEvent(event: ZapoutEvent): void {
  let entity = new yVault_ZapInOut_General_V1_1ZapoutEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.save()
}

export function handleZapInCall(call: ZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_1ZapInCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handleZapOutToUnderlyingCall(
  call: ZapOutToUnderlyingCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_1ZapOutToUnderlyingCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handleaddNewYVaultCall(call: AddNewYVaultCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_1addNewYVaultCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_1inCaseTokengetsStuckCallSchema(
    id
  )
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_1renounceOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_1setnewgoodwillCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_1toggleContractActiveCallSchema(
    id
  )
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_1transferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handleupdateCurveZapInCall(call: UpdateCurveZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_1updateCurveZapInCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.CurveZapInGeneralAddress = call.inputs.CurveZapInGeneralAddress
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_1withdrawCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
