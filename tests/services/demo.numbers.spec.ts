describe('Operacion suma', () => {
    const suma = (a: unknown, b: unknown) => Number(a) + Number(b);

    it('suma de dos numeros enteros', () => {
        const n1 = 6;
        const n2 = 3;

        const resultado = suma(n1, n2);

        expect(resultado).toBe(9);
    });

    it('suma de dos numeros flotantes', () => {
        const n1 = 6.3;
        const n2 = 3.1;

        const resultado = suma(n1, n2);
        expect(resultado).toBe(9.4);
    });
});
