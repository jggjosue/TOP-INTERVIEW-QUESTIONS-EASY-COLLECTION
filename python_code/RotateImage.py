class RotateImage:
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

RotateImage.rotate(matrix)
print("Matriz rotada 90° en sentido horario:")
for row in matrix:
    print(row)

# Resultado esperado:
# [7, 4, 1]
# [8, 5, 2]
# [9, 6, 3]
