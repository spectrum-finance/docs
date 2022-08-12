---
sidebar_position: 2
---

# Order Book

Orders are waiting for other orders to be matched, or for a cancellation. There are the following three types of orders — "buy" (i.e. buy tokens for native asset), "sell" (i.e. sell tokens for native asset), and "swap" (buy tokens for other tokens) orders. Order-book DEX has the advantage of working best for those pairs with high liquidity.

![order-book](/img/protocol-overview/amm/4.png)

## Atomic limit orders
Atomic orders can only be executed completely and are otherwise refunded. Such orders can either be aggregated by the Spectrum.DEX client so that users can choose from them or matched in an order-book with partial orders which will be defined next.

## Partial limit orders
Partial orders are something more familiar to those who've ever used classical centralized exchanges (CEXes). These orders can be partially executed so the best way to work with them is an order-book, where they can be aggregated, matched and executed by Spectrum.DEX bots.

