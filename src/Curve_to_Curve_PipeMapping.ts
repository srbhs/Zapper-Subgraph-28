import { OwnershipTransferred as OwnershipTransferredEvent } from "../generated/Curve_to_Curve_Pipe/Curve_to_Curve_Pipe"
import {
  Curve2CurveCall,
  ApproveTokenCall,
  DestructCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/Curve_to_Curve_Pipe/Curve_to_Curve_Pipe"
import { Curve_to_Curve_PipeOwnershipTransferredEvent as Curve_to_Curve_PipeOwnershipTransferredEventSchema } from "../generated/schema"
import {
  Curve_to_Curve_PipeCurve2CurveCall as Curve_to_Curve_PipeCurve2CurveCallSchema,
  Curve_to_Curve_PipeapproveTokenCall as Curve_to_Curve_PipeapproveTokenCallSchema,
  Curve_to_Curve_PipedestructCall as Curve_to_Curve_PipedestructCallSchema,
  Curve_to_Curve_PipeinCaseTokengetsStuckCall as Curve_to_Curve_PipeinCaseTokengetsStuckCallSchema,
  Curve_to_Curve_PiperenounceOwnershipCall as Curve_to_Curve_PiperenounceOwnershipCallSchema,
  Curve_to_Curve_PipetoggleContractActiveCall as Curve_to_Curve_PipetoggleContractActiveCallSchema,
  Curve_to_Curve_PipetransferOwnershipCall as Curve_to_Curve_PipetransferOwnershipCallSchema,
  Curve_to_Curve_PipewithdrawCall as Curve_to_Curve_PipewithdrawCallSchema
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new Curve_to_Curve_PipeOwnershipTransferredEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleCurve2CurveCall(call: Curve2CurveCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_to_Curve_PipeCurve2CurveCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleapproveTokenCall(call: ApproveTokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_to_Curve_PipeapproveTokenCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handledestructCall(call: DestructCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_to_Curve_PipedestructCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_to_Curve_PipeinCaseTokengetsStuckCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_to_Curve_PiperenounceOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_to_Curve_PipetoggleContractActiveCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_to_Curve_PipetransferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_to_Curve_PipewithdrawCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
