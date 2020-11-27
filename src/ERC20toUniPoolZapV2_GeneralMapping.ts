import {
  details as detailsEvent,
  residualETH as residualETHEvent
} from "../generated/ERC20toUniPoolZapV2_General/ERC20toUniPoolZapV2_General"
import {
  LetsInvestCall,
  InCaseTokengetsStuckCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/ERC20toUniPoolZapV2_General/ERC20toUniPoolZapV2_General"
import {
  ERC20toUniPoolZapV2_GeneraldetailsEvent as ERC20toUniPoolZapV2_GeneraldetailsEventSchema,
  ERC20toUniPoolZapV2_GeneralresidualETHEvent as ERC20toUniPoolZapV2_GeneralresidualETHEventSchema
} from "../generated/schema"
import {
  ERC20toUniPoolZapV2_GeneralLetsInvestCall as ERC20toUniPoolZapV2_GeneralLetsInvestCallSchema,
  ERC20toUniPoolZapV2_GeneralinCaseTokengetsStuckCall as ERC20toUniPoolZapV2_GeneralinCaseTokengetsStuckCallSchema,
  ERC20toUniPoolZapV2_GeneraltoggleContractActiveCall as ERC20toUniPoolZapV2_GeneraltoggleContractActiveCallSchema,
  ERC20toUniPoolZapV2_GeneraltransferOwnershipCall as ERC20toUniPoolZapV2_GeneraltransferOwnershipCallSchema,
  ERC20toUniPoolZapV2_GeneralwithdrawCall as ERC20toUniPoolZapV2_GeneralwithdrawCallSchema
} from "../generated/schema"

export function handledetailsEvent(event: detailsEvent): void {
  let entity = new ERC20toUniPoolZapV2_GeneraldetailsEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.user = event.params.user
  entity.toWhomIssued = event.params.toWhomIssued
  entity.IncomingTokenAddress = event.params.IncomingTokenAddress
  entity.UniPoolUnderlyingTokenAddressTokenAddress =
    event.params.UniPoolUnderlyingTokenAddressTokenAddress
  entity.save()
}

export function handleresidualETHEvent(event: residualETHEvent): void {
  let entity = new ERC20toUniPoolZapV2_GeneralresidualETHEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.residualETHtransferred = event.params.residualETHtransferred
  entity.save()
}

export function handleLetsInvestCall(call: LetsInvestCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ERC20toUniPoolZapV2_GeneralLetsInvestCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ERC20toUniPoolZapV2_GeneralinCaseTokengetsStuckCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ERC20toUniPoolZapV2_GeneraltoggleContractActiveCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ERC20toUniPoolZapV2_GeneraltransferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ERC20toUniPoolZapV2_GeneralwithdrawCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
