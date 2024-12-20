food = 1000
document.getElementById("foodlbl").innerHTML = "Food: " + food
function drainFood() {
    food -= (5 * multi) * getTotalPop()
    document.getElementById("foodlbl").innerHTML = "Food: " + food
    if (food <= 0) {
        document.body.style.backgroundColor = "red"
        sleep(500).then(() => {
            if (confirm("You Ran Out Of Food.\nRestarting.")) {
                location.reload()
            } else {
                location.reload()
            }
        })
    }
}
setInterval(drainFood, 10000)