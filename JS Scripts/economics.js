tabButtons[3].hidden = true
function evolve() {
    alert("Your community has evolved to the economic phase.\nEconomics Tab Unlocked.")
    tabButtons[3].hidden = false
}
sleep(1000).then(() => {
    evolve()
})