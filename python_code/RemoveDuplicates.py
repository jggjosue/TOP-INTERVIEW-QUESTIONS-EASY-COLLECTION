class RemoveDuplicates:
    @staticmethod
    def remove_duplicates(nums):
        # Edge case: if the array is empty or None, no unique elements
        if not nums:
            return 0

        # Pointer 'i' will track the place to put the next unique element,
        # While pointer 'j' scans through the array.
        i = 0

        # Start from index 1 because index 0 is already “in place.”
        for j in range(1, len(nums)):
            # If we see a new (different) element, move 'i' forward and overwrite.
            if nums[j] != nums[i]:
                i += 1
                nums[i] = nums[j]

        # 'i' is zero-based, so the length of unique elements is (i + 1).
        return i + 1

# Test case
s = [1, 1, 2]
length_ = RemoveDuplicates.remove_duplicates(s)
print("Length of unique elements:", length_)
print("Array after removing duplicates:", s[:length_])
