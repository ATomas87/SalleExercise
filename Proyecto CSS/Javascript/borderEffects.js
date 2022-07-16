function borderEffects() {

    const divsWeb = document.querySelectorAll('div, section')
    console.log(divsWeb)

    for (const div of divsWeb) {

        div.addEventListener('mouseover', (event) => {
            if (event.altKey) {
                div.style.border = '1px solid red';
            }
        })

        div.addEventListener('mouseout', (event) => {
            if (event.altKey) {
                div.style.border = null;
            }
        })

    }
}

export { borderEffects }