tabButtons.forEach(element => {
    element.hidden = true
});
document.getElementById("loadingtext").innerHTML = "Loading.. Please Wait."
document.getElementById("newsavescreen").hidden = true

function load() {
    document.getElementById("loadingtext").innerHTML = ""
    document.getElementById("saveloading").hidden = true
    tabButtons.forEach(element => {
        element.hidden = false
    })
}
function newSave() {
    document.getElementsByClassName("savebtns").hidden = true
    document.getElementById("newsavescreen").hidden = false
    document.getElementById("saveloading").hidden = true
}