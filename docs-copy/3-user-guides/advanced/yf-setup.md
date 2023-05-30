---
sidebar_position: 2
title: Yield Farming program deployment
---

:::caution
Currently, the interface doesn't support launching Yield Farming programs.
:::

To launch your Yield Farming program, follow these 4 steps:

1. Create a wallet
2. Set up an off-chain execution bot
3. Deploy the Yield Farming program
4. Add the program to the whitelist

To complete this guide, clone [this repository](https://github.com/spectrum-finance/spectrum-offchain-ergo). The source code is written in Rust, so ensure your environment is set up for working with this language. To prepare your environment, follow the guidelines provided [here](https://www.rust-lang.org/learn/get-started).

# 1. Create a wallet

:::caution
Establishing a wallet for every forthcoming Yield Farming program is **highly recommended**. Also, refrain from using wallet apps like Nautilus to produce mnemonic phrases relevant to these wallets. Specifically, execution bots necessitate a BIP39-compatible mnemonic linked to the wallet's private key.
:::

Before running the execution bot or/and deploying a new Yield Farming program, you must set up an appropriate wallet.

Note that the off-chain bot creates and submits transactions automatically. The Spectrum YF bot application has a sub-command to generate a new key. Just run:

```bash
cargo run -p spectrum-deploy-lm-pool generate-new-wallet
```

It will print out a BIP-39 mnemonic and its associated Ergo address.

Note that the bot will store your wallet's private key in memory during runtime.

As a bot operator, you must manage the ERG balance of the wallet. ERGs are used to pay miner fees and deliver rewards to your users. You can monitor the balance by going to: [https://explorer.ergoplatform.com/en/addresses/<wallet's_address>](https://explorer.ergoplatform.com/en/addresses). Use this [sheet template](https://docs.google.com/spreadsheets/d/1_peOpejbA_VZJMR5XI4E3zA3lQ8gT2Facpkf8l6J--Q/edit?usp=sharing) to calculate a program’s budget and potential APR.

# 2. Set up an off-chain execution bot

:::caution
If you don’t want to run infrastructure for off-chain bots yourself, we can do it for you. Contact us in [Discord](https://discord.com/invite/zY2gmTYQVD) to discuss.
:::

1. Download execution bot binaries from [here](https://github.com/spectrum-finance/spectrum-offchain-ergo/releases) or compile them yourself using this [repository](https://github.com/spectrum-finance/spectrum-offchain-ergo).
2. Then you need to edit the main config file of the bot `offchain_lm.yml`. In the example below, you will find all the necessary information to fill properties of the config file:

**offchain_lm.yml**

```yaml
node_addr: http://213.239.193.208:9053 # Address of ergo node to communicate with
http_client_timeout_duration_secs: 50 # Time to wait for ergo node request before timing out, in seconds. Don’t set too low as some blocks can be quite large in size.
chain_sync_starting_height: 990000 # Height of the chain for bot to start sync’ing.
operator_reward_addr: address # The Ergo address to send bot rewards. Do not specify as a string.
operator_funding_secret: "<seed>" # The BIP39 mnemonic sentence associated with the private key of the wallet that the bot will use to pay for transactions. Must be specified as a string.
log4rs_yaml_path: log4rs_default.yaml # Path to the YAML file for logging configuration.
backlog_config:
  order_lifespan: 8640000
  order_exec_time: 1200
  retry_suspended_prob: 20
backlog_store_db_path: ./tmp/backlog
entity_repo_db_path: ./tmp/pools
program_repo_db_path: ./tmp/programs
bundle_repo_db_path: ./tmp/bundles
funding_repo_db_path: ./tmp/funding
schedule_repo_db_path: ./tmp/schedule
chain_cache_db_path: ./tmp/chain
```

Leave the remaining properties as is.

:::caution
You may notice that an active Ergo Node is required to operate off-chain bots for your Yield Farming program. You can either use an open node address ([list](http://ergonodes.net/list)) or [run it yourself](https://docs.ergoplatform.com/node/install/manual/). Running the node yourself brings you more control over reward distribution.
:::

3. Next, configure the `log4rs_default.yml` file to begin collecting logs, which will aid in the ongoing maintenance of the bot.

**log4rs_default.yml**

```yaml
refresh_rate: 30 seconds
appenders:
  stdout:
    kind: console
  file:
    kind: rolling_file
    path: "log/spectrum-offchain.log"
    policy:
      trigger:
        kind: size
        limit: 100 mb # Sets the maximum size of the most recent log file.
      roller:
        kind: fixed_window
        pattern: logs/spectrum-offchain_{}.gz
        count: 10 # Once the log file reaches the size limit, it is compressed and stored locally. This setting controls the maximum number of compressed files to keep on disk. Old files are automatically rotated out. 
        base: 1
    encoder:
      pattern: "{d} - {m}{n}"
root:
  level: info
  appenders:
    - stdout
loggers:
  chain_sync:
    level: trace
    appenders:
      - file
    additive: false
  box_resolver:
    level: trace
    appenders:
      - file
    additive: false
  backlog:
    level: trace
    appenders:
      - file
    additive: false
  funding:
    level: trace
    appenders:
      - file
    additive: false
  bundles:
    level: trace
    appenders:
      - file
    additive: false
  scheduler:
    level: trace
    appenders:
      - file
    additive: false
  schedules:
    level: trace
    appenders:
      - file
    additive: false
  offchain_lm:
    level: trace
    appenders:
      - file
    additive: false
  pool:
    level: trace
    appenders:
      - file
    additive: false
```

1. After configuring your YAML files, place them together with the binary in a single directory and run the following command:

```yaml
./spectrum-offchain-lm --config-path offchain_lm.yml
```

🎉Bots are launched and ready to distribute rewards! Let’s deploy our Yield Farming program!

# 3. Deploy a Yield Farming program

We’ve created a new wallet and set up off-chain execution bots for our future Yield Farming program. Now, it’s time to initiate a Yield Farming program by locking rewarding tokens in the Yield Farming pool contract. In order to initiate a program and make it visible in the [interface](https://app.spectrum.fi/ergo/farm), you need to pass the following steps:

1. In the `spectrum-deploy-lm-pool` folder find a deployment config file `deploy_pool.yml`. You must fill it in with the correct parameters before the launch. Explore the example below to understand what does each parameter is responsible for:

```yaml
node_addr: http://213.239.193.208:9053 # Address of ergo node to communicate with
http_client_timeout_duration_secs: 50
num_epochs_to_delegate: 100 # Number of epochs to delegate your initial deposit (actually the number of epochs in the program). Should be equal to conf.epoch_num
operator_funding_secret: "<seed>" # Program creator BIP39 mnemonic sentence. Must be specified as a string. Use the same as for bot
tx_fee: 1000000
erg_value_per_box: 250000
initial_lq_token_deposit:
  token_id: e7021bda9872a7eb2aa69dd704e6a997dae9d1b40d1ff7a50e426ef78c6f6f87 # Liquidity token id on top of which the program will be launched
  amount: 100 # Liquidity tokens amount for an initial deposit
conf:
  epoch_len: 250 # Length of the program epoch in blocks, aka distribution frequency
  epoch_num: 100 # Number of epochs in the program, aka 
  program_start: 970266 # Block the program starts at
  redeem_blocks_delta: 250 # A number of blocks passed after the program ends allows participants to perform redeems without any restrictions
  max_rounding_error: 200 # Total allowable residual from rounding. It is recommended to set it prop as (epoch_num * 2)
  program_budget:
    token_id: 00bd762484086cf560d3127eb53f0769d76244d9737636b2699d55c56cd470f # Rewarding token id. This is the token you'd like to distribute
    amount: 900000 # Rewarding token amount in the smallest units
```

:::caution
⚠️ The initial deposit (`initial_lq_token_deposit.amount`) is only necessary for initialization purposes and will inevitably be lost. As such, it's advisable to keep this amount minimal (any amount you're comfortable with losing, e.g. 10 - 1000 liquidity tokens).
:::

2. Send rewarding tokens and the initial amount of liquidity (`initial_lq_token_deposit.amount`) to the wallet address you generated on [the first](#1-create-a-wallet) step of this entire guide. **The wallet must only contain rewarding tokens (**`program_budget.amount`**) and liquidity tokens (**`initial_lq_token_deposit.amount`**); otherwise, if the deployment script finds other tokens, it will exit with an error.**
3. Run the deployment command

```bash
cargo run -p spectrum-deploy-lm-pool deploy-pool --config-path spectrum-deploy-lm-pool/deploy_pool.yml
```

The output of this command will display the `program_id`. Make sure to save it, as you will require it for the subsequent step.

Excellent! Now that the Yield Farming program is prepared for token distribution, the only remaining step is to whitelist your farm and ensure it is displayed within the interface.

# 4. Whitelist the program

Now that your program is deployed on the blockchain, it's time to make it visible in the interface. To achieve this, copy the `program_id` obtained in the previous step and add it to [this file](https://github.com/spectrum-finance/interface/blob/dev/src/applicationConfig.ts#L177). Create a pull request targeting the `master` branch. The pull request should be formatted as follows:

```
Project name: "name"
Website: "link"
Twitter: "link"
Discord: "link"
Telegram: "link"
```

:::caution
If the pull request is incorrectly formatted, it will be automatically closed. Pay close attention to the format and ensure everything is correct before submitting the pull request.
:::

After the pull request is merged, your farm will automatically appear in the interface.

Happy farming! 🌾

If you encounter any issues, feel free to open a ticket on [Discord](https://discord.com/channels/881237412628533258/910843367095697438).
