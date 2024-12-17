var unlocked1 = false
var ironore = 0
var iron = 0
tabButtons[3].disabled = true

function evolve1() {
    alert("Your community has evolved to the mining phase.\nDeep Caverns Tab Unlocked.")
    tabButtons[3].disabled = false
    unlocked1 = true
}

document.getElementById("mineiron").addEventListener("click", function() {
    ironore += 1
    document.getElementById("ironore").innerHTML = "Iron Ore: " + ironore
    document.getElementById("mineiron").disabled = true
    sleep(5000).then(() => { document.getElementById("mineiron").disabled = false })
})
document.getElementById("forgeiron").addEventListener("click", function() {
    if (ironore >= 5) {
        ironore -= 5
        document.getElementById("ironore").innerHTML = "Iron Ore: " + ironore
        document.getElementById("forgeiron").disabled = true
        sleep(7500).then(() => { document.getElementById("forgeiron").disabled = false })
        iron += 1
        document.getElementById("iron").innerHTML = "Iron: " + iron
    }
})