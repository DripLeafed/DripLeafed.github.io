function getTotalPop() {
    var s = population + lumberjacks + stokers + farmers + miners + builders
    return s
}
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
            firehealth -= 5 * multi
            firetext.innerHTML = "Fire Health: " + firehealth
            document.getElementById("tabButton1").innerHTML = "Small Hut (" + firehealth + ")"
            if (firehealth <= 0) {
                document.body.style.backgroundColor = "red"
                sleep(500).then(() => {
                    if (confirm("Your Fire Died.\nRestarting.")) {
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
        wood += 4 / multi
        woodtext.innerHTML = "You have " + wood + " wood."
        woodbtn.disabled = true
        sleep(3000).then(() => { woodbtn.disabled = false })
    } else if (btn == "fire" && wood >= 2 * multi && firehealth < 100) {
        firehealth += 15 * multi
        wood -= 2 * multi
        if (firehealth > 100) {
            firehealth = 100
        }
        document.getElementById("tabButton1").innerHTML = "Small Hut (" + firehealth + ")"
        woodtext.innerHTML = "You have " + wood + " wood."
        firetext.innerHTML = "Fire Health: " + firehealth
        stokebtn.disabled = true
        sleep(1500).then(() => { stokebtn.disabled = false })
    } else if (btn == "hut" && wood >= 50 * multi) {
      wood -= 50 * multi
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
if (getTotalPop() < maxpopulation) {
    population += 1
    tabButtons[2].innerHTML = "(!) Building Station"
    populationtext.innerHTML = "Population: " + population
  } else if (getTotalPop() >= maxpopulation){
    population = maxpopulation
    populationtext.innerHTML = "Population: " + population
  }
}
function fixText() {
    tabButtons[2].innerHTML = "Building Station"
}