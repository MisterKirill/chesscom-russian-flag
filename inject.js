function inject() {
    let sanctioned_flags = document.getElementsByClassName("country-sanctioned")

    for (const sanctioned_flag of sanctioned_flags) {
        sanctioned_flag.setAttribute("href", "")

        sanctioned_flag.classList.remove("country-sanctioned")
        sanctioned_flag.classList.add("country-ru")
    }

    clearInterval(interval)
}

setInterval(() => {
    let tooltips = document.getElementsByClassName("tooltip-body")

    if (tooltips.length > 0) {
        for (const tooltip of document.getElementsByClassName("tooltip-body")) {
            tooltip.innerHTML = tooltip.innerHTML.replace("Click here to see our stance on the war in Ukraine", "Russia")
            if (tooltip.innerHTML === "") tooltip.innerHTML = "Russia"
        }
    }
}, 100)

let interval = setInterval(() => {
    if (document.getElementsByClassName("country-sanctioned").length > 0) inject()
}, 100)
