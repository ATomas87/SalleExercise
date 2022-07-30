import { showTime } from './showTime.js'
import { borderEffects } from './borderEffects.js'
/* import { EvaluarCaracter } from './EvaluarCaracter.js' */
import { KeyNavController } from './keynav_controller.js'
import { Application } from 'https://unpkg.com/@hotwired/stimulus/dist/stimulus.js'

window.addEventListener('load', showTime)

window.addEventListener('load', borderEffects)

/* window.addEventListener('onkeypress', EvaluarCaracter) */

const app = Application.start()
app.register("kn", KeyNavController)

function follow(event) {
    let code = event.code
    let number = Number(event.key)-1
    let link = this.element.querySelectorAll(".nav.link")[number] 
    link && link.click()
}