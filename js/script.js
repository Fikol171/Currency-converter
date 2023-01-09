{
    const welcome = () => {

        console.log("Hello");

    }
    const recalculate = (contant, currency) => {

        const funt = 5.05;
        const euro = 4.78;
        const dollar = 4.82;
        switch (currency) {

            case "funt": return contant / funt;

            case "euro": return contant / euro;

            case "dollar": return contant / dollar;

        }
    }
    const kurs = (currency) => {

        const funt = 5.05;
        const euro = 4.78;
        const dollar = 4.82;

        switch (currency) {

            case "funt": return funt;

            case "euro": return euro;

            case "dollar": return dollar;

        }
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        const PLNElement = document.querySelector(".js-PLN");
        const currencyElement = document.querySelector(".js-currency");
        const rate = document.querySelector(".js-rate");
        const amountElement = document.querySelector(".js-amount");
        const contant = +PLNElement.value;
        const currency = currencyElement.value;
        const result = recalculate(contant, currency);
        const dayRate = kurs(currency);
        rate.innerText = `${" " + dayRate + " " + currency}`
        amountElement.innerText = `${result.toFixed(2)}`
        document.querySelector(".js-formCurrency").reset()
    };

    const init = () => {

        const formCurrencyElement = document.querySelector(".js-formCurrency");
        formCurrencyElement.addEventListener("submit", onFormSubmit);
        welcome();
    }

    init();

}