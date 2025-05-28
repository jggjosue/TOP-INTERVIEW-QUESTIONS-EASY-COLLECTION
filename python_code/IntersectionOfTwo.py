class IntersectionOfTwo:
    @staticmethod
    def intersect(nums1, nums2):
        from collections import Counter

        freq = Counter(nums1)  # ② contar ocurrencias de nums1
        out = []  # ④ lista para almacenar la intersección

        # ⑤ recorrer nums2 y verificar intersección
        for num in nums2:
            if freq.get(num, 0) > 0:  # ⑥
                out.append(num)  # ⑦
                freq[num] -= 1  # ⑧

        return out  # ⑪

# Ejemplo de uso
nums1 = [1, 2, 2, 1]
nums2 = [2, 2]
result = IntersectionOfTwo.intersect(nums1, nums2)
print("Intersección:", result)  # Resultado esperado: [2, 2]
