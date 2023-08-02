---
id: off-chain-execution-bots
title: Off-Chain Execution (batchers)
sidebar_position: 1
---
## Prerequisites

- A running and fully synced Cardano Node v.1.35.7 configured as a relay
   - [Requirements](https://developers.cardano.org/docs/operate-a-stake-pool/hardware-requirements/)
   - [Installation Guide](https://docs.cardano.org/development-guidelines/installing-the-cardano-node/)
- Incoming connections to your Cardano Node to be able to process mempool transactions
- 8 GB of RAM
- Good internet connection
- 50 GB of disk space
- Recommend OS: Linux 64-bit

## Obtaining Off-chain Service

### Docker Image

This section is under development. Use Compiling from Souce Code section to obtain an off-chain batcher for now.

### Compiling from Source Code

Assembling from source code necessitates a range of prerequisite tools, identical to those needed for the Cardano node setup. Please follow the guidelines provided on **[this link](https://github.com/input-output-hk/cardano-node/blob/master/doc/getting-started/install.md/)** up until the "**Downloading the source code for Cardano-node**" segment.

Upon successful installation of all necessary libraries:

Establish a designated directory for your builds:

```bash
mkdir -p ~/src
cd ~/src
```

Retrieve the source code for the off-chain service:

```bash
git clone https://github.com/spectrum-finance/cardano-dex-backend.git
```

Transition to the directory containing the downloaded source code:

```
cd cardano-dex-backend
```

Install missing dependencies:

```bash
sudo apt-get update -y
sudo apt-get install librocksdb-dev git liblzma-dev libnuma-dev curl automake build-essential pkg-config libffi-dev libgmp-dev libssl-dev libtinfo-dev libsystemd-dev zlib1g-dev make g++ tmux git jq wget libncursesw5 libtool autoconf libncurses-dev clang llvm-13 llvm-13-dev -y
```

Initiate cabal update and build procedures:

```bash
cabal update
cabal build all
```

After building, you can install the compiled binaries for `amm-executor` and the `wallet-helper`

with these commands:

```bash
sudo find ./dist-newstyle -executable -type f -name "amm-executor-app" -exec cp "{}" /usr/local/bin/amm-executor \;
sudo find ./dist-newstyle -executable -type f -name "wallet-helper-app" -exec cp "{}" /usr/local/bin/wallet-helper \;
```

Completing these steps will result in the compilation and installation of the off-chain service.

## Running the services

### Wallet setup

The off-chain service uses a private key wrapped in a cipher container. To create this container, you first need to create a `payment.vkey` and a `payment.skey`. This can be done using `cardano-cli` from the node setup:

```bash
cardano-cli address key-gen \
    --verification-key-file payment.vkey \
    --signing-key-file payment.skey
```

Next step is to create an address for the `payment.vkey` using this command:

```bash
cardano-cli address build \
    --payment-verification-key-file payment.vkey \
    --out-file payment.addr \
    --mainnet
```

A file called `payment.addr` will be generated and this will contain the address needed for the configuration file in the steps explained further below.

<aside>
⚠️ The off-chain service needs some funds to operate. Please send at least 12 ADA to the address in the `payment.addr` file.

</aside>

To create the cypher container, you can use a special tool called `wallet-helper`. This tool will assist you in creating a ciphered container from the `payment.skey` file.

If you built from source using the steps above you can create the cypher container with this command (for Docker look below):

```bash
wallet-helper cypher.json payment.skey YOUR_PASSWORD_HERE
```

It will create cyphered container in your current directory with the name `cypher.json`.

### Preparing configuration files

You can find an example of the configuration with comments [here](https://github.com/spectrum-finance/cardano-dex-backend/blob/master/amm-executor/resources/config.dhall)

The Plutus scripts referenced in the configuration file can be found [here](https://github.com/spectrum-finance/cardano-dex-backend/tree/master/scripts) or if you cloned the repository here: `~/src/cardano-dex-backend/scripts`

### Manual running

To run the off-chain service as system service create first a script called `startAmmExecutor.sh`

with the following content:

```bash
#!/bin/bash

# Path to your config file you prepared in the previous step
CONFIG=<replace with your path>/config.dhall

/usr/local/bin/amm-executor ${CONFIG}
```

Give the script execution rights:

```bash
chmod +x startAmmExecutor.sh
```

Now create a service configuration called `amm-executor.service` with the following content:

```bash
# The Spectrum Amm Executor service (part of systemd)
# file: /etc/systemd/system/amm-executor.service

[Unit]
Description       = Spectrum Amm Executor Service
Wants             = network-online.target
After             = network-online.target

[Service]
User              = <UserValue>
Type              = simple
WorkingDirectory  = <ExecutorWorkingDirValue>
ExecStart         = /bin/bash -c '<ExecutorWorkingDirValue>/startAmmExecutor.sh'
KillSignal        = SIGINT
RestartKillSignal = SIGINT
TimeoutStopSec    = 300
LimitNOFILE       = 32768
Restart           = always
RestartSec        = 5
SyslogIdentifier  = amm-executor

[Install]
WantedBy          = multi-user.target
```

Save and close the file. To install the service run these commands:

```bash
sudo mv amm-executor.service /etc/systemd/system/amm-executor.service
sudo chmod 644 /etc/systemd/system/amm-executor.service
```

To start the off-chain service when the system boots:

```bash
sudo systemctl daemon-reload
sudo systemctl enable amm-executor.service
```

To start the service use:

```bash
sudo systemctl start amm-executor
```

To stop the service use:

```bash
sudo systemctl stop amm-executor
```

## Ensuring Proper Functionality of the Services

The validation procedure entails reviewing the log files to confirm seamless operation.

In the event of running the service manually, the logs will be collected in the "logs" folder. To monitor the ongoing process and verify optimal operation, input the command listed below into the command line. This action will facilitate real-time error tracking and verification of the uninterrupted operation of the service.

```bash
tail -f <path to the logs directory configured>/amm-executor.log
```
