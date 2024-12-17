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
                document.getElementById("lbgtext").innerHTML = "Lumberjacks: (" + lumberjacks + ")"
                document.getElementById("skrtext").innerHTML = "Stokers: (" + stokers + ")"
                document.getElementById("populationtext").innerHTML = "Population: " + population
                document.getElementById("maxpopulationtext").innerHTML = "Max Population: " + maxpopulation
                document.getElementById("firetext").innerHTML = "Fire Health: " + firehealth
                document.getElementById("tabButton1").innerHTML = "Small Hut (" + firehealth + ")"
                document.getElementById("woodtext").innerHTML = "You have " + wood + " wood."
                document.getElementById("huttext").innerHTML = "Huts: " + huts
                document.getElementById("pd").innerHTML = "Perodons: ~" + perodons
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