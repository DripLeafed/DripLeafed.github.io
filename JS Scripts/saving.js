document.getElementById("savetext").hidden = true
            var lbgsave = localStorage.getItem("lbgsave")
            var skrsave = localStorage.getItem("skrsave")
            var popsave = localStorage.getItem("popsave")
            var maxpopsave = localStorage.getItem("maxpopsave")
            var firehealthsave = localStorage.getItem("firehealthsave")
            var woodsave = localStorage.getItem("woodsave")
            var hutsave = localStorage.getItem("hutsave")
            var unlockedsave = localStorage.getItem("unlockedsave")
            var unlocked1save = localStorage.getItem("unlocked1save")
            var perodonsave = localStorage.getItem("perodonsave")
            var ironoresave = localStorage.getItem("ironoresave")
            var ironsave = localStorage.getItem("ironsave")
            var foodsave = localStorage.getItem("foodsave")
            // Reset Data
            function resetData() {
                lumberjacks = 0
                stokers = 0
                population = 0
                maxpopulation = 0
                firehealth = 100
                wood = 0
                huts = 0
                unlocked = false
                unlocked1 = false
                perodons = 0
                ironore = 0
                iron = 0
                food = 1000
                saveData()
            }
            // Save Data
            function saveData() {
                localStorage.setItem("lbgsave", JSON.stringify(lumberjacks))
                localStorage.setItem("skrsave", JSON.stringify(stokers))
                localStorage.setItem("popsave", JSON.stringify(population))
                localStorage.setItem("maxpopsave", JSON.stringify(maxpopulation))
                localStorage.setItem("firehealthsave", JSON.stringify(firehealth))
                localStorage.setItem("woodsave", JSON.stringify(wood))
                localStorage.setItem("hutsave", JSON.stringify(huts))
                localStorage.setItem("unlockedsave", JSON.stringify(unlocked))
                localStorage.setItem("unlocked1save", JSON.stringify(unlocked1))
                localStorage.setItem("perodonsave", JSON.stringify(perodons))
                localStorage.setItem("ironoresave", JSON.stringify(ironore))
                localStorage.setItem("ironsave", JSON.stringify(iron))
                localStorage.setItem("foodsave", JSON.stringify(food))
                document.getElementById("savetext").hidden = false
                sleep(3000).then(() => {
                    document.getElementById("savetext").hidden = true
                })
            }
            // Load Data
            function pullData() {
                localStorage.getItem("lbgsave")
                localStorage.getItem("skrsave")
                localStorage.getItem("popsave")
                localStorage.getItem("maxpopsave")
                localStorage.getItem("firehealthsave")
                localStorage.getItem("woodsave")
                localStorage.getItem("hutsave")
                localStorage.getItem("unlockedsave")
                localStorage.getItem("unlocked1save")
                localStorage.getItem("perodonsave")
                localStorage.getItem("ironoresave")
                localStorage.getItem("ironsave")
                localStorage.getItem("foodsave")
                lumberjacks = Number(lbgsave)
                stokers = Number(skrsave)
                population = Number(popsave)
                maxpopulation = Number(maxpopsave)
                firehealth = Number(firehealthsave)
                wood = Number(woodsave)
                huts = Number(hutsave)
                unlocked = (unlockedsave === "true")
                unlocked1 = (unlocked1save === "true")
                perodons = Number(perodonsave)
                ironore = Number(ironoresave)
                iron = Number(ironsave)
                food = Number(foodsave)
                document.getElementById("lbgtext").innerHTML = "Lumberjacks: (" + lumberjacks + ")"
                document.getElementById("skrtext").innerHTML = "Stokers: (" + stokers + ")"
                document.getElementById("populationtext").innerHTML = "Population: " + population
                document.getElementById("maxpopulationtext").innerHTML = "Max Population: " + maxpopulation
                document.getElementById("firetext").innerHTML = "Fire Health: " + firehealth
                document.getElementById("tabButton1").innerHTML = "Small Hut (" + firehealth + ")"
                document.getElementById("woodtext").innerHTML = "You have " + wood + " wood."
                document.getElementById("huttext").innerHTML = "Huts: " + huts
                document.getElementById("pd").innerHTML = "Perodons: ~" + perodons
                document.getElementById("iron").innerHTML = "Iron: " + iron
                document.getElementById("ironore").innerHTML = "Iron Ore: " + ironore
                document.getElementById("foodlbl").innerHTML = "Food: " + food
                if (unlocked == true) {
                    document.getElementById("unlockeconomics").hidden = true
                    tabButtons[4].disabled = false
                }
                if (unlocked1 == true) {
                    document.getElementById("buyminingequipment").hidden = true
                    tabButtons[3].disabled = false
                }
            }
            setInterval(300000, saveData)