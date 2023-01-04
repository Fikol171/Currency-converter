console.log("Hello");



let formCurrencyElement = document.querySelector(".js-formCurrency");
let PLNElement = document.querySelector(".js-PLN");
let currencyElement = document.querySelector(".js-currency");
let rateElement = document.querySelector(".js-rate");
let amountElement = document.querySelector(".js-amount");

let funt = 5.05;
let euro = 4.78;
let dollar = 4.82;

formCurrencyElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let contant = PLNElement.value;
    let currency = currencyElement.value;
    let amount;
    switch (currency) {
        case "funt": amount = contant / funt; rate = funt + "GBP";
            break;
        case "euro": amount = contant / euro; rate = euro + "EUR";
            break;
        case "dollar": amount = contant / dollar; rate = dollar + "USD";
            break;
    }

    rateElement.innerText = `${rate}`
    amountElement.innerText = `${amount.toFixed(2)}`
    document.querySelector(".js-formCurrency").reset()
});

