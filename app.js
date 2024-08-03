var calcObj = {
    tip: 0,
};
window.onload = function () {
    var calculateButton = document.querySelector("#calculate");
    var resetButton = document.querySelector("#reset");
    if (calculateButton) {
        calculateButton.onclick = calculateTip;
    }
    if (resetButton) {
        resetButton.onclick = resetValues;
    }
    var tips = document.querySelectorAll(".tip");
    tips.forEach(function (tip) {
        tip.addEventListener("click", handleTipClick);
    });
};
function handleTipClick(e) {
    var _a;
    var target = e.target;
    calcObj.tip = Number((_a = target.textContent) === null || _a === void 0 ? void 0 : _a.split("%")[0]);
}
function calculateTip() {
    var amountInput = document.querySelector("#amount");
    var peopleInput = document.querySelector("#people");
    var amount = Number(amountInput === null || amountInput === void 0 ? void 0 : amountInput.value);
    var people = Number(peopleInput === null || peopleInput === void 0 ? void 0 : peopleInput.value);
    if (!amount || !people) {
        alert("Please enter values");
        return;
    }
    var tip = (amount * calcObj.tip) / 100;
    var billPerPerson = (amount + tip) / people;
    var tipAmountElement = document.querySelector("#tipamount");
    var totalAmountElement = document.querySelector("#totalamount");
    if (tipAmountElement) {
        tipAmountElement.innerText = (tip / people).toFixed(2);
    }
    if (totalAmountElement) {
        totalAmountElement.innerText = billPerPerson.toFixed(2);
    }
}
function resetValues() {
    var tipAmountElement = document.querySelector("#tipamount");
    var totalAmountElement = document.querySelector("#totalamount");
    if (tipAmountElement) {
        tipAmountElement.innerText = "0.00";
    }
    if (totalAmountElement) {
        totalAmountElement.innerText = "0.00";
    }
    var amountInput = document.querySelector("#amount");
    var peopleInput = document.querySelector("#people");
    if (amountInput)
        amountInput.value = '';
    if (peopleInput)
        peopleInput.value = '';
}
