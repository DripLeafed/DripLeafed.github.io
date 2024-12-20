var admin = document.getElementById("admin")
var confirm = document.getElementById("confirm")

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    document.writeln(result)
}

confirm.addEventListener("click", function() {
    if (admin.value == atob("")) {
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
    }
})