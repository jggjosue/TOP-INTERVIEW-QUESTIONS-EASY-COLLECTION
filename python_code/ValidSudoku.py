class ValidSudoku:
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

result = ValidSudoku.is_valid_sudoku(board)
print("¿Tablero válido?:", result)  # Resultado esperado: True
