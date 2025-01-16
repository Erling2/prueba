import { filtraNumMayores } from "./ejercicio1"
import { calcularPromedio } from "./ejercicio1"
import { distanciaEntrepuntos } from "./ejercicio2"
import { punto } from "./ejercicio2"

const main = () => {
    //filtrar
    const numeros: number[] = [5,8,3,10,2,7]
    console.log(filtraNumMayores(numeros, 5))

    //promedio
    console.log(calcularPromedio(numeros))

    //distancia entre dos puntos
    const p1: punto = [1,2]
    const p2: punto = [3,4]

    distanciaEntrepuntos(p1,p2)
}
main()