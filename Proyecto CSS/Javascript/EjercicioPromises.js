const wait = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));
const timeout = (ms) =>
    new Promise((resolve, reject) => setTimeout(reject, ms));

const mostrarMSj = () =>
    wait(10000).then(() => {
        const html = '<div>Elije entre A y B</div>';
        const div = document.createElement("div");
        div.innerHTML = html;
        document.getElementsByTagName("body")[0].appendChild(div);
    });

/*segundo punto*/

const escucharAoB = () => {
    const promise = new Promise((resolve, reject) => {
        const onkeyDown = (e) => {
            switch (e.key) {
                case "a":
                case "b":
                    document.removeEventListener("keydown", onkeyDown);
                    resolve(e.key);
                    break;
                case "Escape":
                    document.removeEventListener("keydown", onkeyDown);
                    reject("Escape");
                    break;
                default:
                    window.alert("OPCION NO VALIDA");
                    break;
            }
        };
        document.addEventListener("keydown", onkeyDown);
    });
};