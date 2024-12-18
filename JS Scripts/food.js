food = 1000
document.getElementById("foodlbl").innerHTML = "Food: " + food
function drainFood() {
    food -= 5 * (population + lumberjacks + stokers + farmers + miners + builders)
    document.getElementById("foodlbl").innerHTML = "Food: " + food
}
setInterval(drainFood, 10000)