var unlocked1 = false
tabButtons[3].disabled = true

function evolve1() {
    alert("Your community has evolved to the mining phase.\nDeep Caverns Tab Unlocked.")
    tabButtons[3].disabled = false
    unlocked1 = true
}

document.getElementById("mineiron").addEventListener("click", function() {
})