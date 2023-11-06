import ship from "./ship";

test('Cruiser length should be 3',() => {
    expect(ship('Cruiser').length()).toBe(3)
})

test('No ship found',() => {
    expect(ship('Battle').length()).toBe('No ship was found with that type')
})

test('1 hit', () => {
    expect(ship('Cruiser').hit(1)).toBe(1)
})
test('2 hit', () => {
    expect(ship('Cruiser').hit(2)).toBe(2)
})