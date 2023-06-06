---
id: overview
title: What Is Spectrum Network?
sidebar_position: 1
---

:::caution
Please be aware that the Spectrum Protocol is currently in an active development phase and is not yet accessible on the
testnet or mainnet.
:::

## Introduction

Spectrum Network, also referred to as Spectrum Protocol, is a smart contract platform for trustless cross-chain
programmable messaging.

The architecture of Spectrum Network empowers developers to seamlessly interact with native currencies and tokens across
multiple blockchains simultaneously. This enables them to create decentralized applications (dApps) that operate
natively in a cross-chain environment. Consequently, there is no need for wrapped or synthetic assets when executing
actions like swapping native ETH from the Ethereum mainnet to native ADA on the Cardano mainnet.

On the following scheme, you can see what the whole cross-chain communication system looks like:

![cross-chain-system-scheme](/img/spectrum-network/cross-chain-system-scheme.jpg)

## Spectrum Network’s role

The Spectrum Network plays a vital role in the overall system by verifying the validity of messages transmitted from
network A to network B. Within the network, Proof of Stake (PoS) validators assume the responsibility of ensuring
consensus is reached and validating the authenticity of messages. Their task involves confirming whether a particular
message is deemed valid or not, thereby providing assurance and trust to the network participants. Through the
collective efforts of PoS validators, the Spectrum Network establishes a secure framework for message verification and
validation within the cross-chain communication ecosystem.

## Adapters role

Adapters serve a crucial function within the cross-chain communication system, playing a vital role in facilitating
seamless and scalable interoperability. These adapters are compact programs designed to translate message data from
network A into a format compatible with Spectrum Network. Subsequently, they translate the message data from Spectrum's
format into the format appropriate for settlement on network B.

By leveraging the capabilities of adapters, it becomes feasible to integrate nearly any blockchain network into the
system, enabling trustless cross-chain communication with other interconnected networks. This flexibility allows for the
expansion of the ecosystem and the establishment of secure and reliable communication channels across diverse blockchain
networks.

---

Specrum Protocol’s source code is accessible in [this repository](https://github.com/spectrum-finance/spectrum).