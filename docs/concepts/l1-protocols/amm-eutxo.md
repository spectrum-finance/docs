---
id: amm-eutxo
title: Automated Market Maker (eUTxO)
sidebar_position: 2
---

## Introduction

In traditional, centralized finance, the act of exchange is facilitated by a trusted third-party, such as a market
maker, bookie, or other intermediary. This was accomplished using order books, where buy and sell orders were matched.
These paper order books eventually became centralized exchanges (CEXes), like those used in stock markets.

The act of exchange without trusted parties is one of the most basic features necessary for decentralized finance (DeFi)
on top of blockchains. Instead of trusted intermediaries, a decentralized exchange (DEX) works using trusted smart
contracts. Many features of centralized order-book exchanges - such as partial filling of orders, buyback guarantees and
so on - have been successfully implemented within smart contracts. In smart contracts, these features are usually
composable. Composable elements in smart contracts are suitable for traders for several reasons, such as they make them
easier to understand and use.

DeFi has two decentralized exchanges (DEXes) types: order-book, similar to traditional financial exchanges, and
Automated Market Maker (AMM). Swap order contracts allow for order-book-based DEXes, which follow traditional financial
models. They are well-established and work best in markets with high liquidity. AMM DEXes are also becoming possible on
blockchains with advanced smart contracts. As in traditional order books, AMM uses mathematical models to set prices and
match buyers and sellers rather than merely matching buy and sell orders. AMM is best in markets with low liquidity. One
of the features of AMM is that liquidity providers add assets to the exchange for a fee. The market benefits from
increased liquidity, more negligible latency, limited price slippage, and less market volatility when using this
additional liquidity.

Interestingly, one of the unique features of Ergo and Cardano is that thanks to the eUTXO ledger model they use,
liquidity pool contracts for AMM DEXes can be combined with the order contracts used in order-book DEXes. This
capability enables shared liquidity among different types of exchanges on the Ergo and Cardano blockchains, which was
impossible to do before.

This document describes the Automated Decentralized Exchange protocol on top of Ergo and Cardano.

## Protocol architecture overview

### AMM DEX

Unlike order-book-based DEX, which relies on an order book to represent liquidity and determine prices, AMM DEX uses an
automated market maker mechanism to provide instant feedback on rates and slippage. AMM DEX suits best pairs with low
liquidity.

Each AMM liquidity pool is a trading venue for a pair of assets. A liquidity pool accepts underlying asset deposits
proportional to their price rates to facilitate trades. Whenever a deposit happens, a proportional amount of unique
tokens known as liquidity tokens is minted. Minted liquidity tokens are distributed among liquidity providers
proportional to their deposits. Liquidity providers can later exchange their liquidity tokens share for a proportional
amount of underlying reserves.

### Constant Function Market Makers (CFMM, classical AMM pools)

Classical AMM pools are based on Constant Product formula, which is `x*y=c`, where `x` and `y` are deposits on tokens X
and Y, respectively, and `c` is their product which has to remain constant after swap operations. CFMMs provide
liquidity across the entire price range.

![amm-eutxo-lq-pool-scheme](/img/protocols/amm-eutxo/amm-eutxo-lq-pool-scheme.jpg)

## Off-chain execution

For efficiency, most DEX actions are split into two stages: 1. order creation and 2. execution. Once an order is
submitted to the network, it can be executed by off-chain bots. Off-chain bot is software that tracks orders and makes
transactions, performing all the necessary state transitions. Validation scripts check on-chain the legitimacy of all
transitions. Off-chain bots can be run by anyone willing to support the protocol and earn execution fees.

![amm-eutxo-off-chain-scheme](/img/protocols/amm-eutxo/amm-eutxo-off-chain-scheme.jpg)

## Tokenomics

In the eUTxO AMM protocol, each actor is incentivized to fulfill his role as well as possible.

There are five types of economic agents in the ErgoDEX ecosystem:

| Type of agent             | Goal of incentives   |
|---------------------------|----------------------|
| Miners                    | Process transactions |
| UI providers              | Provide better UI    |
| Off-chain executors       | Execute orders       |
| Liquidity providers (LPs) | Provide liquidity    |
| Traders                   | Use DEX              |

Each type of agents benefits from using DEX in his way:

- Miners are earning miner fees paid in native tokens
- UI providers are earning fees paid in native tokens charged for each operation done via UI
- Off-chain executors are earning fees paid in native tokens from both OrderBook and AMM services
    - In AMM: fees are charged for every operation on a liquidity pool
        - A number of native tokens defined by a user for deposit|redeem operations
        - A number of native tokens defined by a user for each unit of quote asset exchanged
    - In OrderBook: fees are charged in native tokens for each unit of quote asset exchanged
- LPs benefit from protocol fees paid in tokens and accumulated in liquidity pools
- Traders benefit from the DEX services they use