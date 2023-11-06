// Ship factory
const ship = (type) => {
    let shipLength = 0
    const length = () => {
        if(type === 'Carrier') shipLength = 5 
        else if(type === 'Battleship') shipLength = 4
        else if(type === 'Cruiser' || type == 'Submarine') shipLength = 3
        else if(type === 'Destroyer') shipLength = 2
        else {
            return 'No ship was found with that type'
        }
        return shipLength
    }

    const hit = (x) => {
        // keeps track of the current hits
        let hits = 0
        for(let i = 0; i < x; i++) {
            hits++
        }
        return hits
    }
    return {length,hit}
}

module.exports = ship