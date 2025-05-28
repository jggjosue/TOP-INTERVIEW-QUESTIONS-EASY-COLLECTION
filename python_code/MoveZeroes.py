class MoveZeroes:
    @staticmethod
    def move_zeroes(nums):
        last_non_zero_found_at = 0  # ③

        # ⑤
        for i in range(len(nums)):
            if nums[i] != 0:  # ⑥
                # ⑦, ⑧, ⑨ — intercambiar con el último no-cero encontrado
                nums[last_non_zero_found_at], nums[i] = nums[i], nums[last_non_zero_found_at]
                last_non_zero_found_at += 1  # ⑩

# Ejemplo de uso:
nums1 = [0, 1, 0, 3, 12]
MoveZeroes.move_zeroes(nums1)
print("Resultado:", nums1)  # Resultado esperado: [1, 3, 12, 0, 0]
