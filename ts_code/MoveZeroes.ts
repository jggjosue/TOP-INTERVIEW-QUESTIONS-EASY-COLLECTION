class MoveZeroes {
    public static moveZeroes(nums: number[]): void {
        let lastNonZeroFoundAt = 0; // ③

        // ⑤
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) { // ⑥
                const temp = nums[lastNonZeroFoundAt]; // ⑦
                nums[lastNonZeroFoundAt] = nums[i];    // ⑧
                nums[i] = temp;                        // ⑨
                lastNonZeroFoundAt++;                  // ⑩
            }
        }
    }
}

// Ejemplo de uso:
const nums_1: number[] = [0, 1, 0, 3, 12];
MoveZeroes.moveZeroes(nums_1);
console.log("Resultado:", nums_1); // Resultado esperado: [1, 3, 12, 0, 0]
