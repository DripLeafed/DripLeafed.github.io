var menu = document.getElementById("<::>menu")
var description = document.getElementById("description")
var create = document.getElementById("create")
let difficulty = ""
let multi = 1
document.getElementById("newsavescreen").hidden = true

Descriptions = [
    "~ Normal Mode ~\n\
    Fire Health Lost Per 3.5s: 5\n\
    Food Eaten Per 10s: 5 * Total Population\n\
    Cost Multiplier: x1.0\n\
    Resource Gain Multiplier x1.0",
    "~ Hard Mode ~\n\
    Fire Health Lost Per 3.5s: 10\n\
    Food Eaten Per 10s: 10 * Total Population\n\
    Cost Multiplier: 2.0x\n\
    Resource Gain Multiplier: x0.5"
]

menu.addEventListener("change", function() {
    description.innerHTML = Descriptions[menu.selectedIndex - 1].replace(/\n/g, "<br>");
    difficulty = menu.options[menu.selectedIndex].id
})
create.addEventListener("click", function() {
    if (difficulty != "" && difficulty != null) {
        console.log(`Making save in ${difficulty} Mode.`)
        document.getElementById("newsavescreen").hidden = true
        if (difficulty == "normal") {
            multi = 1
        } else if (difficulty == "hard") {
            multi = 2
        }
        load()
    } else {
        console.log("No difficulty chosen or variable is null.")
    }
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