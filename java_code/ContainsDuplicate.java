package java_code;

public class ContainsDuplicate {
    public static boolean containsDuplicate(int[] nums) {
        java.util.HashSet<Integer> seen = new java.util.HashSet<>(); // ①
        for (int num : nums) { // ②
            if (seen.contains(num)) { // ③
                return true; // ④
            }
            seen.add(num); // ⑤
        }
        return false; // ⑥
    }

    public static void main(String[] args) {
        int[] nums = { 1, 2, 3, 1 };
        containsDuplicate(nums);
    }
}
