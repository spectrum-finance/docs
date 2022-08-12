---
sidebar_position: 3
---

# Off-chain execution

For the sake of efficiency most of the DEX actions are split into two stages:
1. order creation
2. order execution

Once an order is submitted to the network it can be executed by off-chain bots. Off-chain bot is a piece of software that tracks orders and makes transactions from them performing all the necessary state transitions. Legitimacy of all transitions is checked on-chain by validation scripts. Off-chain bot can be run by anyone who is willing to support Spectrum.DEX and earn execution fees.

![crmm](/img/protocol-overview/amm/3.png)

