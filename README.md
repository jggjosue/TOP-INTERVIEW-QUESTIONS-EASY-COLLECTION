# TOP-INTERVIEW-QUESTIONS-EASY-COLLECTION

Magzin LLC

TOP INTERVIEW QUESTIONS EASY COLLECTION, FIRST EDITION

Visit our Website
https://www.joshuesito.com/es/books

Download the Code
https://github.com/jggjosue/TOP-INTERVIEW-QUESTIONS-EASY-COLLECTION


9798285469322 (ISBN)

CONTENTS
Introduction	6
1.1.	Remove Duplicates from Sorted Array	9
1.1.1.	Solution	11

Java
	public class Solution {
	    public static int removeDuplicates(int[] nums) {
	        // Edge case: if the array is empty or null, no unique elements
	        if (nums == null || nums.length == 0) {
	            return 0;
	        }
	
	        // Pointer 'i' will track the place to put the next unique element,
	        // while pointer 'j' scans through the array.
	        int i = 0;
	        
	        // Start from index 1 because index 0 is already “in place.”
	        for (int j = 1; j < nums.length; j++) {
	            // If we see a new (different) element, move 'i' forward and overwrite.
	            if (nums[j] != nums[i]) {
	                i++;
	                nums[i] = nums[j];
	            }
	        }
	
	        // 'i' is zero-based, so the length of unique elements is (i + 1).
	        return i + 1;
	    }
	
	        public static void main(String[] args) {
	          int[] s = {1,1,2};
	          removeDuplicates(s);
	        }
}

Typescript
class Solution {
  public static removeDuplicates(nums: number[]): number {
    // Edge case: if the array is empty or null, no unique elements
    if (!nums || nums.length === 0) {
      return 0;
    }

    // Pointer 'i' will track the place to put the next unique element,
    // while pointer 'j' scans through the array.
    let i = 0;

    // Start from index 1 because index 0 is already “in place.”
    for (let j = 1; j < nums.length; j++) {
      // If we see a new (different) element, move 'i' forward and overwrite.
      if (nums[j] !== nums[i]) {
        i++;
        nums[i] = nums[j];
      }
    }

    // 'i' is zero-based, so the length of unique elements is (i + 1).
    return i + 1;
  }
}

// Test case
const s: number[] = [1, 1, 2];
const length = Solution.removeDuplicates(s);
console.log("Length of unique elements:", length);
console.log("Array after removing duplicates:", s.slice(0, length));


Python
class Solution:
    @staticmethod
    def remove_duplicates(nums):
        # Edge case: if the array is empty or None, no unique elements
        if not nums:
            return 0

        # Pointer 'i' will track the place to put the next unique element,
        # While pointer 'j' scans through the array.
        i = 0

        # Start from index 1 because index 0 is already “in place.”
        for j in range(1, len(nums)):
            # If we see a new (different) element, move 'i' forward and overwrite.
            if nums[j] != nums[i]:
                i += 1
                nums[i] = nums[j]

        # 'i' is zero-based, so the length of unique elements is (i + 1).
        return i + 1

# Test case
s = [1, 1, 2]
length = Solution.remove_duplicates(s)
print("Length of unique elements:", length)
print("Array after removing duplicates:", s[:length])

1.2.	Best Time to Buy and Sell Stock II	31
1.2.1.	Solution	32

Java
	class Solution {
	    public int maxProfit(int[] prices) {
	        int profit = 0;                     // ① beneficio total acumulado
	        for (int i = 1; i < prices.length; i++) {     // ② recorremos desde el segundo día
	            if (prices[i] > prices[i - 1]) {          // ③ ¿subió el precio respecto al día anterior?
	                profit += prices[i] - prices[i - 1];  // ④ si subió, “compramos ayer y vendemos hoy”
	            }
	        }
	        return profit;                     // ⑤ devolvemos el beneficio máximo
	    }
}

Typescript
class Solution {
  public maxProfit(prices: number[]): number {
    let profit = 0; // ① beneficio total acumulado

    for (let i = 1; i < prices.length; i++) { // ② recorremos desde el segundo día
      if (prices[i] > prices[i - 1]) { // ③ ¿subió el precio respecto al día anterior?
        profit += prices[i] - prices[i - 1]; // ④ si subió, “compramos ayer y vendemos hoy”
      }
    }

    return profit; // ⑤ devolvemos el beneficio máximo
  }
}

// Ejemplo de uso:
const solution = new Solution();
const prices = [7, 1, 5, 3, 6, 4];
console.log("Máximo beneficio:", solution.maxProfit(prices));

Python
class Solution:
    def maxProfit(self, prices):
        profit = 0  # ① beneficio total acumulado

        for i in range(1, len(prices)):  # ② recorremos desde el segundo día
            if prices[i] > prices[i - 1]:  # ③ ¿subió el precio respecto al día anterior?
                profit += prices[i] - prices[i - 1]  # ④ si subió, “compramos ayer y vendemos hoy”

        return profit  # ⑤ devolvemos el beneficio máximo

# Ejemplo de uso:
solution = Solution()
prices = [7, 1, 5, 3, 6, 4]
print("Máximo beneficio:", solution.maxProfit(prices))

1.3.	Rotate Array	61
1.3.1.	Solution	62

Java
	public class Solution {
	    public static void rotate(int[] nums, int k) {
	        int n = nums.length;
	        k %= n;
	        reverse(nums, 0, n-1);   // ①
	        reverse(nums, 0, k-1);   // ②
	        reverse(nums, k, n-1);   // ③
	    }
	
	    private static void reverse(int[] a, int l, int r){
	        while(l < r){
	            int tmp = a[l]; a[l++] = a[r]; a[r--] = tmp;
	        }
	    }
	
	        public static void main(String[] args) {
	          int[] nums = {1,2,3,4,5,6,7};
	          int k = 3;
	          rotate(nums, k);
	        }
	}	

Typescript
class Solution {
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
Solution.rotate(nums, k);
console.log("Array rotado:", nums); // Resultado esperado: [5, 6, 7, 1, 2, 3, 4]

Python
class Solution:
    @staticmethod
    def rotate(nums, k):
        n = len(nums)
        k %= n
        Solution.reverse(nums, 0, n - 1)  # ①
        Solution.reverse(nums, 0, k - 1)  # ②
        Solution.reverse(nums, k, n - 1)  # ③

    @staticmethod
    def reverse(arr, left, right):
        while left < right:
            arr[left], arr[right] = arr[right], arr[left]
            left += 1
            right -= 1

# Ejemplo de uso:
nums = [1, 2, 3, 4, 5, 6, 7]
k = 3
Solution.rotate(nums, k)
print("Array rotado:", nums)  # Resultado esperado: [5, 6, 7, 1, 2, 3, 4]

1.4.	Contains Duplicate	140
1.4.1.	Solution	140

Java
	public class Solution {
	    public static boolean containsDuplicate(int[] nums) {
	        java.util.HashSet<Integer> seen = new java.util.HashSet<>();   // ①
	        for (int num : nums) {                                         // ②
	            if (seen.contains(num)) {                                  // ③
	                return true;                                           // ④
	            }
	            seen.add(num);                                             // ⑤
	        }
	        return false;                                                  // ⑥
	    }
	
	    public static void main(String[] args) {
	        int[] nums = {1,2,3,1};
	        containsDuplicate(nums);
	    }        
  }

Typescript
class Solution {
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
const nums: number[] = [1, 2, 3, 1];
const hasDuplicate = Solution.containsDuplicate(nums);
console.log("¿Contiene duplicados?:", hasDuplicate); // Resultado esperado: true

Python
class Solution:
    @staticmethod
    def contains_duplicate(nums):
        seen = set()  # ①

        for num in nums:  # ②
            if num in seen:  # ③
                return True  # ④
            seen.add(num)  # ⑤

        return False  # ⑥

# Ejemplo de uso:
nums = [1, 2, 3, 1]
has_duplicate = Solution.contains_duplicate(nums)
print("¿Contiene duplicados?:", has_duplicate)  # Resultado esperado: True

1.5.	Single Number	161
1.5.1.	Solution	161

Java
	public class Solution {
	    public static int singleNumber(int[] nums) {
	        int res = 0;                             // 2
	        for (int n : nums) {                     // 3
	            res ^= n;                            // 4
	        }
	        return res;                              // 5
	    }
	
	    public static void main(String[] args) {
	        int[] nums = {2,2,1};
	        singleNumber(nums);
	    }        
}

Typescript
class Solution {
  public static singleNumber(nums: number[]): number {
    let res = 0; // ②

    for (const n of nums) { // ③
      res ^= n; // ④
    }

    return res; // ⑤
  }
}

// Ejecución del código:
const nums: number[] = [2, 2, 1];
const result = Solution.singleNumber(nums);
console.log("Número único:", result); // Resultado esperado: 1

Python
class Solution:
    @staticmethod
    def single_number(nums):
        res = 0  # ②
        for n in nums:  # ③
            res ^= n  # ④
        return res  # ⑤

# Ejecución del código
nums = [2, 2, 1]
result = Solution.single_number(nums)
print("Número único:", result)  # Resultado esperado: 1

1.6.	Intersection of Two Arrays II	176
1.6.1.	Solution	177

Java
	import java.util.*;
	
	public class Solution {
	    public static int[] intersect(int[] nums1, int[] nums2) {
	        // 2
	        Map<Integer, Integer> freq = new HashMap<>();
	        // 3
	        for (int num : nums1) {
	            freq.put(num, freq.getOrDefault(num, 0) + 1);
	        }
	
	        // 4
	        List<Integer> out = new ArrayList<>();
	        // 5
	        for (int num : nums2) {
	            // 6
	            if (freq.getOrDefault(num, 0) > 0) {
	                out.add(num);          // 7
	                freq.put(num, freq.get(num) - 1); // 8
	            }
	        }
	        // 9
	        int[] ans = new int[out.size()];
	        // 10
	        for (int i = 0; i < out.size(); i++) ans[i] = out.get(i);
	        // 11
	        return ans;
	    }
	
	    public static void main(String[] args) {
	        int[] nums1 = {1,2,2,1};
	        int[] nums2 = {2,2};
	        intersect(nums1, nums2);
	    }        
  }

Typescript
class Solution {
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
const result = Solution.intersect(nums1, nums2);
console.log("Intersección:", result); // Resultado esperado: [2, 2]

Python
class Solution:
    @staticmethod
    def intersect(nums1, nums2):
        from collections import Counter

        freq = Counter(nums1)  # ② contar ocurrencias de nums1
        out = []  # ④ lista para almacenar la intersección

        # ⑤ recorrer nums2 y verificar intersección
        for num in nums2:
            if freq.get(num, 0) > 0:  # ⑥
                out.append(num)  # ⑦
                freq[num] -= 1  # ⑧

        return out  # ⑪

# Ejemplo de uso
nums1 = [1, 2, 2, 1]
nums2 = [2, 2]
result = Solution.intersect(nums1, nums2)
print("Intersección:", result)  # Resultado esperado: [2, 2]

1.7.	Plus One	213
1.7.1.	Solution	214

Java
	import java.util.*;
	
	public class Solution {
	    public static int[] plusOne(int[] digits) {
	        // 1. Recorremos el arreglo de derecha a izquierda
	        for (int i = digits.length - 1; i >= 0; i--) {
	            // 2. Si el dígito es menor que 9, solo sumamos 1 y terminamos
	            if (digits[i] < 9) {
	                digits[i]++;          // incrementamos
	                return digits;        // resultado listo
	            }
	            // 3. Si el dígito es 9, lo convertimos en 0 y seguimos el bucle
	            digits[i] = 0;            // carry a la siguiente posición
	        }
	        // 4. Si salimos del bucle, todos eran 9 → necesitamos arreglo nuevo
	        int[] res = new int[digits.length + 1];
	        res[0] = 1;                   // 1000...0
	        return res;
	    }
	
	    public static void main(String[] args) {
	        int[] nums1 = {1,2,3};
	        plusOne(nums1);
	    }        
 }

Typescript
class Solution {
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
const nums1: number[] = [1, 2, 3];
const result = Solution.plusOne(nums1);
console.log("Resultado:", result); // Resultado esperado: [1, 2, 4]

Python
class Solution:
    @staticmethod
    def plus_one(digits):
        # 1. Recorremos el arreglo de derecha a izquierda
        for i in range(len(digits) - 1, -1, -1):
            # 2. Si el dígito es menor que 9, solo sumamos 1 y terminamos
            if digits[i] < 9:
                digits[i] += 1  # incrementamos
                return digits   # resultado listo
            # 3. Si el dígito es 9, lo convertimos en 0 y seguimos el bucle
            digits[i] = 0       # carry a la siguiente posición

        # 4. Si salimos del bucle, todos eran 9 → necesitamos arreglo nuevo
        return [1] + [0] * len(digits)  # 1000...0

# Ejemplo de uso:
nums1 = [1, 2, 3]
result = Solution.plus_one(nums1)
print("Resultado:", result)  # Resultado esperado: [1, 2, 4]

1.8.	Move Zeroes	226
1.8.1.	Solution	226

Java
	import java.util.*;
	
	public class Solution {
	    public static void moveZeroes(int[] nums) {
	        // 2
	        int lastNonZeroFoundAt = 0;      // 3
	        // 4
	        for (int i = 0; i < nums.length; i++) {   // 5
	            if (nums[i] != 0) {                   // 6
	                int temp = nums[lastNonZeroFoundAt]; // 7
	                nums[lastNonZeroFoundAt] = nums[i];  // 8
	                nums[i] = temp;                      // 9
	                lastNonZeroFoundAt++;                // 10
	            }                                        // 11
	        }                                            // 12
	    }
	
	    public static void main(String[] args) {
	        int[] nums1 = {0,1,0,3,12};
	        moveZeroes (nums1);
	    }        
	}

Typescript
class Solution {
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
const nums1: number[] = [0, 1, 0, 3, 12];
Solution.moveZeroes(nums1);
console.log("Resultado:", nums1); // Resultado esperado: [1, 3, 12, 0, 0]

Python
class Solution:
    @staticmethod
    def move_zeroes(nums):
        last_non_zero_found_at = 0  # ③

        # ⑤
        for i in range(len(nums)):
            if nums[i] != 0:  # ⑥
                # ⑦, ⑧, ⑨ — intercambiar con el último no-cero encontrado
                nums[last_non_zero_found_at], nums[i] = nums[i], nums[last_non_zero_found_at]
                last_non_zero_found_at += 1  # ⑩

# Ejemplo de uso:
nums1 = [0, 1, 0, 3, 12]
Solution.move_zeroes(nums1)
print("Resultado:", nums1)  # Resultado esperado: [1, 3, 12, 0, 0]

1.9.	Two Sum	263
1.9.1.	Solution	264

Java
	import java.util.*;
	
	public class Solution {
	    public static int[] twoSum(int[] nums, int target) {
	        Map<Integer, Integer> idx = new HashMap<>();   // ①
	        for (int i = 0; i < nums.length; i++) {        // ②
	            int complement = target - nums[i];         // ③
	            if (idx.containsKey(complement)) {         // ④
	                return new int[]{idx.get(complement),  // ⑤
	                                 i};                   // ⑥
	            }
	            idx.put(nums[i], i);                       // ⑦
	        }
	        throw new IllegalArgumentException("No solution"); // ⑧
	    }
	
	    public static void main(String[] args) {
	        int[] nums1 = {2,7,11,15};
	        int target = 9;
	        twoSum(nums1, target);
	    }        
	}

Typescript
class Solution {
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
const nums1: number[] = [2, 7, 11, 15];
const target = 9;
const result = Solution.twoSum(nums1, target);
console.log("Índices:", result); // Resultado esperado: [0, 1]

Python
class Solution:
    @staticmethod
    def two_sum(nums, target):
        idx = {}  # ① diccionario para almacenar valores e índices

        for i in range(len(nums)):  # ②
            complement = target - nums[i]  # ③
            if complement in idx:  # ④
                return [idx[complement], i]  # ⑤ y ⑥
            idx[nums[i]] = i  # ⑦

        raise ValueError("No solution")  # ⑧

# Ejemplo de uso
nums1 = [2, 7, 11, 15]
target = 9
result = Solution.two_sum(nums1, target)
print("Índices:", result)  # Resultado esperado: [0, 1]

1.10.	Valid Sudoku	283
1.10.1.	Solution	285

Java
	import java.util.*;
	
	public class Solution {
	    public static boolean isValidSudoku(char[][] board) {
	        boolean[][] rows  = new boolean[9][9];                      // ②
	        boolean[][] cols  = new boolean[9][9];                      // ③
	        boolean[][] boxes = new boolean[9][9];                      // ④
	
	        for (int r = 0; r < 9; r++) {                               // ⑤
	            for (int c = 0; c < 9; c++) {                           // ⑥
	                char ch = board[r][c];                              // ⑦
	                if (ch == '.') continue;                            // ⑧
	
	                int idx = ch - '1';                                 // ⑨
	                int box = (r / 3) * 3 + c / 3;                      // ⑩
	
	                if (rows[r][idx] || cols[c][idx] || boxes[box][idx])// ⑪
	                    return false;                                   // ⑫
	
	                rows[r][idx]  = true;                               // ⑬
	                cols[c][idx]  = true;                               // ⑭
	                boxes[box][idx] = true;                             // ⑮
	            }
	        }
	        return true; 
	    }
	
	    public static void main(String[] args) {
	        char[][] board = {
	            {'5','3','.','.','7','.','.','.','.'},
	            {'6','.','.','1','9','5','.','.','.'},
	            {'.','9','8','.','.','.','.','6','.'},
	            {'8','.','.','.','6','.','.','.','3'},
	            {'4','.','.','8','.','3','.','.','1'},
	            {'7','.','.','.','2','.','.','.','6'},
	            {'.','6','.','.','.','.','2','8','.'},
	            {'.','.','.','4','1','9','.','.','5'},
	            {'.','.','.','.','8','.','.','7','9'}
	        };
	        
	        isValidSudoku(board);
	    }        
	}

Typescript
class Solution {
  public static isValidSudoku(board: string[][]): boolean {
    const rows: boolean[][] = Array.from({ length: 9 }, () => Array(9).fill(false));  // ②
    const cols: boolean[][] = Array.from({ length: 9 }, () => Array(9).fill(false));  // ③
    const boxes: boolean[][] = Array.from({ length: 9 }, () => Array(9).fill(false)); // ④

    for (let r = 0; r < 9; r++) {            // ⑤
      for (let c = 0; c < 9; c++) {          // ⑥
        const ch = board[r][c];              // ⑦
        if (ch === '.') continue;            // ⑧

        const idx = parseInt(ch) - 1;        // ⑨
        const box = Math.floor(r / 3) * 3 + Math.floor(c / 3); // ⑩

        if (rows[r][idx] || cols[c][idx] || boxes[box][idx]) {
          return false;                      // ⑫
        }

        rows[r][idx] = true;                 // ⑬
        cols[c][idx] = true;                 // ⑭
        boxes[box][idx] = true;              // ⑮
      }
    }

    return true;
  }
}

// Ejemplo de uso:
const board: string[][] = [
  ['5','3','.','.','7','.','.','.','.'],
  ['6','.','.','1','9','5','.','.','.'],
  ['.','9','8','.','.','.','.','6','.'],
  ['8','.','.','.','6','.','.','.','3'],
  ['4','.','.','8','.','3','.','.','1'],
  ['7','.','.','.','2','.','.','.','6'],
  ['.','6','.','.','.','.','2','8','.'],
  ['.','.','.','4','1','9','.','.','5'],
  ['.','.','.','.','8','.','.','7','9']
];

const result = Solution.isValidSudoku(board);
console.log("¿Tablero válido?:", result); // Resultado esperado: true

Python
class Solution:
    @staticmethod
    def is_valid_sudoku(board):
        rows = [[False] * 9 for _ in range(9)]   # ②
        cols = [[False] * 9 for _ in range(9)]   # ③
        boxes = [[False] * 9 for _ in range(9)]  # ④

        for r in range(9):                       # ⑤
            for c in range(9):                   # ⑥
                ch = board[r][c]                 # ⑦
                if ch == '.':                    # ⑧
                    continue

                idx = int(ch) - 1                # ⑨
                box = (r // 3) * 3 + c // 3       # ⑩

                if rows[r][idx] or cols[c][idx] or boxes[box][idx]:  # ⑪
                    return False                 # ⑫

                rows[r][idx] = True              # ⑬
                cols[c][idx] = True              # ⑭
                boxes[box][idx] = True           # ⑮

        return True

# Ejemplo de uso:
board = [
    ['5','3','.','.','7','.','.','.','.'],
    ['6','.','.','1','9','5','.','.','.'],
    ['.','9','8','.','.','.','.','6','.'],
    ['8','.','.','.','6','.','.','.','3'],
    ['4','.','.','8','.','3','.','.','1'],
    ['7','.','.','.','2','.','.','.','6'],
    ['.','6','.','.','.','.','2','8','.'],
    ['.','.','.','4','1','9','.','.','5'],
    ['.','.','.','.','8','.','.','7','9']
]

result = Solution.is_valid_sudoku(board)
print("¿Tablero válido?:", result)  # Resultado esperado: True

1.11.	Rotate Image	390
1.11.1.	Solution	391

Java
	import java.util.*;
	
	public class Solution {
	    public static void rotate(int[][] matrix) {
	        int n = matrix.length;                    // 4
	        
	        // ----- Paso 1: Transponer -----
	        for (int i = 0; i < n; i++) {             // 5
	            for (int j = i + 1; j < n; j++) {     // 6
	                int tmp = matrix[i][j];           // 7
	                matrix[i][j] = matrix[j][i];      // 8
	                matrix[j][i] = tmp;               // 9
	            }                                     // 10
	        }                                         // 11
	        
	        // ----- Paso 2: Invertir cada fila -----
	        for (int i = 0; i < n; i++) {             // 12
	            for (int j = 0; j < n / 2; j++) {     // 13
	                int tmp = matrix[i][j];           // 14
	                matrix[i][j] = matrix[i][n-1-j];  // 15
	                matrix[i][n-1-j] = tmp;           // 16
	            }                                     // 17
	        }                                         // 18
	    }
	
	    public static void main(String[] args) {
	        int[][] matrix = {
	            {1,2,3},
	            {4,5,6},
	            {7,8,9}
	        };
	        
	        rotate(matrix);
	    }        
	}

Typescript
class Solution {
  public static rotate(matrix: number[][]): void {
    const n = matrix.length; // ④

    // ----- Paso 1: Transponer -----
    for (let i = 0; i < n; i++) { // ⑤
      for (let j = i + 1; j < n; j++) { // ⑥
        const tmp = matrix[i][j]; // ⑦
        matrix[i][j] = matrix[j][i]; // ⑧
        matrix[j][i] = tmp; // ⑨
      }
    }

    // ----- Paso 2: Invertir cada fila -----
    for (let i = 0; i < n; i++) { // ⑫
      for (let j = 0; j < Math.floor(n / 2); j++) { // ⑬
        const tmp = matrix[i][j]; // ⑭
        matrix[i][j] = matrix[i][n - 1 - j]; // ⑮
        matrix[i][n - 1 - j] = tmp; // ⑯
      }
    }
  }
}

// Ejemplo de uso:
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

Solution.rotate(matrix);
console.log("Matriz rotada 90° en sentido horario:");
console.table(matrix); // Resultado esperado:
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]


Python
 class Solution:
    @staticmethod
    def rotate(matrix):
        n = len(matrix)  # ④

        # ----- Paso 1: Transponer -----
        for i in range(n):  # ⑤
            for j in range(i + 1, n):  # ⑥
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]  # ⑦-⑨

        # ----- Paso 2: Invertir cada fila -----
        for i in range(n):  # ⑫
            matrix[i].reverse()  # ⑬-⑯

# Ejemplo de uso:
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

Solution.rotate(matrix)
print("Matriz rotada 90° en sentido horario:")
for row in matrix:
    print(row)

# Resultado esperado:
# [7, 4, 1]
# [8, 5, 2]
# [9, 6, 3]

Technical Questions	471
1. Merge Two Sorted Arrays	472
2. Majority Element	472
3. Valid Anagram	472
4. Missing Number	472
5. Reverse String	473
6. Reverse Integer	473
7. Palindrome Number	473
8. First Unique Character in a String	474
9. Implement strStr()	474
10. Count and Say	474
11. Climbing Stairs	474
12. Maximum Subarray	475
13. Length of Last Word	475
14. Add Binary	475
15. Valid Parentheses	475
16. Merge Intervals	476
17. Group Anagrams	476
18. Top K Frequent Elements	476
19. Product of Array Except Self	477
20. Find Minimum in Rotated Sorted Array	477
21. Search in Rotated Sorted Array	477
22. Find Peak Element	477
23. Find the Duplicate Number	478
24. Longest Consecutive Sequence	478
25. Insert Interval	478
26. Set Matrix Zeroes	478
27. Spiral Matrix	479
28. Minimum Path Sum	479
29. Unique Paths	479
30. Coin Change	480
31. Maximum Product Subarray	480
32. Word Break	480
33. Minimum Window Substring	480
34. Longest Substring Without Repeating Characters	481
35. Longest Palindromic Substring	481
36. Zigzag Conversion	481
37. String to Integer (atoi)	481
38. Container With Most Water	482
39. Trapping Rain Water	482
40. Remove Nth Node From End of List	482
41. Merge Two Sorted Lists (Linked List)	483
42. Linked List Cycle	483
43. Remove Linked List Elements	483
44. Palindrome Linked List	483
45. Invert Binary Tree	484
46. Symmetric Tree	484
47. Binary Tree Level Order Traversal	484
48. Maximum Depth of Binary Tree	484
49. Balanced Binary Tree	485
50. Same Tree	485
About The Autor	486



