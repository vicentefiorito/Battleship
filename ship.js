// Ship factory
const ship = () => {
    const length = (type) => {
        let length = 0
        if(type === 'Carrier') length = 5 
        else if(type === 'Battleship') length = 4
        else if(type === 'Cruiser' || type == 'Submarine') length = 3
        else if(type === 'Destroyer') length = 2
        else {
            return 'No ship was found with that type'
        }
        return length
    }

    return {length}
}

module.exports = ship