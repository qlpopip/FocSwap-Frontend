import BigNumber from 'bignumber.js'
import { BIG_ONE, BIG_ZERO } from 'utils/bigNumber'
import { filterFarmsByQuoteToken } from '@pancakeswap/farms'
import { SerializedFarm } from 'state/types'

const getFarmFromTokenSymbol = (
  farms: SerializedFarm[],
  tokenSymbol: string,
  preferredQuoteTokens?: string[],
): SerializedFarm => {
  const farmsWithTokenSymbol = farms.filter((farm) => farm.token.symbol === tokenSymbol)
  const filteredFarm = filterFarmsByQuoteToken(farmsWithTokenSymbol, preferredQuoteTokens)
  return filteredFarm
}

const getFarmBaseTokenPrice = (
  farm: SerializedFarm,
  quoteTokenFarm: SerializedFarm,
  nativePriceUSD: BigNumber,
  wNative: string,
  stable: string,
): BigNumber => {
  const hasTokenPriceVsQuote = Boolean(farm.tokenPriceVsQuote)

  if (farm.quoteToken.symbol === stable) {
    return hasTokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : BIG_ZERO
  }

  if (farm.quoteToken.symbol === wNative) {
    // console.log(farm.quoteToken.symbol, "==", farm.tokenPriceVsQuote)
    return hasTokenPriceVsQuote ? nativePriceUSD.times(farm.tokenPriceVsQuote) : BIG_ZERO
  }

  // We can only calculate profits without a quoteTokenFarm for BUSD/BNB farms
  if (!quoteTokenFarm) {
    return BIG_ZERO
  }

  // Possible alternative farm quoteTokens:
  // UST (i.e. MIR-UST), pBTC (i.e. PNT-pBTC), BTCB (i.e. bBADGER-BTCB), ETH (i.e. SUSHI-ETH)
  // If the farm's quote token isn't BUSD or WBNB, we then use the quote token, of the original farm's quote token
  // i.e. for farm PNT - pBTC we use the pBTC farm's quote token - BNB, (pBTC - BNB)
  // from the BNB - pBTC price, we can calculate the PNT - BUSD price
  if (quoteTokenFarm.quoteToken.symbol === wNative) {
    const quoteTokenInBusd = nativePriceUSD.times(quoteTokenFarm.tokenPriceVsQuote)
    return hasTokenPriceVsQuote && quoteTokenInBusd
      ? new BigNumber(farm.tokenPriceVsQuote).times(quoteTokenInBusd)
      : BIG_ZERO
  }

  if (quoteTokenFarm.quoteToken.symbol === stable) {
    const quoteTokenInBusd = quoteTokenFarm.tokenPriceVsQuote
    return hasTokenPriceVsQuote && quoteTokenInBusd
      ? new BigNumber(farm.tokenPriceVsQuote).times(quoteTokenInBusd)
      : BIG_ZERO
  }

  // Catch in case token does not have immediate or once-removed BUSD/WBNB quoteToken
  return BIG_ZERO
}

const getFarmQuoteTokenPrice = (
  farm: SerializedFarm,
  quoteTokenFarm: SerializedFarm,
  nativePriceUSD: BigNumber,
  wNative: string,
  stable: string,
): BigNumber => {
  // console.log(quoteTokenFarm)
  if (farm.quoteToken.symbol === stable) {
    return BIG_ONE
  }

  if (farm.quoteToken.symbol === wNative) {
    return nativePriceUSD
  }

  if (!quoteTokenFarm) {
    return BIG_ZERO
  }

  if (quoteTokenFarm.quoteToken.symbol === wNative) {
    return quoteTokenFarm.tokenPriceVsQuote ? nativePriceUSD.times(quoteTokenFarm.tokenPriceVsQuote) : BIG_ZERO
  }

  if (quoteTokenFarm.quoteToken.symbol === stable) {
    return quoteTokenFarm.tokenPriceVsQuote ? new BigNumber(quoteTokenFarm.tokenPriceVsQuote) : BIG_ZERO
  }

  return BIG_ZERO
}

const getFarmsPrices = (farms: SerializedFarm[], chainId: number) => {
  if (!nativeStableLpMap[chainId]) {
    throw new Error(`chainId ${chainId} not supported`)
  }

  const nativeStableFarm = farms.find(
    (farm) => farm.lpAddress.toLowerCase() === nativeStableLpMap[chainId].address.toLowerCase(),
  )
  // console.log(nativeStableFarm)
  const nativePriceUSD = nativeStableFarm.tokenPriceVsQuote ? BIG_ONE.div(nativeStableFarm.tokenPriceVsQuote) : BIG_ZERO
  // console.log(nativePriceUSD)
  const farmsWithPrices = farms.map((farm) => {
    const quoteTokenFarm = getFarmFromTokenSymbol(farms, farm.quoteToken.symbol, [
      nativeStableLpMap[chainId].wNative,
      nativeStableLpMap[chainId].stable,
    ])
    const tokenPriceBusd = getFarmBaseTokenPrice(
      farm,
      quoteTokenFarm,
      nativePriceUSD,
      nativeStableLpMap[chainId].wNative,
      nativeStableLpMap[chainId].stable,
    )
    // console.log("===", tokenPriceBusd)
    const quoteTokenPriceBusd = getFarmQuoteTokenPrice(
      farm,
      quoteTokenFarm,
      nativePriceUSD,
      nativeStableLpMap[chainId].wNative,
      nativeStableLpMap[chainId].stable,
    )

    return {
      ...farm,
      tokenPriceBusd: tokenPriceBusd.toJSON(),
      quoteTokenPriceBusd: quoteTokenPriceBusd.toJSON(),
    }
  })
  // console.log(farmsWithPrices)
  return farmsWithPrices
}

export default getFarmsPrices

const nativeStableLpMap = {
  5: {
    address: '0xF51BAea3d139Ca5b6541c601411384e8c06481B9',
    wNative: 'WETH',
    stable: 'tUSDC',
  },
  56: {
    address: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    wNative: 'WBNB',
    stable: 'BUSD',
  },
  97: {
    address: '0x4E96D2e92680Ca65D58A0e2eB5bd1c0f44cAB897',
    wNative: 'WBNB',
    stable: 'BUSD',
  },
  1001: {
    address: '0x4A70d74Cf66B1d8bbEddacEB058943Aa78DD2C8B',
    wNative: 'WKLAY',
    stable: 'oUSDT',
  }, // 수정
  8217: {
    address: '0x07cae31cebfb44961f7bf6619e5f05aa5df8d749',
    wNative: 'WKLAY',
    stable: 'oUSDT',
  }, // 수정
  11155111: {
    address: '0x1af1a4EeCc1C22e682Df5290ee4a53eabFbfe0D9',
    wNative: 'WETH',
    stable: 'USDC',
  },
  2021: {
    address: '0xac1750d5613c6db372108dc9d0543ab4a9310919',
    wNative: 'WRON',
    stable: 'USDC',
  },
}
