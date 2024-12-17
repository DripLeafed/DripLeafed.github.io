var unlocked = false
tabButtons[3].disabled = true

function evolve() {
    alert("Your community has evolved to the economic phase.\nEconomics Tab Unlocked.")
    tabButtons[3].disabled = false
}
function check() {
    if (wood >= 1000 && unlocked == false) {
        evolve()
        wood -= 1000
        unlocked = true
    }
}

document.getElementById("unlockeconomics").addEventListener("click", function() {
    check()
    if (unlocked == true) {
        document.getElementById("unlockeconomics").hidden = true
    }
})

// Actual Economics
currencies = []
var perodons = 0
function makeCurrency(symbol, name) {
    var newcurrency = `${symbol}${name}`
    EconomicManager(newcurrency)
}
function EconomicManager(currency) {
    currencies.push(currency)
}
function makeAllCurrencies() {
    makeCurrency("~", "Perodons")
    document.getElementById("pd").innerHTML = "Perodons: *" + perodons
}
makeAllCurrencies()
document.getElementById("sellwood").addEventListener("click", function() {
    if (wood >= 150) {
        wood -= 150
        perodons += 15
        document.getElementById("pd").innerHTML = "Perodons: *" + perodons
        document.getElementById("woodtext").innerHTML = "You have " + wood + " wood."
    }
})