---
sidebar_position: 6
---

# Yoroi troubleshooting
<!-- import YouTube from 'react-youtube'; -->

## Yoroi syncing issues

### UTXO Dust
Ergo dust is the small amount of Ergo that remains in a particular wallet or address because the monetary value is so tiny that it is below the amount of the fee required to spend the Ergo. It makes the transaction impossible to process.

Whenever any transaction occurs on the Ergo network, it needs to be validated for authenticity so the transaction can be processed in a reasonable amount of time. Miners validate the transaction and add it to the blockchain network, they are then paid a mining fee for performing this service, this is 0.0011ERG on the Ergo blockchain.

Due to the working mechanism of the blockchain network, at times the mining fee can be higher than the actual amount of the transaction. Ergo dust refers to a Ergo transaction amount where the fee is higher than the transaction amount, making it impossible for the transaction to occur.

In Yoroi, if a wallet has too many UTXO's it can cause syncing issues.

### Solution

1. Open your wallet in Yoroi

2. Go to receive tab and find your wallet address and copy it
![manage-ex-8](/img/user-guides/yoroi-troubleshooting/1.png)
3. Go to send tab and make the receiver your personal wallet address you previously copied.

4. At the bottom of the page, click on the dropdown menu titled "amount options" and select "Send all ERG + all tokens"
![manage-ex-9](/img/user-guides/yoroi-troubleshooting/2.png)
Doing this, will collect all the unusable tiny UTXO's in your wallet and combine them into one single UTXO so when you connect your wallet to the DEX, there is way less syncing time needed.

## Stuck waiting for pools to load, confirm button says insufficient balance or network connection issues

1. Go to "History" in browser  
![manage-ex-4](/img/user-guides/yoroi-troubleshooting/3.png)
2. Clear browser cache  
![manage-ex-5](/img/user-guides/yoroi-troubleshooting/4.png)
3. Open Yoroi in a new browser tab, then refresh ErgoDEX page  

## Transaction submitted but doesn't complete

1. Refund transaction by clicking on clock icon up on top right of page and click on pending transaction
![manage-ex-7](/img/user-guides/yoroi-troubleshooting/6.png)
2. Retry transaction with increased slippage value. A transaction can get stuck when theres low liquidity

## Change connected wallet

<YouTube videoId="iHjSHd8n_U4" />
