---
sidebar_position: 4
---

# Fees

:::caution

This article may contain temporary information and applies only to the Spectrum Finance V1

:::

Spectrum Finance protocol V1 includes 3 types of fees:

| Fee                       | Assignment                         | Unit                              | Amount                                |
| ------------------------- | ---------------------------------- | --------------------------------- | ------------------------------------- |
| **Network Fee**           | Paid to Miners or Node stake pools | Native network currency (ERG/ADA) | min - ∞ (user choice)                 |
| **LP fee**                | Fee charged by each specific pool  | Output asset of the operation     | 0-100% (set when a liquidity pool is created) |
| **Execution Fee**         | Paid to execution bots             | Native network currency (ERG/ADA) | [Formula](#execution-fee-formula)     |

:::caution
The total fee for any operation varies from $0.5 to $5, depending on the rational choice of Nitro (read more
below). The best way to get lower fees is to leave default Nitro value. Change Nitro only if you completely
understand what is going on!
:::

#### Execution fee formula

**Execution Fee** is always a range of values (`minExFee - maxExFee`)

`minExFee = minerFee * 3`

`3` is a constant factor which have to satisfy the condition `minExFee > minerFee`

`maxExFee = minExFee * nitro`

#### What is `nitro`?

**Nitro** is the multiplier of the max execution fee. It is defined in order to give the user the ability to control
both the speed order execution and the maximum possible output.

`maxOutput = maxExFee / exFeePerToken`

where

`exFeePerToken = minExFee / minOutput`
