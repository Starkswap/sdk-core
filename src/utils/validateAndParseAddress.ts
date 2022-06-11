import {getChecksumAddress, validateChecksumAddress} from "starknet";

/**
 * Validates an address and returns the parsed (checksummed) version of that address
 * @param address the unchecksummed hex address
 */
export function validateAndParseAddress(address: string): string {
    let checksumAddress = getChecksumAddress(address);
    if (validateChecksumAddress(checksumAddress)) {
      return checksumAddress;
    }
    else throw new Error(`${address} is not a valid address.`);
}
