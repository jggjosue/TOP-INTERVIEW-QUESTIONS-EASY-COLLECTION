class TwoSum {
    public static twoSum(nums: number[], target: number): number[] {
        const idx: Map<number, number> = new Map(); // ①

        for (let i = 0; i < nums.length; i++) { // ②
            const complement = target - nums[i];  // ③
            if (idx.has(complement)) {           // ④
                return [idx.get(complement)!, i];  // ⑤ y ⑥
            }
            idx.set(nums[i], i);                 // ⑦
        }

        throw new Error("No solution"); // ⑧
    }
}

// Ejemplo de uso:
const num: number[] = [2, 7, 11, 15];
const target = 9;
const resul = TwoSum.twoSum(num, target);
console.log("Índices:", resul); // Resultado esperado: [0, 1]
