// Get a reference to the button element
const nextButton = document.getElementById('nextButton');

const amount = document.getElementById('amo');

/* const recName = document.getElementById('rec');
const amount = document.getElementById('rec');
const curr = document.getElementById('curr'); */

const bal = document.getElementById('bal');

if (!localStorage.getItem("balance")) {
    localStorage.setItem("balance", 65854928)
}
if (isNaN(parseInt(localStorage.getItem("balance")))) {
    localStorage.setItem("balance", 65854928)
}
if (parseInt(localStorage.getItem("balance") <= 100)) {
    localStorage.setItem("balance", 65854928)

}

let balance = localStorage.getItem('balance') || 65854928;


const BalF = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD"
})

bal.innerText = BalF.format(balance);

// Add a click event listener to the button
nextButton.addEventListener('click', function () {
    // Change the current URL to the desired next webpage
    console.log(balance);
    // console.log(parseInt(amount.value));
    const newBalance = parseInt(balance) - parseInt(amount.value)
    console.log(newBalance)
    localStorage.setItem('balance', newBalance);
    balance = newBalance || parseInt(localStorage.getItem('balance'));
    bal.innerText = BalF.format(balance);
    window.location.href = `transaction.html`
    // window.location.href = `transaction.html?rec=${recName.value}&amt=${amount.value}&curr=${curr.value}`;
});