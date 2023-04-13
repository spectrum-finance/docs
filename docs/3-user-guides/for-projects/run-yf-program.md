---
sidebar_position: 2
title: Run Yield Farming pool
---

Currently, only the self-hosted version of the Yield Farming programs is available.
It means that in order to launch your own YF program, you need to perform 2 steps:

- Setup off-chain execution bots
- Deploy a Yield Farming Pool

## Setup off-chain execution bots

## Deploy a Yield Farming Pool

In order to init an Yield Farming Pool, the following actions should be performed:

1. Clone the [repository](https://github.com/spectrum-finance/spectrum-offchain-ergo).
2. To generate a valid wallet and an associated secret run:

```bash
cargo run -p spectrum-deploy-lm-pool generate-new-wallet
```

3. Send rewarding tokens and initial amount of liquidity (`initial_lq_token_deposit.amount`) tokens to the generated wallet. In addition, the wallet **must only contain** reward and LQ tokens. The deployment app will exit with an error if it finds other tokens in the wallet.

:::caution
The initial deposit (`initial_lq_token_deposit.amount`) is only necessary for initialization purposes and will inevitably be lost. As such, it's advisable to keep this amount minimal (any amount you're comfortable with losing, e.g. 10 - 1000 LP tokens).
:::

4. Fill in the config file `spectrum-deploy-lm-pool/deploy_pool.yml` with correct program parameters.

   a. Config parameters

   | Config parameter                    | Description                                                                                                                                                        |
   | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
   | `num_epochs_to_delegate`            | Number of epochs to delegate your initial deposit (actually the number of epochs in the program)                                                                   |
   | `operator_funding_secret`           | Program creator BIP39 mnemonic sentence                                                                                                                            |
   | `initial_lq_token_deposit.token_id` | LP tokens id                                                                                                                                                       |
   | `initial_lq_token_deposit.amount`   | LP tokens amount for an initial deposit                                                                                                                            |
   | `conf.program_budget.token_id`      | Reward token id                                                                                                                                                    |
   | `conf.program_budget.amount`        | Amount of reward tokens allocated to program (in the smallest reward token units)                                                                                  |
   | `conf.epoch_len`                    | Length of the program epoch in blocks                                                                                                                              |
   | `conf.epoch_num`                    | Number of epochs in the program                                                                                                                                    |
   | `conf.program_start`                | Block the program starts at                                                                                                                                        |
   | `conf.redeem_limit_delta`           | Number of blocks passed after the program ends allows participants’ to perform redeems without any restrictions                                                    |
   | `conf.max_rounding_error`           | Total allowable residual from rounding. It can be estimated as epochNum . It is convenient to choose a larger value, but it should be << programBudget / epochNum. |

   b. Config file sample:

   ```yaml
   node_addr: http://213.239.193.208:9053
   http_client_timeout_duration_secs: 50
   num_epochs_to_delegate: 10
   operator_funding_secret: ""
   tx_fee: 1000000
   erg_value_per_box: 250000
   initial_lq_token_deposit:
     token_id: e7021bda9872a7eb2aa69dd704e6a997dae9d1b40d1ff7a50e426ef78c6f6f87
     amount: 100
   conf:
     epoch_len: 250
     epoch_num: 5
     program_start: 970266
     redeem_blocks_delta: 250
     max_rounding_error: 500
     program_budget:
       token_id: 00bd762484086cf560d3127eb53f0769d76244d9737636b2699d55c56cd470bf
       amount: 900000
   ```

5. Run the deployment script by executing

```bash
cargo run -p spectrum-deploy-lm-pool deploy-pool --config-path spectrum-deploy-lm-pool/deploy_pool.yml
```

For any questions contact us in [Discord](https://discord.com/channels/881237412628533258/912611885545840721)
