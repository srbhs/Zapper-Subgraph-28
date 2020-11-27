import {
  OwnershipTransferred as OwnershipTransferredEvent,
  details as detailsEvent
} from "../generated/UniswapV1_ZapOut_General_V2/UniswapV1_ZapOut_General_V2"
import {
  LetsWithdrawonlyERCCall,
  LetsWithdrawonlyETHCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetnewgoodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/UniswapV1_ZapOut_General_V2/UniswapV1_ZapOut_General_V2"
import {
  UniswapV1_ZapOut_General_V2OwnershipTransferredEvent as UniswapV1_ZapOut_General_V2OwnershipTransferredEventSchema,
  UniswapV1_ZapOut_General_V2detailsEvent as UniswapV1_ZapOut_General_V2detailsEventSchema
} from "../generated/schema"
import {
  UniswapV1_ZapOut_General_V2LetsWithdrawonlyERCCall as UniswapV1_ZapOut_General_V2LetsWithdrawonlyERCCallSchema,
  UniswapV1_ZapOut_General_V2LetsWithdrawonlyETHCall as UniswapV1_ZapOut_General_V2LetsWithdrawonlyETHCallSchema,
  UniswapV1_ZapOut_General_V2inCaseTokengetsStuckCall as UniswapV1_ZapOut_General_V2inCaseTokengetsStuckCallSchema,
  UniswapV1_ZapOut_General_V2renounceOwnershipCall as UniswapV1_ZapOut_General_V2renounceOwnershipCallSchema,
  UniswapV1_ZapOut_General_V2setnewgoodwillCall as UniswapV1_ZapOut_General_V2setnewgoodwillCallSchema,
  UniswapV1_ZapOut_General_V2toggleContractActiveCall as UniswapV1_ZapOut_General_V2toggleContractActiveCallSchema,
  UniswapV1_ZapOut_General_V2transferOwnershipCall as UniswapV1_ZapOut_General_V2transferOwnershipCallSchema,
  UniswapV1_ZapOut_General_V2withdrawCall as UniswapV1_ZapOut_General_V2withdrawCallSchema
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new UniswapV1_ZapOut_General_V2OwnershipTransferredEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handledetailsEvent(event: detailsEvent): void {
  let entity = new UniswapV1_ZapOut_General_V2detailsEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.ExchangeAddress = event.params.ExchangeAddress
  entity.TokenAdddress = event.params.TokenAdddress
  entity.LiqRed = event.params.LiqRed
  entity.ethRec = event.params.ethRec
  entity.tokenRec = event.params.tokenRec
  entity.func = event.params.func
  entity.save()
}

export function handleLetsWithdrawonlyERCCall(
  call: LetsWithdrawonlyERCCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV1_ZapOut_General_V2LetsWithdrawonlyERCCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.LiquidityTokenSold = call.inputs.LiquidityTokenSold
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handleLetsWithdrawonlyETHCall(
  call: LetsWithdrawonlyETHCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV1_ZapOut_General_V2LetsWithdrawonlyETHCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.LiquidityTokenSold = call.inputs.LiquidityTokenSold
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV1_ZapOut_General_V2inCaseTokengetsStuckCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV1_ZapOut_General_V2renounceOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV1_ZapOut_General_V2setnewgoodwillCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV1_ZapOut_General_V2toggleContractActiveCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV1_ZapOut_General_V2transferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV1_ZapOut_General_V2withdrawCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
