class ContainsDuplicate:
    @staticmethod
    def contains_duplicate(nums):
        seen = set()  # ①

        for num in nums:  # ②
            if num in seen:  # ③
                return True  # ④
            seen.add(num)  # ⑤

        return False  # ⑥

# Ejemplo de uso:
nums = [1, 2, 3, 1]
has_duplicate = ContainsDuplicate.contains_duplicate(nums)
print("¿Contiene duplicados?:", has_duplicate)  # Resultado esperado: True
