import ship from "./ship";
let shipType = ship()

test('Cruiser length should be 3',() => {
    expect(shipType.length('Cruiser')).toBe(3)
})

test('No ship found',() => {
    expect(shipType.length('Battle')).toBe('No ship was found with that type')
})