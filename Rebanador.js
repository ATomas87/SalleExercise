class Rebanador {
    source;
    constructor(source) {
        this.source = source;
    }

    *[Symbol.iterator]() {
        let rebanada = [];
        for (let item of this.source) {
            rebanada.push(item);
            if (rebanada.length == 2) {
                yield rebanada;
                console.log("continuando...")
                rebanada = [];
            }
        }
        yield rebanada;
    }
}

let ar1 = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7];

let reba = new Rebanador(ar1);

for (let rebanada of reba) {
    console.log(rebanada);
    break
}


let iterator = reba[Symbol.iterator]()

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
