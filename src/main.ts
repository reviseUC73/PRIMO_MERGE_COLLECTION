import { mergeThreeSortedArrays } from "./merge.js";

const firstAscendingArray = [1, 3, 5, 7];
const secondDescendingArray = [10, 6, 4, 2, 0]; // descending
const thirdAscendingArray = [2, 2, 10];

const mergedResult = mergeThreeSortedArrays(
  firstAscendingArray,
  secondDescendingArray,
  thirdAscendingArray
);

console.log("Merged result (ascending):", mergedResult);