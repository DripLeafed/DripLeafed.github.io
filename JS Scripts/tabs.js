setInterval(addpopulation, 30000)
            setInterval(drainFireHealth, 3500)
            // Holds a "document.getElementById()" for each tab
            const tabs = [ document.getElementById("tab1"), document.getElementById("tab2"), document.getElementById("tab3"), document.getElementById("tab4"), document.getElementById("tab5"), document.getElementById("tab6") ]
            // Holds a "document.getElementById()" for each tab button
            const tabButtons = [ document.getElementById("tabButton1"), document.getElementById("tabButton2"), document.getElementById("tabButton3"), document.getElementById("tabButton4"), document.getElementById("tabButton5"), document.getElementById("tabButton6") ]
            updateContent()
            // Add the listeners for each button
            tabButtons.forEach(addListeners)
            function addListeners(currentValue, index) {
                currentValue.className = "tabButton"
                currentValue.addEventListener("click", function() {
                    currentValue.className = "tabButtonON"
                    tabButtons.forEach(element => {
                        if (element != currentValue) {
                            element.className = "tabButton"
                        }
                    });
                    updateContent()
                })
            }
            // Update the content to display the current tab's content instead of nothing
            function updateContent() {
                tabButtons.forEach(element => {
                    if (element.className == "tabButtonON") {
                        tabs[tabButtons.indexOf(element)].hidden = false
                    } else {
                        tabs[tabButtons.indexOf(element)].hidden = true
                    }
                });
            }
            addEventListener("onkeydown", navigate)
            function navigate(e) {
                // Left
                if (e.code == 37) {
                    var currentTab = tabButtons[document.getElementsByClassName("tabButtonON").indexOf()]
                    var previousTab = tabButtons[document.getElementsByClassName("tabButtonON").indexOf() - 1]
                    simulate("click", previousTab)
                } else if (e.code == 39) {
                    var currentTab = tabButtons[document.getElementsByClassName("tabButtonON").indexOf()]
                    var nextTab = tabButtons[document.getElementsByClassName("tabButtonON").indexOf() + 1]
                    simulate("click", nextTab)
                }
            }