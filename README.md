# CoinDesk Test API Documentation

## General Information

This is a simple API by which will set the currency code(USD, EUR, BDT) as a parameter in the request query and in return user will get the following information in response:</br>
* The current Bitcoin rate, in the requested currency.</br>
* The lowest Bitcoin rate and date in the last 30 days, in the requested currency.</br>
* The highest Bitcoin rate and date in the last 30 days, in the requested currency.</br>

## Tools and Technologies:
  * <a href="https://nodejs.org/en/">Node.js</a>
  * NPM (it is automatically installed with node) / <a href="https://yarnpkg.com/">Yarn</a>

## Getting Started
To create the API (/getBitcoinInfo), you need to set environment for Nodejs, and you must follow the steps below:</br>

**Step 1: Clone this repo by:** </br>
```git clone https://github.com/mdmuhtasimfuadfahim/coindesk-test-api```
</br>

**Step 2: Change PORT according to your preference or leave it as it is.**

**Step 3: From the root directory, run the commands:**</br>
  ```yarn install``` </br>
  ```yarn serve```</br>
</br>**The API will start and you can send request and get response.**</br>

> Note: Please use ```yarn add dependency_name or npm install dependency_name``` if something went wrong with ```yarn install```.

## Unit Test
**From the root directory run the commad:**</br>
``yarn test``

>Note: Please use the line: ``const getCurrencyCode = req.body.currency;`` in app.js file if you want to give request body using the API.</br>
###### Thank you
