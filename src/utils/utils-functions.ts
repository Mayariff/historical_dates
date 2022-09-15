export type coordsType = {
    x: number
    y: number
}

//окружность

export function findPointCoords(radius: number, rotationDegree: number) {

    const corner = Math.PI / 180 * (rotationDegree- 80)
    const x = radius + radius * Math.cos(corner)
    const y = radius + radius * Math.sin(corner)
    return {x, y}
}

export function getRadius(block: HTMLDivElement) {
    const rect = block.getBoundingClientRect();
    return rect.width / 2
}

export function findAllPointsCoords(pointsNumber: number, radius: number, degree: number): coordsType[] {
    const rotationDegree = 360 / pointsNumber
    const res = []
    let currentDegree = degree
    for (let i = 0; i < pointsNumber; i++) {
        res.push(findPointCoords(radius, currentDegree))
        currentDegree = currentDegree + rotationDegree
    }
    return res
}
