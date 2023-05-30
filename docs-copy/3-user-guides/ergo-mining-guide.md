---
sidebar_position: 7
---

# Ergo Mining Guide

## What is mining

Mining is a process used in Proof of Work cryptocurrencies to create blocks that are part of a blockchain. To create a new block, computers all over the world try and solve a complex mathematical calculation and whoever answers first creates the block and gets the block reward which is paid in the blockchain currency. A mining pool is when lots of computers pool their computational power together to have a higher chance of finding the answer to the calculation, the block rewards are then split and sent to all participants depending on how much computing power they supplied to the pool.

## Mining Ergo Guide

### Create a wallet

To begin mining, a user will first need a wallet. This is covered in this separate detailed guide. 
https://docs.spectrum.fi/docs/user-guides/nautilus-quick-start

### Mining setup

A very common and popular miner used, is NBMiner. You can download the zipped file here.
https://github.com/NebuTech/NBMiner/releases/download/v40.1/NBMiner_40.1_Win.zip

Once downloaded, extract the file and open up the folder inside. 
In here you will see a list of windows batch files. We are going to right click on the file named "start_ergo" and select edit.

![Mining Guide](/img/user-guides/ergo-mining-guide/1.png)


In here there are a few items that need to be updated. The first is the wallet address. This can be found in your wallet in the receive tab. Copy it and rewrite the address in here. You can also choose a different mining pool if you would like but I would advise using Getblok as it is a decentralised smart contract mining pool which is good for the network.

![Mining Guide](/img/user-guides/ergo-mining-guide/2.png)

Once you are finished changing parameters, save file and exit. Then you just need to double click on the same "start_ergo" file to start your miner. A CMD window will open and you are now mining Ergo!

![Mining Guide](/img/user-guides/ergo-mining-guide/3.png)

To check your current profits and hashrate, you can go to the pool site you chose to mine to and enter your address. In this example we used Getblok, so on https://ergo.getblok.io/ enter your address used in the config file and you can see all the information about your mining.

![Mining Guide](/img/user-guides/ergo-mining-guide/4.png)


