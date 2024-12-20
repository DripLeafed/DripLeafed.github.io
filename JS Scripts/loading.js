tabButtons.forEach(element => {
    element.hidden = true
});
document.getElementById("loadingtext").innerHTML = "Loading.. Please Wait."

function load() {
    document.getElementById("loadingtext").innerHTML = ""
    document.getElementById("saveloading").hidden = true
    tabButtons.forEach(element => {
        element.hidden = false
    })
}