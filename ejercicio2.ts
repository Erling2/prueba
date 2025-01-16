export type punto = [number, number]

export const distanciaEntrepuntos = (p1: punto, p2: punto) => {
    const distancia = Math.sqrt( (Math.pow((p1[1] - p2[1]),2)) + (Math.pow((p1[0] - p2[0]),2)) )

    return distancia
}

export const moverPunto = (p: punto, dx: number, dy: number) => {
    const nuevoPunto: punto = [p[0], p[1]]
    nuevoPunto [0] += dx
    nuevoPunto [1] += dy

    return nuevoPunto
}