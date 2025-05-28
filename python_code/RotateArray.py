class RotateArray:
    @staticmethod
    def rotate(nums, k):
        n = len(nums)
        k %= n
        RotateArray.reverse(nums, 0, n - 1)  # ①
        RotateArray.reverse(nums, 0, k - 1)  # ②
        RotateArray.reverse(nums, k, n - 1)  # ③

    @staticmethod
    def reverse(arr, left, right):
        while left < right:
            arr[left], arr[right] = arr[right], arr[left]
            left += 1
            right -= 1

# Ejemplo de uso:
nums = [1, 2, 3, 4, 5, 6, 7]
k = 3
RotateArray.rotate(nums, k)
print("Array rotado:", nums)  # Resultado esperado: [5, 6, 7, 1, 2, 3, 4]
