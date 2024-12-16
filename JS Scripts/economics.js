tabButtons[3].disabled = true
function evolve() {
    alert("Your community has evolved to the economic phase.\nEconomics Tab Unlocked.")
    tabButtons[3].disabled = false
}
var economicsunlocked = false
if (economicsunlocked == false) {
    setInterval(3000, evolve())
    economicsunlocked = true
}