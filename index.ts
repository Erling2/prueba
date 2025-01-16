import { filtraNumMayores } from "./ejercicio1"
import { calcularPromedio } from "./ejercicio1"

const main = () => {
    //filtrar
    const numeros: number[] = [5,8,3,10,2,7]
    console.log(filtraNumMayores(numeros, 5))

    //promedio
    console.log(calcularPromedio(numeros))
}

main()