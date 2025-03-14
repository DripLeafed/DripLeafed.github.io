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
            var fmrsave = localStorage.getItem("fmrsave")
            var mnrsave = localStorage.getItem("mnrsave")
            var blrsave = localStorage.getItem("blrsave")
            var goldsave = localStorage.getItem("goldsave")
            var goldoresave = localStorage.getItem("goldoresave")
            var difficultysave = localStorage.getItem("difficultysave")
            var firstcheck = localStorage.getItem("firstcheck")
            // Reset Data
            function resetData() {
                lumberjacks = 0
                stokers = 0
                farmers = 0
                miners = 0
                builders = 0
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
                gold = 0
                goldore = 0
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
                localStorage.setItem("fmrsave", JSON.stringify(farmers))
                localStorage.setItem("mnrsave", JSON.stringify(miners))
                localStorage.setItem("blrsave", JSON.stringify(builders))
                localStorage.setItem("goldsave", JSON.stringify(gold))
                localStorage.setItem("goldoresave", JSON.stringify(goldore))
                localStorage.setItem("difficultysave", difficulty)
                localStorage.setItem("firstcheck", ".")
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
                localStorage.getItem("fmrsave")
                localStorage.getItem("mnrsave")
                localStorage.getItem("blrsave")
                localStorage.getItem("firstcheck")
                localStorage.getItem("goldoresave")
                localStorage.getItem("goldsave")
                localStorage.getItem("difficultysave")
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
                farmers = Number(fmrsave)
                miners = Number(mnrsave)
                builders = Number(blrsave)
                gold = Number(goldsave)
                goldore = Number(goldoresave)
                difficulty = difficultysave
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
                document.getElementById("fmrtext").innerHTML = "Farmers: (" + farmers + ")"
                document.getElementById("mnrtext").innerHTML = "Miners: (" + miners + ")"
                document.getElementById("blrtext").innerHTML = "Builders: (" + builders + ")"
                document.getElementById("gold").innerHTML = "Gold: " + gold
                document.getElementById("goldore").innerHTML = "Gold Ore: " + goldore
                if (unlocked == true) {
                    document.getElementById("unlockeconomics").hidden = true
                    tabButtons[4].disabled = false
                }
                if (unlocked1 == true) {
                    document.getElementById("buyminingequipment").hidden = true
                    tabButtons[3].disabled = false
                }
                if (difficulty == "normal") {
                    multi = 1
                } else if (difficulty == "hard") {
                    multi = 2
                }
                if (firstcheck != ".") {
                    resetData()
                }
            }
            setInterval(300000, saveData)