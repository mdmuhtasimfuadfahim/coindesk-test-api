# CoinDesk Test API Documentation

## General Information

This is a simple API by which will set the currency code(USD, EUR, BDT) as a parameter in the query and in return user will get the following information in response:</br>
* The current Bitcoin rate, in the requested currency.</br>
* The lowest Bitcoin rate in the last 30 days, in the requested currency.</br>
* The highest Bitcoin rate in the last 30 days, in the requested currency.</br>

## Tools and Technologies:
  * Node
  * NPM / Yarn

## Getting Started
To create the API (/getBitcoinInfo), you need to set environment for Nodejs, and you must follow the steps below:</br>

**Step 1: Clone this repo by:** </br>
```git clone https://github.com/mdmuhtasimfuadfahim/coindesk-test-api```
</br>

**Step 2: Change PORT according to your preference or leave it as it is.**

**Step 3: From the root directory, run the commands:**</br>
  ```yarn install``` </br>
  ```yarn serve```</br>
</br>**The API will start and you can send request and get response**</br>

## Unit Test
**From the root directory run the commad:**</br>
``yarn test``

**Note: Please use the line</br> ``const getCurrencyCode = req.body.currency;`` in app.js file if you want to give request from body**
###### Thank you
