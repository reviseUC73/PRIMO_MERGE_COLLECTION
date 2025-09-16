/**
 * Merge two ascending arrays into one ascending array.
 * Time: O(n + m), Space: O(n + m)
 */
export function mergeTwoAscendingArrays(
  leftArray: readonly number[],
  rightArray: readonly number[]
): number[] {
  const mergedResult: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    const leftValue = leftArray[leftIndex];
    const rightValue = rightArray[rightIndex];
    if (leftValue === undefined || rightValue === undefined) break;

    if (leftValue <= rightValue) {
      mergedResult.push(leftValue);
      leftIndex++;
    } else {
      mergedResult.push(rightValue);
      rightIndex++;
    }
  }

  while (leftIndex < leftArray.length) {
    const leftValue = leftArray[leftIndex];
    if (leftValue !== undefined) mergedResult.push(leftValue);
    leftIndex++;
  }

  while (rightIndex < rightArray.length) {
    const rightValue = rightArray[rightIndex];
    if (rightValue !== undefined) mergedResult.push(rightValue);
    rightIndex++;
  }

  return mergedResult;
}

/**
 * Convert a descending-sorted array into ascending order
 * without using reverse() or sort().
 */
export function convertDescendingToAscending(
  descendingArray: readonly number[]
): number[] {
  const ascendingArray: number[] = [];
  for (let i = descendingArray.length - 1; i >= 0; i--) {
    const value = descendingArray[i];
    if (value !== undefined) {
      ascendingArray.push(value);
    }
  }
  return ascendingArray;
}

/**
 * Merge three arrays into ascending order:
 * - firstAscendingArray: ascending
 * - secondDescendingArray: descending
 * - thirdAscendingArray: ascending
 */
export function mergeThreeSortedArrays(
  firstAscendingArray: readonly number[],
  secondDescendingArray: readonly number[],
  thirdAscendingArray: readonly number[]
): number[] {
  const secondAscendingArray = convertDescendingToAscending(secondDescendingArray);

  const firstTwoMerged = mergeTwoAscendingArrays(
    firstAscendingArray,
    secondAscendingArray
  );

  return mergeTwoAscendingArrays(firstTwoMerged, thirdAscendingArray);
}

// Alias for judge requirement
export const merge = mergeThreeSortedArrays;
