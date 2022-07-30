
import { showTime } from "./showTime.js"

document.addEventListener('DOMContentLoaded', showTime)

import { borderEffects } from "./borderEffects.js"

window.addEventListener('load', borderEffects)

function EvaluarCaracter(evObject) {
    let Caracter = String.fromCharCode(evObject.which);
    switch (Caracter) {
        case "1":
            document.location.href="#Who whe are";
            break;
        case "2":
            document.location.href="#Services";
            break;
        case "3":
            document.location.href="#Portfolio";
            break;
        case "4":
            document.location.href="#Location";
            break;
        case "5":
            document.location.href="#EmailUs";
            break;
        default: break;
    }
}

//window.addEventListener("load", function () { document.onkeypress = EvaluarCaracter; })

