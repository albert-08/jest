import { callbackHell } from '../callbacks'

describe('Probando un Callback', () => {
    test('Callback', done => {
        function otherCallback(data) {
            expect(data).toBe('Hola mundo')
            done()
        }
        callbackHell(otherCallback)
    })
})