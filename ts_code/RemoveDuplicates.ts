class RemoveDuplicates {
    public static removeDuplicates(nums: number[]): number {
        // Edge case: if the array is empty or null, no unique elements
        if (!nums || nums.length === 0) {
            return 0;
        }

        // Pointer 'i' will track the place to put the next unique element,
        // while pointer 'j' scans through the array.
        let i = 0;

        // Start from index 1 because index 0 is already “in place.”
        for (let j = 1; j < nums.length; j++) {
            // If we see a new (different) element, move 'i' forward and overwrite.
            if (nums[j] !== nums[i]) {
                i++;
                nums[i] = nums[j];
            }
        }

        // 'i' is zero-based, so the length of unique elements is (i + 1).
        return i + 1;
    }
}

// Test case
const s: number[] = [1, 1, 2];
const length_ = RemoveDuplicates.removeDuplicates(s);
console.log("Length of unique elements:", length_);
console.log("Array after removing duplicates:", s.slice(0, length_));
