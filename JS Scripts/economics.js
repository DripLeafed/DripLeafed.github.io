var unlocked = false
tabButtons[3].disabled = true

function evolve() {
    alert("Your community has evolved to the economic phase.\nEconomics Tab Unlocked.")
    tabButtons[3].disabled = false
}
function check() {
    if (wood >= 1 && unlocked == false) {
        evolve()
        wood -= 1
        unlocked = true
    }
}
setInterval(check, 3000)