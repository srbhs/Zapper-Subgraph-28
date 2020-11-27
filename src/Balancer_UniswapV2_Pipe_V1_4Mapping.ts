import { OwnershipTransferred as OwnershipTransferredEvent } from "../generated/Balancer_UniswapV2_Pipe_V1_4/Balancer_UniswapV2_Pipe_V1_4"
import {
  PipeBalancerUniV2Call,
  PipeUniV2BalancerCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetBalancerZapOutCall,
  SetUniswapV2ZapInCall,
  SetUniswapV2ZapOutCall,
  SetbalancerZapInCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/Balancer_UniswapV2_Pipe_V1_4/Balancer_UniswapV2_Pipe_V1_4"
import { Balancer_UniswapV2_Pipe_V1_4OwnershipTransferredEvent as Balancer_UniswapV2_Pipe_V1_4OwnershipTransferredEventSchema } from "../generated/schema"
import {
  Balancer_UniswapV2_Pipe_V1_4PipeBalancerUniV2Call as Balancer_UniswapV2_Pipe_V1_4PipeBalancerUniV2CallSchema,
  Balancer_UniswapV2_Pipe_V1_4PipeUniV2BalancerCall as Balancer_UniswapV2_Pipe_V1_4PipeUniV2BalancerCallSchema,
  Balancer_UniswapV2_Pipe_V1_4inCaseTokengetsStuckCall as Balancer_UniswapV2_Pipe_V1_4inCaseTokengetsStuckCallSchema,
  Balancer_UniswapV2_Pipe_V1_4renounceOwnershipCall as Balancer_UniswapV2_Pipe_V1_4renounceOwnershipCallSchema,
  Balancer_UniswapV2_Pipe_V1_4setBalancerZapOutCall as Balancer_UniswapV2_Pipe_V1_4setBalancerZapOutCallSchema,
  Balancer_UniswapV2_Pipe_V1_4setUniswapV2ZapInCall as Balancer_UniswapV2_Pipe_V1_4setUniswapV2ZapInCallSchema,
  Balancer_UniswapV2_Pipe_V1_4setUniswapV2ZapOutCall as Balancer_UniswapV2_Pipe_V1_4setUniswapV2ZapOutCallSchema,
  Balancer_UniswapV2_Pipe_V1_4setbalancerZapInCall as Balancer_UniswapV2_Pipe_V1_4setbalancerZapInCallSchema,
  Balancer_UniswapV2_Pipe_V1_4toggleContractActiveCall as Balancer_UniswapV2_Pipe_V1_4toggleContractActiveCallSchema,
  Balancer_UniswapV2_Pipe_V1_4transferOwnershipCall as Balancer_UniswapV2_Pipe_V1_4transferOwnershipCallSchema,
  Balancer_UniswapV2_Pipe_V1_4withdrawCall as Balancer_UniswapV2_Pipe_V1_4withdrawCallSchema
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new Balancer_UniswapV2_Pipe_V1_4OwnershipTransferredEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handlePipeBalancerUniV2Call(call: PipeBalancerUniV2Call): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_UniswapV2_Pipe_V1_4PipeBalancerUniV2CallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handlePipeUniV2BalancerCall(call: PipeUniV2BalancerCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_UniswapV2_Pipe_V1_4PipeUniV2BalancerCallSchema(id)
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
  let entity = new Balancer_UniswapV2_Pipe_V1_4inCaseTokengetsStuckCallSchema(
    id
  )
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_UniswapV2_Pipe_V1_4renounceOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetBalancerZapOutCall(call: SetBalancerZapOutCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_UniswapV2_Pipe_V1_4setBalancerZapOutCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetUniswapV2ZapInCall(call: SetUniswapV2ZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_UniswapV2_Pipe_V1_4setUniswapV2ZapInCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetUniswapV2ZapOutCall(
  call: SetUniswapV2ZapOutCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_UniswapV2_Pipe_V1_4setUniswapV2ZapOutCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetbalancerZapInCall(call: SetbalancerZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_UniswapV2_Pipe_V1_4setbalancerZapInCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_UniswapV2_Pipe_V1_4toggleContractActiveCallSchema(
    id
  )
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_UniswapV2_Pipe_V1_4transferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_UniswapV2_Pipe_V1_4withdrawCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
