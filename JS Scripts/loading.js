tabButtons.forEach(element => {
    element.hidden = true
});
document.getElementById("loadingtext").innerHTML = "Loading.. Please Wait."
document.getElementById("newsavescreen").hidden = true

function load() {
    document.getElementById("loadingtext").innerHTML = ""
    document.getElementById("saveloading").hidden = true
    tabButtons.forEach(element => {
        element.hidden = false
    })
    if (difficulty == "hard") {
        document.getElementById("hutbtn").innerHTML = "Build Hut (100 Wood, 15s)"
        document.getElementById("unlockeconomics").innerHTML = "Unlock Economics (2000 Wood)"
        document.getElementById("forgeiron").innerHTML = "Forge Iron (10 Ore, 7.5s)"
        document.getElementById("forgegold").innerHTML = "Forge Iron (10 Ore, 15s)"
        document.getElementById("buyminingequipment").innerHTML = "Buy Mining Equipment (~150)"
        document.getElementById("buyfood").innerHTML = "Buy 250 Food (~150, 4.5s)"
        document.getElementById("promote").innerHTML = "Promote Town (~100, +5 Population, 2m)"
    }
}
function newSave() {
    document.getElementsByClassName("savebtns").hidden = true
    document.getElementById("newsavescreen").hidden = false
    document.getElementById("saveloading").hidden = true
}