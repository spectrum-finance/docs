---
sidebar_position: 1
title: Automated market maker
---

# Automated market maker (AMM)

AMM DEX uses an automated market maker mechanism to provide instant feedback on rates and slippage. AMM DEX suits best for pairs with low liquidity.

Each AMM liquidity pool is a trading venue for a pair of assets. In order to facilitate trades a liquidity pool accepts deposits of underlying assets proportional to their price rates. Whenever deposit happens a proportional amount of unique tokens known as liquidity tokens is minted. Minted liquidity tokens are distributed among liquidity providers proportional to their deposits. Liquidity providers can later exchange their liquidity tokens share for a proportional amount of underlying reserves.

## Constant Function Market Makers (CFMM, classical AMM pools)

Classical AMM pools are based on Constant Product formula which is `x*y=c`, where `x` and `y` are deposits on tokens X and Y respectively and `c` is their product which has to remain constant after swap operations. CFMMs provide liquidity across the entire price range.

![crmm](/img/protocol-overview/amm/1.png)

## Concentrated AMM pools

While in CFMMs liquidity is uniformly distributed along the reserve curve, which is slightly inefficient as much of the reserves held in a pool are never used, Concentrated AMMs allow LPs to provide liquidity to smaller price ranges. Each pair is composed of smaller pools each corresponding to some price range. We call such pool a concentrated liquidity pool (CLP). A CLP only needs to maintain enough reserves to support trading within its range, and therefore can act like a constant product pool with larger reserves (we call these the virtual reserves) within that range. At the same time LPs are not bound to some particular CLP and price range and can provide liquidity to multiple adjacent CLPs therefore forming something what we call a position. While price of an asset is within a position's price range the position is earning protocol fees. When the price escapes the position's price range its liquidity no longer earns fees as it's not active anymore.

![crmm](/img/protocol-overview/amm/2.png)