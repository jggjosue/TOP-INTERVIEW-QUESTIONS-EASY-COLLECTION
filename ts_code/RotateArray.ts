class RotateArray {
    public static rotate(nums: number[], k: number): void {
        const n = nums.length;
        k %= n;
        this.reverse(nums, 0, n - 1);  // ①
        this.reverse(nums, 0, k - 1);  // ②
        this.reverse(nums, k, n - 1);  // ③
    }

    private static reverse(arr: number[], left: number, right: number): void {
        while (left < right) {
            const tmp = arr[left];
            arr[left++] = arr[right];
            arr[right--] = tmp;
        }
    }
}

// Ejemplo de uso:
const nums: number[] = [1, 2, 3, 4, 5, 6, 7];
const k: number = 3;
RotateArray.rotate(nums, k);
console.log("Array rotado:", nums); // Resultado esperado: [5, 6, 7, 1, 2, 3, 4]
