type tipoFiltrarNumerosMayores = (lista : number[], limite : number) => number[]

export const filtraNumMayores : tipoFiltrarNumerosMayores = (lista, limite) =>{
    const listaFiltrada : number[] = []
    
    /*for(let i = 0; i < lista.length; i++){
        const num = lista[i]
        if (num > limite) {
            listaFiltrada.push(num)
        }
    }*/

    for(let num of lista){
        if (num > limite) {
            listaFiltrada.push(num)
        }
    }

    return listaFiltrada
}

export const calcularPromedio = (lista: number[]) => {
    let total = 0
    for (let num of lista){
        total += num
    }

    return total/lista.length
}

