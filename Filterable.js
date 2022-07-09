let persons = [{
    name: "Pepe",
    age: 60
}, {
    name: "Ana",
    age: 30
}, {
    name: "María",
    age: 25
}
]

class Filterable  {
    constructor(persons) {
        this.datos=persons;
        this.filtros=[]
    }

    addFilter(fun){
        this.filtros.push(fun)
    }

    run(){
        let persons = this.datos
    }

    
}


let list = new Filterable(persons);

list.addFilter(p => p.age > 50)



