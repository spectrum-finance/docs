---
sidebar_position: 5
---

# Analytics

Spectrum Finance has a growing number of analytics available to show the user how productive a pool is. This will be added to frequently going forward, the purpose of this article is to explain the current analytics available.

## Pool overview

Here you can see all the pool position overview page. Almost all analytics can be seen from here.
![Pool position screen](/img/protocol-overview/analytics/1.png)

### TVL

TVL stands for Total Value Locked. This is an addition of all the funds locked in either the complete DEX, which can be seen up the top left of the homepage, or also in each pool.
A higher TVL value is always going to be better. It will mean swaps have less chance of failing due to slippage tolerance as there is much more liquidity in the pool, meaning less volatility.

### Volume 24H

Volume is a cumulative $value for all trades completed on the DEX over the span of 24 hours. It is shown as both the overall DEX volume, but you can also check specifically for each pool.

### Fee Tier

This is the fee charged by each pool to make a transaction. It is set when the pool is created, these fee profits are paid in the asset received in the output of the transaction.
These fees are what contribute to the liquidity pool to ensure liquidity providers are rewarded.

### APR

This is a dynamic % value that will let someone calculate their liquidity pool gains. This will change according to volume of swaps in the pool. See below example.

We will create a test pool scenario. Lets say ERG/SigUSD, below are the pool stats.

Liquidity: `$500k`  
Volume 24H: `$100k`

**Calculate yearly fees**  
Use the 24H volume to calculate the fee share of liquidity providers in the pool (based on the 0.4% trading fee structure):  
`$100,000 * 0.4 / 100 = $400`

Next, use that fee share to estimate the projected yearly fees earned by the pool (based on the current 24h volume):  
`$400 * 365 = $146,000`

We can now use the yearly fees to calculate the LP rewards APR: That's yearly fees divided by liquidity:  
`($146,000 / $500,000) * 100 = 29.2%` LP reward APR
