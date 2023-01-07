const validateValue = require('./ValidateValue')

test('Валидация значения', ()=>{
    expect(validateValue(50)).toBe(true)
})

describe('validateValue', ()=>{
    test('Валидация значения1', ()=>{
        expect(validateValue(0)).toBe(true)
    })
    test('Валидация значения2', ()=>{
        expect(validateValue(50)).toBe(true)
    })
    test('Валидация значения3', ()=>{
        expect(validateValue(100)).toBe(true)
    })
    test('Валидация значения4', ()=>{
        expect(validateValue(150)).toBe(false)
    })
    test('Валидация значения5', ()=>{
        expect(validateValue(-150)).toBe(false)
    })
})
