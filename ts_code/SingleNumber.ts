class SingleNumber {
    public static singleNumber(nums: number[]): number {
        let res = 0; // ②

        for (const n of nums) { // ③
            res ^= n; // ④
        }

        return res; // ⑤
    }
}

// Ejecución del código:
const number: number[] = [2, 2, 1];
const result = SingleNumber.singleNumber(number);
console.log("Número único:", result); // Resultado esperado: 1
