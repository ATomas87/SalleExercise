import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
class KeynavController extends Controller {
    connect() {
        console.log("I am alive!!", this.element)
    }
}

export { KeynavController }
