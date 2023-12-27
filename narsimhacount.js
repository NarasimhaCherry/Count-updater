let counterValueEl = document.getElementById("counterValue");

let clickCount = localStorage.getItem("clickCount");


if (clickCount === null) {
    counterValueEl.textContent = 0;
} else {
    counterValueEl.textContent = clickCount;
}

function resetBtn() {
    let previousCounterValue = counterValueEl.textContent;
    let updatedCounterValue = 0;

    localStorage.setItem("clickCount", updatedCounterValue);

    counterValueEl.textContent = updatedCounterValue;
}

function onIncrementCount() {
    let previousCounterValue = counterValueEl.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;

    localStorage.setItem("clickCount", updatedCounterValue);

    counterValueEl.textContent = updatedCounterValue;
}
