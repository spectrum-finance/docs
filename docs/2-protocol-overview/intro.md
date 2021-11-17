---
sidebar_position: 0
title: Introduction
---

# Introduction to the protocol

In traditional, centralized finance, the act of exchange is facilitated by a trusted third-party, such as a market maker, bookie, or other intermediary. This was accomplished using order-books, where buy and sell orders were matched. These paper order-books eventually turned into centralized exchanges (CEXes), like those used in stock markets.

The act of exchange without trusted parties is one of the most basic features necessary for decentralized finance (DeFi) on top of blockchains. Instead of trusted intermediaries, a decentralized exchange (DEX) works using trusted smart contracts. Many features of centralized, order-book exchanges - such as partial filling of orders, buyback guarantees and so on - have been successfully implemented within smart contracts. In smart contracts, these features are usually composable. Composable elements in smart contracts are good for traders for a number of reasons, such as they make them easier to understand and use.

In DeFi, there are two types of decentralized exchanges (DEXes): order-book, similar to traditional, financial exchanges and Automated Market Maker (AMM). Swap order contracts allows for order-book based DEXes, and these follow traditional financial models. They are well established, and they work best in markets with high liquidity. AMM DEXes are also becoming possible on blockchains with advanced smart contracts. AMM uses mathematical models to set the price and match buyers and sellers rather than merely matching buy and sell orders, as in traditional order-books. AMM is best in markets with low liquidity. One of the features of AMM is that liquidity providers add assets to the exchange for a fee, and the market benefits from an increase in liquidity, smaller latency, limited price slippage, and less market volatility when using this additional liquidity.

Interestingly, one of the unique features of Ergo and Cardano is that, thanks to the eUTXO ledger model they use, liquidity pool contracts for AMM DEXes can be combined with the order contracts used in order-book DEXes. This capability enables shared liquidity among different types of exchanges on the Ergo and Cardano blockchains, which was not possible to do before.

This set of documents provides a description of the Automated Decentralized Exchange protocol on top of Ergo and 
Cardano networks.
