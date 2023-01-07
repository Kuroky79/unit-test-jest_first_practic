const mapArrToStrings = require('./mapArrToStrings')

test('Валидация значения', ()=>{
    expect(mapArrToStrings(50)).toBe(true)
})

describe('mapArrToStrings', ()=>{
    test('Валидация значения1', ()=>{
        expect(mapArrToStrings([1,2,3])).toEqual(["1","2","3"])
    })
    test('Валидация значения2', ()=>{
        expect(mapArrToStrings([10,2,35])).toEqual(['10','2','35'])
    })
    test('Валидация значения3', ()=>{
        expect(mapArrToStrings([1,'2',23])).toEqual(['1','23'])
    })

})
