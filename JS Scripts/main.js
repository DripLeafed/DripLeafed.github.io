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
setInterval(lbgWps, 1000)
setInterval(skrHps, 1000)
var lumberjacks = 0
var stokers = 0
document.getElementById("lbghirebtn").addEventListener("click", function() {
    if ((population + lumberjacks + stokers) <= maxpopulation) {
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
document.getElementById("skrhirebtn").addEventListener("click", function() {
    if ((population + lumberjacks + stokers) < maxpopulation) {
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
// Fire
var firehealth = 100
        firetext = document.getElementById("firetext")
        stokebtn = document.getElementById("stokebtn")

        firetext.style.textAlign = 'center'
        firetext.innerHTML = "Fire Health: " + firehealth
        document.getElementById("tabButton1").innerHTML = "Small Hut (" + firehealth + ")"

        stokebtn.addEventListener("click", function() {
            onClick("fire")
        })

        function drainFireHealth() {
            firehealth -= 5
            firetext.innerHTML = "Fire Health: " + firehealth
            document.getElementById("tabButton1").innerHTML = "Small Hut (" + firehealth + ")"
            if (firehealth <= 0) {
                document.body.style.backgroundColor = "red"
                sleep(500).then(() => {
                    if (confirm("You Died.\nRestarting.")) {
                        location.reload()
                    } else {
                        location.reload()
                    }
                })
            }

        }
// Wood
var wood = 0
  woodtext = document.getElementById("woodtext")
  woodbtn = document.getElementById("woodbtn")

  woodtext.innerHTML = "You have " + wood + " wood."
  woodtext.style.textAlign = 'center'

  woodbtn.addEventListener("click", function() {
      onClick("wood")
  })
// Building Station
var population = 0
          var maxpopulation = 0
          var huts = 0
          populationtext = document.getElementById("populationtext")
          maxpopulationtext = document.getElementById("maxpopulationtext")
          huttext = document.getElementById("huttext")
          hutbtn = document.getElementById("hutbtn")

          populationtext.innerHTML = "Population: " + population
          maxpopulationtext.innerHTML = "Max Population: " + maxpopulation
          huttext.innerHTML = "Huts: " + huts

          hutbtn.addEventListener("click", function() {
            onClick("hut")
          })
// Button Clicks
function onClick(btn) {
    if (btn == "wood") {
        wood += 4
        woodtext.innerHTML = "You have " + wood + " wood."
        woodbtn.disabled = true
        sleep(3000).then(() => { woodbtn.disabled = false })
    } else if (btn == "fire" && wood >= 2 && firehealth < 100) {
        firehealth += 15
        wood -= 2
        if (firehealth > 100) {
            firehealth = 100
        }
        document.getElementById("tabButton1").innerHTML = "Small Hut (" + firehealth + ")"
        woodtext.innerHTML = "You have " + wood + " wood."
        firetext.innerHTML = "Fire Health: " + firehealth
        stokebtn.disabled = true
        sleep(1500).then(() => { stokebtn.disabled = false })
    } else if (btn == "hut" && wood >= 50) {
      wood -= 50
      maxpopulation += 5
      huts += 1
      woodtext.innerHTML = "You have " + wood + " wood."
      populationtext.innerHTML = "Population: " + population
      maxpopulationtext.innerHTML = "Max Population: " + maxpopulation
      huttext.innerHTML = "Huts: " + huts
      hutbtn.disabled = true
      sleep(15000).then(() => {hutbtn.disabled = false })
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
// Population
function addpopulation() {
if ((population + lumberjacks + stokers) < maxpopulation) {
    population += 1
    populationtext.innerHTML = "Population: " + population
  } else if ((population + lumberjacks + stokers) >= maxpopulation){
    population = maxpopulation
    populationtext.innerHTML = "Population: " + population
  }
}