---
sidebar_position: 4
---

# Fees

:::caution

This article may contain temporary information and applies only to the ErgoDEX V1

:::

ErgoDEX protocol V1 includes 3 types of fees:

| Fee              | Assignment                         | Unit                              | Amount                            |
| ---------------- | ---------------------------------- | --------------------------------- | --------------------------------- |
| Network Fee      | Paid to Miners or Node stake pools | Native network currency (ERG/ADA) | min - ∞ (user choice)             |
| Execution Fee    | Paid to execution bots             | Native network currency (ERG/ADA) | [Formula](#execution-fee-formula) |
| DEX Fee (UI Fee) | Paid to UI provider                | Native network currency (ERG/ADA) | 0.01 ERG / 0.4 ADA                |

#### Execution fee formula

**Execution Fee** is always a range of values (`minExFee - maxExFee`)

`minExFee = minerFee * 1.5`

`1.5`: constant factor which have to satisfy the condition `minExFee > minerFee`

`maxExFee = minExFee * Nitro`

#### Nitro
**Nitro** is the multiplier of the max execution fee. It is defined in order to give the user the ability to control 
both the speed order execution and the maximum possible output.

`MaxOutput = maxExFee / exFeePerToken`

where

`exFeePerToken = minExFee / minOutput`