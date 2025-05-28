package java_code;

public class RemoveDuplicates {
	public static int removeDuplicates(int[] nums) {
		// Edge case: if the array is empty or null, no unique elements
		if (nums == null || nums.length == 0) {
			return 0;
		}

		// Pointer 'i' will track the place to put the next unique element,
		// while pointer 'j' scans through the array.
		int i = 0;

		// Start from index 1 because index 0 is already “in place.”
		for (int j = 1; j < nums.length; j++) {
			// If we see a new (different) element, move 'i' forward and overwrite.
			if (nums[j] != nums[i]) {
				i++;
				nums[i] = nums[j];
			}
		}

		// 'i' is zero-based, so the length of unique elements is (i + 1).
		return i + 1;
	}

	public static void main(String[] args) {
		int[] s = { 1, 1, 2 };
		removeDuplicates(s);
	}
}
