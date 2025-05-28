class TwoSum:
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
result = TwoSum.two_sum(nums1, target)
print("Índices:", result)  # Resultado esperado: [0, 1]
