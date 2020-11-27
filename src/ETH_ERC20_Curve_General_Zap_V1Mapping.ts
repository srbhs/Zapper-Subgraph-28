import { OwnershipTransferred as OwnershipTransferredEvent } from "../generated/ETH_ERC20_Curve_General_Zap_V1/ETH_ERC20_Curve_General_Zap_V1"
import {
  ZapInCall,
  ApproveTokenCall,
  DestructCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetnewdzgoodwillAddressCall,
  SetnewgoodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/ETH_ERC20_Curve_General_Zap_V1/ETH_ERC20_Curve_General_Zap_V1"
import { ETH_ERC20_Curve_General_Zap_V1OwnershipTransferredEvent as ETH_ERC20_Curve_General_Zap_V1OwnershipTransferredEventSchema } from "../generated/schema"
import {
  ETH_ERC20_Curve_General_Zap_V1ZapInCall as ETH_ERC20_Curve_General_Zap_V1ZapInCallSchema,
  ETH_ERC20_Curve_General_Zap_V1approveTokenCall as ETH_ERC20_Curve_General_Zap_V1approveTokenCallSchema,
  ETH_ERC20_Curve_General_Zap_V1destructCall as ETH_ERC20_Curve_General_Zap_V1destructCallSchema,
  ETH_ERC20_Curve_General_Zap_V1inCaseTokengetsStuckCall as ETH_ERC20_Curve_General_Zap_V1inCaseTokengetsStuckCallSchema,
  ETH_ERC20_Curve_General_Zap_V1renounceOwnershipCall as ETH_ERC20_Curve_General_Zap_V1renounceOwnershipCallSchema,
  ETH_ERC20_Curve_General_Zap_V1setnewdzgoodwillAddressCall as ETH_ERC20_Curve_General_Zap_V1setnewdzgoodwillAddressCallSchema,
  ETH_ERC20_Curve_General_Zap_V1setnewgoodwillCall as ETH_ERC20_Curve_General_Zap_V1setnewgoodwillCallSchema,
  ETH_ERC20_Curve_General_Zap_V1toggleContractActiveCall as ETH_ERC20_Curve_General_Zap_V1toggleContractActiveCallSchema,
  ETH_ERC20_Curve_General_Zap_V1transferOwnershipCall as ETH_ERC20_Curve_General_Zap_V1transferOwnershipCallSchema,
  ETH_ERC20_Curve_General_Zap_V1withdrawCall as ETH_ERC20_Curve_General_Zap_V1withdrawCallSchema
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new ETH_ERC20_Curve_General_Zap_V1OwnershipTransferredEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleZapInCall(call: ZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ETH_ERC20_Curve_General_Zap_V1ZapInCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.crvTokensBought = call.outputs.crvTokensBought
  entity.save()
}

export function handleapproveTokenCall(call: ApproveTokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ETH_ERC20_Curve_General_Zap_V1approveTokenCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handledestructCall(call: DestructCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ETH_ERC20_Curve_General_Zap_V1destructCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ETH_ERC20_Curve_General_Zap_V1inCaseTokengetsStuckCallSchema(
    id
  )
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ETH_ERC20_Curve_General_Zap_V1renounceOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewdzgoodwillAddressCall(
  call: SetnewdzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ETH_ERC20_Curve_General_Zap_V1setnewdzgoodwillAddressCallSchema(
    id
  )
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ETH_ERC20_Curve_General_Zap_V1setnewgoodwillCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ETH_ERC20_Curve_General_Zap_V1toggleContractActiveCallSchema(
    id
  )
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ETH_ERC20_Curve_General_Zap_V1transferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ETH_ERC20_Curve_General_Zap_V1withdrawCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
