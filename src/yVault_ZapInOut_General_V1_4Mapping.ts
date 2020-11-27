import {
  OwnershipTransferred as OwnershipTransferredEvent,
  Zapin as ZapinEvent,
  Zapout as ZapoutEvent
} from "../generated/yVault_ZapInOut_General_V1_4/yVault_ZapInOut_General_V1_4"
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
} from "../generated/yVault_ZapInOut_General_V1_4/yVault_ZapInOut_General_V1_4"
import {
  yVault_ZapInOut_General_V1_4OwnershipTransferredEvent as yVault_ZapInOut_General_V1_4OwnershipTransferredEventSchema,
  yVault_ZapInOut_General_V1_4ZapinEvent as yVault_ZapInOut_General_V1_4ZapinEventSchema,
  yVault_ZapInOut_General_V1_4ZapoutEvent as yVault_ZapInOut_General_V1_4ZapoutEventSchema
} from "../generated/schema"
import {
  yVault_ZapInOut_General_V1_4ZapInCall as yVault_ZapInOut_General_V1_4ZapInCallSchema,
  yVault_ZapInOut_General_V1_4ZapOutCall as yVault_ZapInOut_General_V1_4ZapOutCallSchema,
  yVault_ZapInOut_General_V1_4addNewCurveExchangeCall as yVault_ZapInOut_General_V1_4addNewCurveExchangeCallSchema,
  yVault_ZapInOut_General_V1_4inCaseTokengetsStuckCall as yVault_ZapInOut_General_V1_4inCaseTokengetsStuckCallSchema,
  yVault_ZapInOut_General_V1_4renounceOwnershipCall as yVault_ZapInOut_General_V1_4renounceOwnershipCallSchema,
  yVault_ZapInOut_General_V1_4setnewgoodwillCall as yVault_ZapInOut_General_V1_4setnewgoodwillCallSchema,
  yVault_ZapInOut_General_V1_4toggleContractActiveCall as yVault_ZapInOut_General_V1_4toggleContractActiveCallSchema,
  yVault_ZapInOut_General_V1_4transferOwnershipCall as yVault_ZapInOut_General_V1_4transferOwnershipCallSchema,
  yVault_ZapInOut_General_V1_4updateCurveZapInCall as yVault_ZapInOut_General_V1_4updateCurveZapInCallSchema,
  yVault_ZapInOut_General_V1_4updateCurveZapOutCall as yVault_ZapInOut_General_V1_4updateCurveZapOutCallSchema,
  yVault_ZapInOut_General_V1_4withdrawCall as yVault_ZapInOut_General_V1_4withdrawCallSchema
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new yVault_ZapInOut_General_V1_4OwnershipTransferredEventSchema(
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
  let entity = new yVault_ZapInOut_General_V1_4ZapinEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.save()
}

export function handleZapoutEvent(event: ZapoutEvent): void {
  let entity = new yVault_ZapInOut_General_V1_4ZapoutEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.save()
}

export function handleZapInCall(call: ZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_4ZapInCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handleZapOutCall(call: ZapOutCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_4ZapOutCallSchema(id)
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
  let entity = new yVault_ZapInOut_General_V1_4addNewCurveExchangeCallSchema(id)
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
  let entity = new yVault_ZapInOut_General_V1_4inCaseTokengetsStuckCallSchema(
    id
  )
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_4renounceOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_4setnewgoodwillCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_4toggleContractActiveCallSchema(
    id
  )
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_4transferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handleupdateCurveZapInCall(call: UpdateCurveZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_4updateCurveZapInCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.CurveZapInGeneralAddress = call.inputs.CurveZapInGeneralAddress
  entity.save()
}

export function handleupdateCurveZapOutCall(call: UpdateCurveZapOutCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_4updateCurveZapOutCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.CurveZapOutGeneralAddress = call.inputs.CurveZapOutGeneralAddress
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_4withdrawCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
