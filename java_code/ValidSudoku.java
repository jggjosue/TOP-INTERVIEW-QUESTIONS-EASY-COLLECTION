package java_code;

public class ValidSudoku {
    public static boolean isValidSudoku(char[][] board) {
        boolean[][] rows = new boolean[9][9]; // ②
        boolean[][] cols = new boolean[9][9]; // ③
        boolean[][] boxes = new boolean[9][9]; // ④

        for (int r = 0; r < 9; r++) { // ⑤
            for (int c = 0; c < 9; c++) { // ⑥
                char ch = board[r][c]; // ⑦
                if (ch == '.')
                    continue; // ⑧

                int idx = ch - '1'; // ⑨
                int box = (r / 3) * 3 + c / 3; // ⑩

                if (rows[r][idx] || cols[c][idx] || boxes[box][idx])// ⑪
                    return false; // ⑫

                rows[r][idx] = true; // ⑬
                cols[c][idx] = true; // ⑭
                boxes[box][idx] = true; // ⑮
            }
        }
        return true;
    }

    public static void main(String[] args) {
        char[][] board = {
                { '5', '3', '.', '.', '7', '.', '.', '.', '.' },
                { '6', '.', '.', '1', '9', '5', '.', '.', '.' },
                { '.', '9', '8', '.', '.', '.', '.', '6', '.' },
                { '8', '.', '.', '.', '6', '.', '.', '.', '3' },
                { '4', '.', '.', '8', '.', '3', '.', '.', '1' },
                { '7', '.', '.', '.', '2', '.', '.', '.', '6' },
                { '.', '6', '.', '.', '.', '.', '2', '8', '.' },
                { '.', '.', '.', '4', '1', '9', '.', '.', '5' },
                { '.', '.', '.', '.', '8', '.', '.', '7', '9' }
        };

        isValidSudoku(board);
    }
}
