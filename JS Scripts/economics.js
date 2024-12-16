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