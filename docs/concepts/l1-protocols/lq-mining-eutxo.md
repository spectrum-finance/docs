---
id: lq-mining-eutxo
title: Liquidity Mining (eUTxO)
sidebar_position: 3
---

Liquidity Mining Protocol (also referred to as Yield Farming Protocol) allows anyone to set up his liquidity mining (LM)
program targeted at the desired pool on Spectrum Finance.

## Liquidity Mining Pool

Liquidity Mining (LM) Pool is represented on-chain as a UTxO with the following structure:

### Datum (LM configuration)

| Field              | Type   | Description                                                       |
|--------------------|--------|-------------------------------------------------------------------|
| `epochLen`         | `Int`  | Length of one epoch in blocks                                     |
| `epochNum`         | `Int`  | Number of epochs in the LM program                                |
| `programStart`     | `Int`  | Block the program starts at                                       |
| `redeemLimitDelta` | `Int`  | Number of blocks after the program to redeem without restrictions |
| `programBudget`    | `Long` | Total LM program budget                                           |
| `maxRoundingError` | `Long` | Total allowable residual from rounding                            |
| `execBudget`       | `Long` | Total execution budget                                            |
| `epoch`            | `Int`  | Index of the epoch being compounded                               |

*Notes*:

- `maxRoundingError` can be estimated as `epochNum` . Since the exact number of participants is difficult to predict in
  advance, It is convenient to choose a larger value, but it should be << `programBudget / epochNum` . If
  the `maxRoundingError` value is too small, the **LM program may break**, and if the value is too large, the *
  *distribution of rewards may be incorrect**!
- `execBudget` is **not necessary** for Self-Hosted LM Pool
- `epoch` **indexing starts from 1**

### Tokens

| Name             | Description                                                        |
|------------------|--------------------------------------------------------------------|
| Pool ID          | An NFT to identify the pool                                        |
| Reward token     | Budget of the LM program                                           |
| LQ token         | Locked LQ tokens                                                   |
| vLQ token        | Tokens representing locked share of LQ                             |
| Temporal Token   | Left program epochs times liquidity                                |
| Bundle Key Token | Token that is used to identify the ownership of the Staking bundle |

## Staking bundle

The staking bundle holds vLQ and Temporal tokens (Tmp). Staking bundle script guarantees to bundle of tokens and
controls Compounding and Redeem operations (see "User scenarios" below).

### Tokens

| Name           | Description                                              |
|----------------|----------------------------------------------------------|
| vLQ            | Virtual LQ token. Represents certain amount of liquidity |
| TMP            | Temporal token                                           |
| BundleKeyToken | Token to identify the ownership                          |

## User Scenarios

### Farm Creator

#### Create a Self-Hosted LM Pool

Bob works on a project X with a token Xt. He would like to incentivize holders of Xt to keep their tokens in ADA/Xt
pools. To do that, Bob sets parameters `epochLen` and `epochNum` and sends `L` tokens Xt to the LM script address. Bob
should configure his own Ergo-node and off-chain bots to perform transactions.

#### Create Delegated LM Pool

Bob works on a project X with a token Xt. He would like to incentivize holders of Xt to keep their tokens in ADA/Xt
pools. To do that, Bob sets parameters `epochLen` and `epochNum` sends `L` tokens Xt to the LM script address. In case
of Delegated LM Pool he should additionally send `Y` ERGs to the LM script address as `execBudget` for executing
transactions.

*Notes*:

- Deposited ERGs as `execBudget` **will be spent almost completely**!
- Once deposited during program initialization, **tokens Xt can't be redeemed**!

#### Increase Execution Budget

When created, the budget will be spent linearly. However, the exact number of ERGs needed depends on the number of
program participants. Creator will have to monitor ERGs balance and perform additional deposits.

#### General LM Pool Initialization Rules

When initializing an LM Pool (Self-Hosted or Delegated), the following actions **must be performed:**

1. Correct config:
    1. `epochNum` <= `maxRoundingError` << `programBudget / epochNum`
    2. `programBudget` stored in R5 of the LM Pool Box == (Total LM program budget - 1L)
2. Initial transaction with correct tokens' amounts, the creator of the LM Pool should also Deposit some LQ tokens and
   not Redeem received Staking Bundle until the LM program end.:

| Name | Amount                                          |
|------|-------------------------------------------------|
| X    | programBudget                                   |
| LQ   | initialDeposit                                  |
| vLQ  | 0x7fffffffffffffffL - initialDeposit            |
| TMP  | 0x7fffffffffffffffL - initialDeposit * epochNum |

*Notes*:

- Without the `initialDeposit` the LM program will break, no one will be able to take part in it, and the creator will
  lose his `programBudget`. Amount of the `initialDeposit` should be tiny, **it should not be redeemed either during or
  after the end of the program!**

### Farm Participant

#### Deposit

Alice wants to participate in LM program X. To do that, she sends `LQa` ADA/Xt LQ tokens to LM script address and
receives bundled (see "Staking bundle" section above) `vLQa` vLQ tokens + `TMPa` temporal tokens in return,
where `vLQa` - amount of LQ tokens deposited, `LQa = vLQa`, `TMPa = NumEpochsDelegated * vLQa`. She also gets a
BundleKeyToken token `(BundleKeyId, C)`, which will be needed for "Staking bundle" redemption.

![lq-mining-deposit-scheme-1](/img/protocols/lq-mining-eutxo/lq-mining-scheme-1.png)

![lq-mining-deposit-scheme-2](/img/protocols/lq-mining-eutxo/lq-mining-scheme-2.png)

*Notes*:

- If the user wants to add more LQ tokens, a new "Staking bundle" will be released
- New "Staking bundle" **can't be released until all previous epochs are compounded**
- Amount of received Bundle Key Tokens C is 0x7fffffffffffffffL - 1L

#### Reward

After each epoch rewards, allocated for each epoch, are fully distributed among stakers. Each staker automatically
receives a reward of `EpochReward * StakerLQ / LockedLQ` tokens `Xt` on his wallet for each passed
epoch. `TMPa - vLQa * NumEpochsBurned` epoch token is withdrawn from Alice's staking bundle box each time compounding
happens.

![lq-mining-reward-scheme-1](/img/protocols/lq-mining-eutxo/lq-mining-scheme-3.png)

#### Redeem

Once Alice decided to unstake her liquidity she returns her staking bundle to LM Pool and receives proportional amount
of LQ tokens to the amount of vLQ returned. Redemption is only allowed when all previous epochs of program are
compounded.

![lq-mining-redeem-scheme-1](/img/protocols/lq-mining-eutxo/lq-mining-scheme-4.png)

![lq-mining-redeem-scheme-2](/img/protocols/lq-mining-eutxo/lq-mining-scheme-5.png)

*Notes*:

- LQ tokens can't be redeemed **until all previous epochs are compounded** or until `redeemLimitDelta` is reached after
  the end of the program