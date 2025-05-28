class RotateImage {
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

RotateImage.rotate(matrix);
console.log("Matriz rotada 90° en sentido horario:");
console.table(matrix); // Resultado esperado:
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]
