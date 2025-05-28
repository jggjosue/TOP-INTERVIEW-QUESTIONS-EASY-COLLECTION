class PlusOne:
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
result = PlusOne.plus_one(nums1)
print("Resultado:", result)  # Resultado esperado: [1, 2, 4]
