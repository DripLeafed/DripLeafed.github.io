tabButtons[3].disabled = true

function evolve() {
    alert("Your community has evolved to the economic phase.\nEconomics Tab Unlocked.")
    tabButtons[3].disabled = false
}
function check() {
    if (wood >= 1) {
        evolve
        wood -= 1
    }
}
setInterval(check, 3000)