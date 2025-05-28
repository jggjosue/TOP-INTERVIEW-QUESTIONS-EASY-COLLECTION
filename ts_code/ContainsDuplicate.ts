class ContainsDuplicate {
    public static containsDuplicate(nums: number[]): boolean {
        const seen = new Set<number>(); // ①

        for (const num of nums) { // ②
            if (seen.has(num)) {    // ③
                return true;          // ④
            }
            seen.add(num);          // ⑤
        }

        return false; // ⑥
    }
}

// Ejemplo de uso:
const nums_: number[] = [1, 2, 3, 1];
const hasDuplicate = ContainsDuplicate.containsDuplicate(nums_);
console.log("¿Contiene duplicados?:", hasDuplicate); // Resultado esperado: true
