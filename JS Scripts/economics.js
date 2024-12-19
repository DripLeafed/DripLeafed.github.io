var unlocked = false
tabButtons[4].disabled = true

function evolve() {
    alert("Your community has evolved to the economic phase.\nEconomics Tab Unlocked.")
    tabButtons[4].disabled = false
    unlocked = true
}
function check() {
    if (wood >= 1000 && unlocked == false) {
        evolve()
        wood -= 1000
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
    document.getElementById("pd").innerHTML = "Perodons: ~" + perodons
}
makeAllCurrencies()
document.getElementById("sellwood").addEventListener("click", function() {
    if (wood >= 150) {
        wood -= 150
        perodons += 15
        document.getElementById("pd").innerHTML = "Perodons: ~" + perodons
        document.getElementById("woodtext").innerHTML = "You have " + wood + " wood."
    }
})
document.getElementById("selliron").addEventListener("click", function() {
    if (iron >= 2) {
        iron -= 2
        perodons += 100
        document.getElementById("pd").innerHTML = "Perodons: ~" + perodons
        document.getElementById("iron").innerHTML = "Iron: " + iron
    }
})
document.getElementById("sellgold").addEventListener("click", function() {
    if (gold >= 2) {
        gold -= 2
        perodons += 1000
        document.getElementById("pd").innerHTML = "Perodons: ~" + perodons
        document.getElementById("gold").innerHTML = "Gold: " + gold
    }
})
document.getElementById("buyminingequipment").addEventListener("click", function() {
    if (perodons >= 150 && unlocked1 == false) {
        perodons -= 150
        evolve1()
        document.getElementById("buyminingequipment").hidden = true
        document.getElementById("pd").innerHTML = "Perodons: ~" + perodons
    }
})
document.getElementById("buyfood").addEventListener("click", function() {
    if (perodons >= 75) {
        perodons -= 75
        food += 500
        document.getElementById("pd").innerHTML = "Perodons: ~" + perodons
        document.getElementById("foodlbl").innerHTML = "Food: " + food
        document.getElementById("buyfood").disabled = true
        sleep(4500).then(() => { document.getElementById("buyfood").disabled = false })
    }
})
document.getElementById("promote").addEventListener("click", function() {
    if (getTotalPop() < maxpopulation & (getTotalPop + 5) <= maxpopulation) {
        if (perodons >= 50) {
            perodons -= 50
            population += 5
            document.getElementById("pd").innerHTML = "Perdons: ~" + perodons
            document.getElementById("populationtext").innerHTML = "Population: " + population
            document.getElementById("promote").disabled = true
            sleep(120000).then(() => { document.getElementById("promote").disabled = false })
        }
    }
})