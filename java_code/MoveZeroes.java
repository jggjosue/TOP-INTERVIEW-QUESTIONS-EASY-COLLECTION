package java_code;

public class MoveZeroes {
    public static void moveZeroes(int[] nums) {
        // 2
        int lastNonZeroFoundAt = 0; // 3
        // 4
        for (int i = 0; i < nums.length; i++) { // 5
            if (nums[i] != 0) { // 6
                int temp = nums[lastNonZeroFoundAt]; // 7
                nums[lastNonZeroFoundAt] = nums[i]; // 8
                nums[i] = temp; // 9
                lastNonZeroFoundAt++; // 10
            } // 11
        } // 12
    }

    public static void main(String[] args) {
        int[] nums1 = { 0, 1, 0, 3, 12 };
        moveZeroes(nums1);
    }
}
