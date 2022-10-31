
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let allTotal = 0

function increment() {
    count += 1
    allTotal += 1
    countEl.textContent = count
    totalEl.innerText = allTotal
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    allTotal += total


}

//console.log("Let's count people on the subway!")