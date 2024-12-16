tabButtons[3].hidden = true
function evolve() {
    alert("Your community has evolved to the economic phase.\nEconomics Tab Unlocked.")
    tabButtons[3].hidden = false
}
var economicsunlocked = false
if (economicsunlocked == false) {
    setInterval(3000, evolve())
}