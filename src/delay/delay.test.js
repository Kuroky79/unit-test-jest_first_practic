const delay = require('./delay');

describe ('delay', ()=>{
    test('Значение', async ()=>{
        const sum = await delay(()=>10-5,1000); // Запись в переменную с ассинхронным результатом
        expect(sum).toBe(5);
    })
})
