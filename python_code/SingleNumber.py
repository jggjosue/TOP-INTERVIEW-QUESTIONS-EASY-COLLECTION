class SingleNumber:
    @staticmethod
    def single_number(nums):
        res = 0  # ②
        for n in nums:  # ③
            res ^= n  # ④
        return res  # ⑤

# Ejecución del código
nums = [2, 2, 1]
result = SingleNumber.single_number(nums)
print("Número único:", result)  # Resultado esperado: 1
