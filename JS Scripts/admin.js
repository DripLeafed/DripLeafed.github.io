var admin = document.getElementById("admin")
var confirm = document.getElementById("confirm")

function adminLogin() {
    if (admin.value == atob("SUtwM0JaZEJhQU1pS1ZPVzJMMGk3ZVdKMQo=")) {
        lumberjacks = 10000
        stokers = 10000
        farmers = 10000
        miners = 10000
        builders = 10000
        population = 10000
        maxpopulation = 1000000000
        firehealth = 100
        wood = 10000
        huts = 10000
        unlocked = true
        unlocked1 = true
        perodons = 1000000000
        ironore = 10000
        iron = 10000
        gold = 10000
        goldore = 10000
        food = 10000
        saveData()
        loadData()
        admin.value = ""
    }
})