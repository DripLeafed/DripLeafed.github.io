tabButtons.forEach(element => {
    element.hidden = true
});
document.getElementById("loadingtext").innerHTML = "Loading.. Please Wait."
sleep(5000).then(() => {
    document.getElementById("loadingtext").innerHTML = ""
    tabButtons.forEach(element => {
        element.hidden = false
    });
})