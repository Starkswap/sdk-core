import { validateAndParseAddress } from './validateAndParseAddress'

describe('#validateAndParseAddress', () => {
  const address = '0x00B6D60D4C78770A4399c618c7C3326Ceaa33e2f4f9FE8D319ae74b6223Af2E1'

  it('returns same address if already checksummed', () => {
    expect(validateAndParseAddress(address)).toEqual(address)
  })

  it('returns checksummed address if not checksummed', () => {
    expect(validateAndParseAddress(address.toLowerCase())).toEqual(address)
  })

  it('throws if not valid', () => {
    expect(() => validateAndParseAddress('0xhell000000000000000000')).toThrow(
      '0xhell000000000000000000 is not a valid address.'
    )
  })
})
