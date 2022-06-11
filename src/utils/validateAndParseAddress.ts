import { getChecksumAddress, validateChecksumAddress } from 'starknet'

/**
 * Validates an address and returns the parsed (checksummed) version of that address
 * @param address the unchecksummed hex address
 */
export function validateAndParseAddress(address: string): string {
  try {
    let checksummedAddress = getChecksumAddress(address)
    if (validateChecksumAddress(checksummedAddress)) {
      return checksummedAddress
    } else throw new Error()
  } catch (e) {
    throw new Error(`${address} is not a valid address.`)
  }
}
