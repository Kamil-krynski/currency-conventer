let quantityElement = document.querySelector(".js-Quantity");
let exchangeRateElement = document.querySelector(".js-course");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let currency = document.querySelector(".js-currency");
let textCurrency = document.querySelector(".js-textCurrency");
let labelText = document.querySelector(".js-labelText");

formElement.addEventListener("input", () => {
    if (currency.value === 'EUR') {
        textCurrency.innerText = `Ilość EURO`;
        labelText.innerText = `Kurs EURO`;
    }

    if (currency.value === 'USD') {
        textCurrency.innerText = `Ilość USD`;
        labelText.innerText = `Kurs USD`;
    }
});

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

   let quantity = +quantityElement.value;
   let exchangeRate = +exchangeRateElement.value;

   let result = quantity * exchangeRate
   resultElement.innerText = `za ${quantity} ${currency.value} po kursie ${exchangeRate} dostaniesz ${result} zł  `

});
