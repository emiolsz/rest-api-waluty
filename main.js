const getCurrenciesButton = document.querySelector("#getCurrencies");
const select = document.createElement("select");

function getCurrencyList() {
  fetch("https://api.frankfurter.app/latest")
    .then((response) => response.json())
    .then((data) => {
 
      for (const currency in data.rates) {
        const option = document.createElement("option");
        option.setAttribute("value", currency);
        option.textContent = currency;
        select.appendChild(option);
      }
      document.body.appendChild(select);
    })
    .catch((error) => console.error(error));
}
getCurrenciesButton.addEventListener("click", getCurrencyList);

