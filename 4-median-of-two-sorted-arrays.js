/**
 * Dificulty: Hard
 * Topics: Array, Binary Search, Divide and Conquer
 */

const findMedianSortedArrays = (nums1, nums2) => {
    const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    const mergedArrayLength = mergedArray.length;
    const isEven = mergedArrayLength % 2 === 0;
    const middleIndex = Math.floor(mergedArrayLength / 2);

    return isEven ? (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2 : mergedArray[middleIndex];
};
