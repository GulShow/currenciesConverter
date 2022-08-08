'use strict'

const objOfCurrencies = {};

const elementOfUSD = document.querySelector('[data-value= "USD"]');
const elementOfGBP = document.querySelector('[data-value= "GBP"]');
const elementOfEUR = document.querySelector('[data-value= "EUR"]');

const input = document.querySelector('#input');
const result = document.querySelector('#result');
const select = document.querySelector('#exampleFormControlSelect2');

currencies()

async function currencies() {
    const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
    const data = await response.json()
    const result = await data
    objOfCurrencies.USD = result[25]
    objOfCurrencies.GBP = result[24]
    objOfCurrencies.EUR = result[32]
    elementOfEUR.textContent = (objOfCurrencies.EUR.rate).toFixed(2)
    elementOfUSD.textContent = (objOfCurrencies.USD.rate).toFixed(2)
    elementOfGBP.textContent = (objOfCurrencies.GBP.rate).toFixed(2)
}

input.oninput = function () {
    result.value = (parseFloat(input.value / objOfCurrencies[select.value].rate)).toFixed(2)
}
select.oninput = function () {
    result.value = (parseFloat(input.value / objOfCurrencies[select.value].rate)).toFixed(2)
}
