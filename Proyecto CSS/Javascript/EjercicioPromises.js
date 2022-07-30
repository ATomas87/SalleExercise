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

const enseñarMsj = (msj) => {
    return new Promise((resolve, reject))
}

const thankYouAnyway = () => {
    const html = '<div>Gracias por participar :('
}

const terminar = () => {
    console.log("terminar");
    const div = document.getElementById("ejercicio");
    div.remove();
};

const escucharConTimeout = async () => {
    console.log("escucharConTimeout");
    return await Promise.race([
        timeout(20000),
        mostrarMsj().then(escucharAoB).then(enseñarMsj, thankYouAnyway),
    ]);
};

const inicio = () => {
    console.log("inicio");
    return new Promise((resolve, reject) => {
        console.log("initializing promise");
        window.addEventListener("load", resolve);
    });
};

inicio()
    .then(() => wait(500));
    .then(escucharConTimeout);
    .finally(() => wait(2000));
    .then(terminar);

async function encuesta() {
    await mostrarMsj();
    let msj = await escucharAoB();
    enseñarMsj(msj);
    cath(e) {
        trankYouAnyway();
    }
}

async function go() {
    try {
        await inicio();
        await wait(1000);
        await Promise.race([timeout(20000), encuesta()]);
    } finally {
        await wait(500);
        terminar();
    }
}

go();