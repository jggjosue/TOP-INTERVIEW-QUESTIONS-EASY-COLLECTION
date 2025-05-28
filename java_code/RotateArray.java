package java_code;

public class RotateArray {
    public static void rotate(int[] nums, int k) {
        int n = nums.length;
        k %= n;
        reverse(nums, 0, n - 1); // ①
        reverse(nums, 0, k - 1); // ②
        reverse(nums, k, n - 1); // ③
    }

    private static void reverse(int[] a, int l, int r) {
        while (l < r) {
            int tmp = a[l];
            a[l++] = a[r];
            a[r--] = tmp;
        }
    }

    public static void main(String[] args) {
        int[] nums = { 1, 2, 3, 4, 5, 6, 7 };
        int k = 3;
        rotate(nums, k);
    }
}
