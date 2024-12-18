function lbgWps() {
    wood += 4 * lumberjacks
    woodtext.innerHTML = "You have " + wood + " wood."
}
function skrHps() {
    if (firehealth <= 85 && wood >= 2) {
        firehealth += 15 * stokers
        if (firehealth > 100) {
            firehealth = 100
        }
        wood -= 2 * stokers
        woodtext.innerHTML = "You have " + wood + " wood."
        firetext.innerHTML = "Fire Health: " + firehealth
        document.getElementById("tabButton1").innerHTML = "Small Hut (" + firehealth + ")"
    }
}
function fmrFps() {
    food += 100 * farmers
    document.getElementById("foodlbl").innerHTML = "Food: " + food
}
function mnrIps() {
    ironore += 2 * miners
    if (ironore >= 5) {
        iron += 1
        ironore -= 5
    }
    document.getElementById("ironore").innerHTML = "Iron Ore: " + ironore
    document.getElementById("iron").innerHTML = "Iron: " + iron
}
function blrHps() {
    if (wood >= 50) {
        huts += 1 * builders
        wood -= 50 * builders
        maxpopulation += 5 * builders
        document.getElementById("populationtext").innerHTML = "Population: " + population
        document.getElementById("maxpopulationtext").innerHTML = "Max Population: " + maxpopulation
        document.getElementById("huttext").innerHTML = "Huts: " + huts
    }
}
setInterval(lbgWps, 1000)
setInterval(skrHps, 1000)
setInterval(fmrFps, 1000)
setInterval(mnrIps, 1000)
setInterval(blrHps, 5000)
var lumberjacks = 0
var stokers = 0
var farmers = 0
var miners = 0
var builders = 0
// Lumberjacks
document.getElementById("lbghirebtn").addEventListener("click", function() {
    if ((population + lumberjacks + stokers + farmers + miners + builders) <= maxpopulation) {
        if (population > 0) {
            lumberjacks += 1
            population -= 1
            document.getElementById("lbgtext").innerHTML = "Lumberjacks: (" + lumberjacks + ")"
            document.getElementById("populationtext").innerHTML = "Population: " + population
        }
    }
})
document.getElementById("lbgfirebtn").addEventListener("click", function() {
    if (lumberjacks > 0) {
        lumberjacks -= 1
        population += 1
        document.getElementById("lbgtext").innerHTML = "Lumberjacks: (" + lumberjacks + ")"
        document.getElementById("populationtext").innerHTML = "Population: " + population
    }
})
// Stokers
document.getElementById("skrhirebtn").addEventListener("click", function() {
    if ((population + lumberjacks + stokers + farmers + miners + builders) <= maxpopulation) {
        if (population > 0) {
            stokers += 1
            population -= 1
            document.getElementById("skrtext").innerHTML = "Stokers: (" + stokers + ")"
            document.getElementById("populationtext").innerHTML = "Population: " + population
        }
    }
})
document.getElementById("skrfirebtn").addEventListener("click", function() {
    if (stokers > 0) {
        stokers -= 1
        population += 1
        document.getElementById("skrtext").innerHTML = "Stokers: (" + stokers + ")"
        document.getElementById("populationtext").innerHTML = "Population: " + population
    }
})
// Farmers
document.getElementById("fmrhirebtn").addEventListener("click", function() {
    if ((population + lumberjacks + stokers + farmers + miners + builders) <= maxpopulation) {
        if (population > 0) {
            farmers += 1
            population -= 1
            document.getElementById("fmrtext").innerHTML = "Farmers: (" + farmers + ")"
            document.getElementById("populationtext").innerHTML = "Population: " + population
        }
    }
})
document.getElementById("fmrfirebtn").addEventListener("click", function() {
    if (farmers > 0) {
        farmers -= 1
        population += 1
        document.getElementById("fmrtext").innerHTML = "Farmers: (" + farmers + ")"
        document.getElementById("populationtext").innerHTML = "Population: " + population
    }
})
// Miners
document.getElementById("mnrhirebtn").addEventListener("click", function() {
    if ((population + lumberjacks + stokers + farmers + miners + builders) <= maxpopulation) {
        if (population > 0) {
            miners += 1
            population -= 1
            document.getElementById("mnrtext").innerHTML = "Miners: (" + miners + ")"
            document.getElementById("populationtext").innerHTML = "Population: " + population
        }
    }
})
document.getElementById("mnrfirebtn").addEventListener("click", function() {
    if (miners > 0) {
        miners -= 1
        population += 1
        document.getElementById("mnrtext").innerHTML = "Miners: (" + miners + ")"
        document.getElementById("populationtext").innerHTML = "Population: " + population
    }
})
// Builders
document.getElementById("blrhirebtn").addEventListener("click", function() {
    if ((population + lumberjacks + stokers + farmers + miners + builders) <= maxpopulation) {
        if (population > 0) {
            builders += 1
            population -= 1
            document.getElementById("blrtext").innerHTML = "Builders: (" + builders + ")"
            document.getElementById("populationtext").innerHTML = "Population: " + population
        }
    }
})
document.getElementById("blrfirebtn").addEventListener("click", function() {
    if (builders > 0) {
        builders -= 1
        population += 1
        document.getElementById("blrtext").innerHTML = "Builders: (" + builders + ")"
        document.getElementById("populationtext").innerHTML = "Population: " + population
    }
})