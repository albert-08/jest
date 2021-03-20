describe('Comparadores comunes', () => {
    const user = {
        name: "Frida",
        lastname: "Benitez"
    }
    const user2 = {
        name: "Frida",
        lastname: "Benitez"
    }

    test('Igualdad de elementos', () => {
        expect(user).toEqual(user2)
    })

    // test('No son exactamente iguales', () => {
    //     expect(user).not.toEqual(user2)
    // })
})