class ValidSudoku {
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
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];

const resu = ValidSudoku.isValidSudoku(board);
console.log("¿Tablero válido?:", resu); // Resultado esperado: true
