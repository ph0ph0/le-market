---
title: Forking Le Market
description: Forking and customizing Le Market (Frontend)
---

# Build a Marketplace

## Outcome

Your own fully functioning customized fork of Le Market is deployed and working.

## Introduction

Have you ever thought about monetizing digital assets over the blockchain? Your first instinct might be to head on over to a popular marketplace - but why not create your own marketplace? It’s a lot easier than you might imagine. This guide will cover everything you need to start your own blockchain marketplace in less than an hour. The reason it’s so easy is that we’ll be starting with a fork of Le Market, which provides us with some pretty cool tech under-the-hood (if you’re interested in blockchain, read on).

Using Le Market is already a big improvement on the alternatives that are out there, but it gets even better. Le Market is completely open-source and freely available under the Apache 2 license. This means that you can fork Le Market and set up your own marketplace in just a few steps. Le Market is primarily focused on monetizing data, but it can actually handle the sale of any digital asset. This guide will walk you through the process of forking Le Market and starting your own marketplace for selling photos; you’ll be surprised how easy it is. No prior blockchain knowledge is required!

## Content

The tutorial covers:

- Forking and running Le Market locally
- Customizing your fork of Le Market
- Quick deployment of Le Market

## Preparation

**Prior knowledge**

If you’re completely unfamiliar with Le Market or web3 applications in general, you will benefit from reading these guides first:

- To use your clone of Le Market, you’ll need a wallet. We recommend getting set up with metamask.
- You’ll also need some OCEAN on a testnet to use your marketplace.
- When you have the testnet tokens, have a go at publishing a data NFT on Le Market.
- Run through the process of consuming a data asset on Le Market.

For more information visit the [Ocean Docs](https://docs.oceanprotocol.com/)

**Required Prerequisites**

- Git. Instructions for installing Git can be found [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
- Node.js can be downloaded from [here](https://nodejs.org/en/download/) (we’re using version 18 in this guide)
- A decent code editor, such as [Visual Studio Code](https://code.visualstudio.com/).
- You’ll need a Github account to fork Le Market via [Github](https://github.com/).

{% hint style="warning" %}
Let's emphasize an important aspect of building dApps. It's crucial to keep in mind that practically everything can be added to the blockchain 😵 When you integrate with these components, it becomes **crucial** for you, as a developer, to ensure **proper sanitization** of the responses on your end. This means you should carefully **validate and filter** the data received to **prevent** any potential vulnerabilities or security risks in your applications.
{% endhint %}
