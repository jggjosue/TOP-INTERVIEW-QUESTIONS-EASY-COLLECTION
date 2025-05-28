package java_code;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class IntersectionOfTwo {
    public static int[] intersect(int[] nums1, int[] nums2) {
        // 2
        Map<Integer, Integer> freq = new HashMap<>();
        // 3
        for (int num : nums1) {
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        }

        // 4
        List<Integer> out = new ArrayList<>();
        // 5
        for (int num : nums2) {
            // 6
            if (freq.getOrDefault(num, 0) > 0) {
                out.add(num); // 7
                freq.put(num, freq.get(num) - 1); // 8
            }
        }
        // 9
        int[] ans = new int[out.size()];
        // 10
        for (int i = 0; i < out.size(); i++)
            ans[i] = out.get(i);
        // 11
        return ans;
    }

    public static void main(String[] args) {
        int[] nums1 = { 1, 2, 2, 1 };
        int[] nums2 = { 2, 2 };
        intersect(nums1, nums2);
    }
}
