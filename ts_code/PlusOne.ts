class PlusOne {
    public static plusOne(digits: number[]): number[] {
        // 1. Recorremos el arreglo de derecha a izquierda
        for (let i = digits.length - 1; i >= 0; i--) {
            // 2. Si el dígito es menor que 9, solo sumamos 1 y terminamos
            if (digits[i] < 9) {
                digits[i]++;        // incrementamos
                return digits;      // resultado listo
            }
            // 3. Si el dígito es 9, lo convertimos en 0 y seguimos el bucle
            digits[i] = 0;        // carry a la siguiente posición
        }

        // 4. Si salimos del bucle, todos eran 9 → necesitamos arreglo nuevo
        const res: number[] = new Array(digits.length + 1).fill(0);
        res[0] = 1; // 1000...0
        return res;
    }
}

// Ejemplo de uso:
const nums1_: number[] = [1, 2, 3];
const result_ = PlusOne.plusOne(nums1_);
console.log("Resultado:", result_); // Resultado esperado: [1, 2, 4]
