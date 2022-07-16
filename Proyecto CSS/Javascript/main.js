import "./index.js"

import { Application } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
import { KeynavController } from "./keynav_controller.js"

const app = Application.start()
app.register("kn", KeynavController)