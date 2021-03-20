import { sumar, multiplicar, restar, dividir } from '../maths.js'

describe('Calculos matematicos', () => {
    test('Prueba de suma', () => {
        expect(sumar(1,1)).toBe(2)
    })
    test('Multiplicar', () => {
        expect(multiplicar(2,2)).toBe(4)
    })
    test('Prueba de resta', () => {
        expect(restar(1,1)).toBe(0)
    })
    test('Dividir', () => {
        expect(dividir(2,2)).toBe(1)
    })
})