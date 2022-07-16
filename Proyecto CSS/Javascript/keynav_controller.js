import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

class KeyNavController extends Controller {
    conect() {
        console.log("I'm alive!!", this.element)
    }
}

export { KeyNavController }