class IntersectionOfTwo {
    public static intersect(nums1: number[], nums2: number[]): number[] {
        const freq: Map<number, number> = new Map(); // ②

        // ③
        for (const num of nums1) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        const out: number[] = []; // ④

        // ⑤
        for (const num of nums2) {
            if ((freq.get(num) || 0) > 0) { // ⑥
                out.push(num); // ⑦
                freq.set(num, freq.get(num)! - 1); // ⑧
            }
        }

        return out; // ⑪
    }
}

// Ejemplo de uso:
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
const results = IntersectionOfTwo.intersect(nums1, nums2);
console.log("Intersección:", results); // Resultado esperado: [2, 2]
