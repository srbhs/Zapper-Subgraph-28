import { OwnershipTransferred as OwnershipTransferredEvent } from "../generated/MultiPoolZapV1_4/MultiPoolZapV1_4"
import {
  MultipleZapInCall,
  RenounceOwnershipCall,
  SetUniswapFactoryCall,
  SetnewdzgoodwillAddressCall,
  SetnewgoodwillCall,
  SetuniswapPoolZapAddressCall,
  TransferOwnershipCall
} from "../generated/MultiPoolZapV1_4/MultiPoolZapV1_4"
import { MultiPoolZapV1_4OwnershipTransferredEvent as MultiPoolZapV1_4OwnershipTransferredEventSchema } from "../generated/schema"
import {
  MultiPoolZapV1_4multipleZapInCall as MultiPoolZapV1_4multipleZapInCallSchema,
  MultiPoolZapV1_4renounceOwnershipCall as MultiPoolZapV1_4renounceOwnershipCallSchema,
  MultiPoolZapV1_4setUniswapFactoryCall as MultiPoolZapV1_4setUniswapFactoryCallSchema,
  MultiPoolZapV1_4setnewdzgoodwillAddressCall as MultiPoolZapV1_4setnewdzgoodwillAddressCallSchema,
  MultiPoolZapV1_4setnewgoodwillCall as MultiPoolZapV1_4setnewgoodwillCallSchema,
  MultiPoolZapV1_4setuniswapPoolZapAddressCall as MultiPoolZapV1_4setuniswapPoolZapAddressCallSchema,
  MultiPoolZapV1_4transferOwnershipCall as MultiPoolZapV1_4transferOwnershipCallSchema
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new MultiPoolZapV1_4OwnershipTransferredEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handlemultipleZapInCall(call: MultipleZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new MultiPoolZapV1_4multipleZapInCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.underlyingTokenAddresses = call.inputs.underlyingTokenAddresses
  entity.respectiveWeightedValues = call.inputs.respectiveWeightedValues
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new MultiPoolZapV1_4renounceOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetUniswapFactoryCall(call: SetUniswapFactoryCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new MultiPoolZapV1_4setUniswapFactoryCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewdzgoodwillAddressCall(
  call: SetnewdzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new MultiPoolZapV1_4setnewdzgoodwillAddressCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new MultiPoolZapV1_4setnewgoodwillCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetuniswapPoolZapAddressCall(
  call: SetuniswapPoolZapAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new MultiPoolZapV1_4setuniswapPoolZapAddressCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new MultiPoolZapV1_4transferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}
