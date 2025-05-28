package java_code;

public class SingleNumber {
    public static int singleNumber(int[] nums) {
        int res = 0; // 2
        for (int n : nums) { // 3
            res ^= n; // 4
        }
        return res; // 5
    }

    public static void main(String[] args) {
        int[] nums = { 2, 2, 1 };
        singleNumber(nums);
    }
}
