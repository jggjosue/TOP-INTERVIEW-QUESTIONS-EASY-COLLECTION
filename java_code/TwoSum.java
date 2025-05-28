package java_code;

import java.util.HashMap;
import java.util.Map;

public class TwoSum {
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> idx = new HashMap<>(); // ①
        for (int i = 0; i < nums.length; i++) { // ②
            int complement = target - nums[i]; // ③
            if (idx.containsKey(complement)) { // ④
                return new int[] { idx.get(complement), // ⑤
                        i }; // ⑥
            }
            idx.put(nums[i], i); // ⑦
        }
        throw new IllegalArgumentException("No solution"); // ⑧
    }

    public static void main(String[] args) {
        int[] nums1 = { 2, 7, 11, 15 };
        int target = 9;
        twoSum(nums1, target);
    }
}
