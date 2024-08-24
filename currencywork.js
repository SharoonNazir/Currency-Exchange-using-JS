   
    const rates = {
        USD: 278.1,
        EUR: 324.5,
        GBP: 376.4,
        INR: 3.7,
        JPY: 2.5,
        PKR: 1
    };

    function convertCurrency() {
        let amount = document.getElementById('amount').value;
        let fromCurrency = document.getElementById('fromCurrency').value;
        let toCurrency = document.getElementById('toCurrency').value;
        let fromRate = rates[fromCurrency];
        let toRate = rates[toCurrency];
        let convertedAmount = (amount * (toRate / fromRate)).toFixed(4);
        document.getElementById('result').innerText = convertedAmount;
        document.getElementById('exchangeRate').innerText = `1 ${fromCurrency} = ${(toRate / fromRate).toFixed(4)} ${toCurrency}`;
    }

    function flipCurrencies() {
        let fromCurrency = document.getElementById('fromCurrency').value;
        let toCurrency = document.getElementById('toCurrency').value;
        document.getElementById('fromCurrency').value = toCurrency;
        document.getElementById('toCurrency').value = fromCurrency;
        convertCurrency();
    }

  
    window.onload = convertCurrency;