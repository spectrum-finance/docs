---
id: off-chain-execution-bots
title: Off-Chain Execution Bots
sidebar_position: 1
---

This guide is about launching, operating and maintaining an open off-chain execution service for Spectrum Finance
Cardano AMM

:::caution
Currently only preview testnet bots are supported. Mainnet bots won't work.
:::

## Necessary Preparations

Utilizing the service necessitates connectivity with the Cardano node. Consider perusing the subsequent manual to
operate a Cardano node.

## Obtaining Off-chain Service

### 🐳 Docker Image

The docker image encapsulating the most recent version of the Cardano off-chain service can be obtained from
[this link](https://hub.docker.com/r/spectrumlabs/spectrum-cardano-backend).

### 🛠 Compiling from Source Code

Assembling from source code necessitates a range of prerequisite tools, identical to those needed for the Cardano node
setup. Please follow the guidelines provided
on [this link](https://github.com/input-output-hk/cardano-node/blob/master/doc/getting-started/install.md/) up until
the "**Downloading the source code for Cardano-node**" segment.

Upon successful installation of all necessary libraries:

Establish a designated directory for your builds:

```
mkdir -p ~/src
cd ~/src
```

Retrieve the source codes for the off-chain service:

```
git clone https://github.com/spectrum-finance/cardano-dex-backend.git
```

Transition to the directory containing the downloaded source codes:

```
cd cardano-dex-backend
```

Initiate cabal update and build procedures:

```
cabal update
cabal build all
```

Completing these steps will result in the compilation of the off-chain service.

## Running the services

### Wallet setup

The off-chain service uses a private key wrapped in a cipher container. To create this container, you can use a special
tool called wallet-helper (the link to the tool will be available after merging the branch with the documentation and
the tool into the master). This tool will help you create a cyphered container from the `.skey` file. To use the
tool, follow these steps:

**If you compiled from sources:**  

```bash
cabal exec -- wallet-helper Container_Path Private_Key_Path Password 
```

**If you will use docker-compose:**  

To retrieve a skey file using the cardano-cli tool, use
the [key-get command](https://github.com/input-output-hk/cardano-node/blob/master/doc/reference/cardano-node-cli-reference.md/).
Create a directory named "myKeys", and copy your secret file into this folder using ctrl+c/ctrl+v. Then, navigate to
this folder and run the following command:

```bash
docker run -v $(pwd):/testWallet spectrumlabs/spectrum-wallet-helper:0.0.1.0 /testWallet/cypher.json /testWallet/SKEY_FILE_NAME.skey YOUR_PASSWORD_HERE
```

It will create a cyphered container in the “myKeys” director named `cypher.json`.

### Preparing configuration files

You can find an example of the configuration with
comments [here](https://github.com/spectrum-finance/cardano-dex-backend/blob/master/amm-executor/resources/config.dhall)

### Manual running

Manual running requires working and fully synced cardano node with exposed node socket file.

1. Configure correct node socket path, valid node config path, and start point (eventSourceConfig.startAt) in the
   configuration file
2. You can run the off-chain service by executing the next command

```bash
cabal exec -- amm-executor-app
```

:::caution
We also recommend executing it with the Nix environment
:::

### Docker-compose

The Cardano [dex backend repository](https://github.com/spectrum-finance/cardano-dex-backend) already includes a
preconfigured docker-compose configuration. You can clone it directly to your working directory.

```bash
mkdir -p ~/workDir
cd ~/workDir
git clone https://github.com/spectrum-finance/cardano-dex-backend.git
cd [cardano-dex-backend](https://github.com/spectrum-finance/cardano-dex-backend.git)
```

Configuration file stored under the following path:

```bash
dcConfigs/dcSpectrumConfig.dhall
```

The document you have provided contains helpful comments that will assist you in setting up your off-chain service
instance. However, you may need to make additional updates to ensure that the configuration file is tailored to your
specific needs.

You will be ready to run the service once you have updated the configuration file to meet your requirements. Please use
the following command to initiate the service and begin the process.

:::caution
It is NOT mandatory to run cardano-node separately because it is already included in the `docker-compose.yaml` file.
:::

```bash
docker-compose up -d
```

## Ensuring Proper Functionality of the Services

The validation procedure entails reviewing the log files to confirm seamless operation.

In the event of running the service manually, the logs will be collected in the "logs" folder. To monitor the ongoing
process and verify optimal operation, input the command listed below into the command line. This action will facilitate
real-time error tracking and verification of the uninterrupted operation of the service.

```bash
tail -f logs/amm-executor.log
```

Alternatively, when operating the service using docker, simply enter

```bash
docker logs -f --tail 5 <off-chain-service-container-id>
```
