import { OwnershipTransferred as OwnershipTransferredEvent } from "../generated/Uni_Curve_Pipe/Uni_Curve_Pipe"
import {
  Curve2UniCall,
  Uni2CurveCall,
  ApproveTokenCall,
  DestructCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/Uni_Curve_Pipe/Uni_Curve_Pipe"
import { Uni_Curve_PipeOwnershipTransferredEvent as Uni_Curve_PipeOwnershipTransferredEventSchema } from "../generated/schema"
import {
  Uni_Curve_PipeCurve2UniCall as Uni_Curve_PipeCurve2UniCallSchema,
  Uni_Curve_PipeUni2CurveCall as Uni_Curve_PipeUni2CurveCallSchema,
  Uni_Curve_PipeapproveTokenCall as Uni_Curve_PipeapproveTokenCallSchema,
  Uni_Curve_PipedestructCall as Uni_Curve_PipedestructCallSchema,
  Uni_Curve_PipeinCaseTokengetsStuckCall as Uni_Curve_PipeinCaseTokengetsStuckCallSchema,
  Uni_Curve_PiperenounceOwnershipCall as Uni_Curve_PiperenounceOwnershipCallSchema,
  Uni_Curve_PipetoggleContractActiveCall as Uni_Curve_PipetoggleContractActiveCallSchema,
  Uni_Curve_PipetransferOwnershipCall as Uni_Curve_PipetransferOwnershipCallSchema,
  Uni_Curve_PipewithdrawCall as Uni_Curve_PipewithdrawCallSchema
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new Uni_Curve_PipeOwnershipTransferredEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleCurve2UniCall(call: Curve2UniCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Uni_Curve_PipeCurve2UniCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleUni2CurveCall(call: Uni2CurveCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Uni_Curve_PipeUni2CurveCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleapproveTokenCall(call: ApproveTokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Uni_Curve_PipeapproveTokenCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handledestructCall(call: DestructCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Uni_Curve_PipedestructCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Uni_Curve_PipeinCaseTokengetsStuckCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Uni_Curve_PiperenounceOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Uni_Curve_PipetoggleContractActiveCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Uni_Curve_PipetransferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Uni_Curve_PipewithdrawCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
