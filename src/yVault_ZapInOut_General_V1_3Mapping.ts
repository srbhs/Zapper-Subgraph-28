import {
  OwnershipTransferred as OwnershipTransferredEvent,
  Zapin as ZapinEvent,
  Zapout as ZapoutEvent
} from "../generated/yVault_ZapInOut_General_V1_3/yVault_ZapInOut_General_V1_3"
import {
  ZapInCall,
  ZapOutCall,
  AddNewCurveExchangeCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetnewgoodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  UpdateCurveZapInCall,
  UpdateCurveZapOutCall,
  WithdrawCall
} from "../generated/yVault_ZapInOut_General_V1_3/yVault_ZapInOut_General_V1_3"
import {
  yVault_ZapInOut_General_V1_3OwnershipTransferredEvent as yVault_ZapInOut_General_V1_3OwnershipTransferredEventSchema,
  yVault_ZapInOut_General_V1_3ZapinEvent as yVault_ZapInOut_General_V1_3ZapinEventSchema,
  yVault_ZapInOut_General_V1_3ZapoutEvent as yVault_ZapInOut_General_V1_3ZapoutEventSchema
} from "../generated/schema"
import {
  yVault_ZapInOut_General_V1_3ZapInCall as yVault_ZapInOut_General_V1_3ZapInCallSchema,
  yVault_ZapInOut_General_V1_3ZapOutCall as yVault_ZapInOut_General_V1_3ZapOutCallSchema,
  yVault_ZapInOut_General_V1_3addNewCurveExchangeCall as yVault_ZapInOut_General_V1_3addNewCurveExchangeCallSchema,
  yVault_ZapInOut_General_V1_3inCaseTokengetsStuckCall as yVault_ZapInOut_General_V1_3inCaseTokengetsStuckCallSchema,
  yVault_ZapInOut_General_V1_3renounceOwnershipCall as yVault_ZapInOut_General_V1_3renounceOwnershipCallSchema,
  yVault_ZapInOut_General_V1_3setnewgoodwillCall as yVault_ZapInOut_General_V1_3setnewgoodwillCallSchema,
  yVault_ZapInOut_General_V1_3toggleContractActiveCall as yVault_ZapInOut_General_V1_3toggleContractActiveCallSchema,
  yVault_ZapInOut_General_V1_3transferOwnershipCall as yVault_ZapInOut_General_V1_3transferOwnershipCallSchema,
  yVault_ZapInOut_General_V1_3updateCurveZapInCall as yVault_ZapInOut_General_V1_3updateCurveZapInCallSchema,
  yVault_ZapInOut_General_V1_3updateCurveZapOutCall as yVault_ZapInOut_General_V1_3updateCurveZapOutCallSchema,
  yVault_ZapInOut_General_V1_3withdrawCall as yVault_ZapInOut_General_V1_3withdrawCallSchema
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new yVault_ZapInOut_General_V1_3OwnershipTransferredEventSchema(
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
  let entity = new yVault_ZapInOut_General_V1_3ZapinEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.save()
}

export function handleZapoutEvent(event: ZapoutEvent): void {
  let entity = new yVault_ZapInOut_General_V1_3ZapoutEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.save()
}

export function handleZapInCall(call: ZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_3ZapInCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handleZapOutCall(call: ZapOutCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_3ZapOutCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handleaddNewCurveExchangeCall(
  call: AddNewCurveExchangeCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_3addNewCurveExchangeCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.curvePoolToken = call.inputs.curvePoolToken
  entity.curveExchangeAddress = call.inputs.curveExchangeAddress
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_3inCaseTokengetsStuckCallSchema(
    id
  )
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_3renounceOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_3setnewgoodwillCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_3toggleContractActiveCallSchema(
    id
  )
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_3transferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handleupdateCurveZapInCall(call: UpdateCurveZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_3updateCurveZapInCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.CurveZapInGeneralAddress = call.inputs.CurveZapInGeneralAddress
  entity.save()
}

export function handleupdateCurveZapOutCall(call: UpdateCurveZapOutCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_3updateCurveZapOutCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.CurveZapOutGeneralAddress = call.inputs.CurveZapOutGeneralAddress
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_3withdrawCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
