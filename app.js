const buyPrice = document.querySelector('.buyPrice');
const sellPrice = document.querySelector('.sellPrice');
const addButton = document.querySelector('.add');
const finalProfit = document.querySelector('.profit');
const form = document.querySelector('.form');
const totalCoins = document.querySelector('.coins');
const reset = document.querySelector('.reset');
const totalCost = document.getElementById('total');

const totalPrice = function () {
    let arr = document.getElementsByClassName('buyPrice');
    let totalPurchase = 0;
    for (let i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            totalPurchase += parseFloat(arr[i].value);
    }

    totalCost.innerHTML = totalPurchase.toLocaleString();
    return totalPurchase;
}

const totalIncome = function () {
    let arr = document.getElementsByClassName('sellPrice');
    let totalSale = 0;
    for (let i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            totalSale += parseFloat(arr[i].value);
    }
    return totalSale;
}

const priceAfterTax = function () {
    return Math.floor(totalIncome() * 0.95);
}

const profit = function () {
    return priceAfterTax() - totalPrice();
}

form.addEventListener('input', function () {
    finalProfit.innerHTML = profit().toLocaleString();
    totalCoins.innerHTML = priceAfterTax().toLocaleString();
    totalPrice();

    if (profit() < 0) {
        finalProfit.style.color = 'red';
    } else if (profit() > 0) {
        finalProfit.style.color = 'limegreen';
    } else {
        finalProfit.style.color = '#4EE6EB';
    }
})


const addSale = function () {
    let newRow = document.createElement('div')
    newRow.classList.add('input-row')
    form.appendChild(newRow);

    let buyInput = document.createElement('input')
    buyInput.classList.add('buyPrice')
    newRow.appendChild(buyInput);
    buyInput.placeholder = ('Buy Price')
    buyInput.type = 'number';

    let sellInput = document.createElement('input')
    sellInput.classList.add('sellPrice')
    newRow.appendChild(sellInput);
    sellInput.placeholder = ('Sell Price')
    sellInput.type = 'number';
}

addButton.addEventListener('click', function () {
    addSale();
})