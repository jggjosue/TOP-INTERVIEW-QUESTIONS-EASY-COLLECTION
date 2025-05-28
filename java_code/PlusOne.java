package java_code;

public class PlusOne {
    public static int[] plusOne(int[] digits) {
        // 1. Recorremos el arreglo de derecha a izquierda
        for (int i = digits.length - 1; i >= 0; i--) {
            // 2. Si el dígito es menor que 9, solo sumamos 1 y terminamos
            if (digits[i] < 9) {
                digits[i]++; // incrementamos
                return digits; // resultado listo
            }
            // 3. Si el dígito es 9, lo convertimos en 0 y seguimos el bucle
            digits[i] = 0; // carry a la siguiente posición
        }
        // 4. Si salimos del bucle, todos eran 9 → necesitamos arreglo nuevo
        int[] res = new int[digits.length + 1];
        res[0] = 1; // 1000...0
        return res;
    }

    public static void main(String[] args) {
        int[] nums1 = { 1, 2, 3 };
        plusOne(nums1);
    }
}
