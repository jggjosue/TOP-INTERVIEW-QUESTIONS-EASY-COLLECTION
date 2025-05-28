package java_code;

public class RotateImage {
    public static void rotate(int[][] matrix) {
        int n = matrix.length; // 4

        // ----- Paso 1: Transponer -----
        for (int i = 0; i < n; i++) { // 5
            for (int j = i + 1; j < n; j++) { // 6
                int tmp = matrix[i][j]; // 7
                matrix[i][j] = matrix[j][i]; // 8
                matrix[j][i] = tmp; // 9
            } // 10
        } // 11

        // ----- Paso 2: Invertir cada fila -----
        for (int i = 0; i < n; i++) { // 12
            for (int j = 0; j < n / 2; j++) { // 13
                int tmp = matrix[i][j]; // 14
                matrix[i][j] = matrix[i][n - 1 - j]; // 15
                matrix[i][n - 1 - j] = tmp; // 16
            } // 17
        } // 18
    }

    public static void main(String[] args) {
        int[][] matrix = {
                { 1, 2, 3 },
                { 4, 5, 6 },
                { 7, 8, 9 }
        };

        rotate(matrix);
    }
}
