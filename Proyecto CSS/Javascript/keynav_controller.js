import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

class KeynavController extends Controller {
    connect() {
        console.log("I am alive!!", this.element)
    }
    follow(event) {
        console.log(event);
        let code = event.code
        let number = Number(String(code).slice(-1))-1; 
        let link = this.element.querySelectorAll(".nav-link")[number]
        link && link.click()
    }
}

export { KeynavController }