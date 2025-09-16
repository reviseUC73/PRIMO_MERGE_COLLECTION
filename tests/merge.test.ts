import { describe, it, expect } from "vitest";
import {
  mergeTwoAscendingArrays,
  convertDescendingToAscending,
  mergeThreeSortedArrays,
  merge,
} from "../src/merge.js";

describe("mergeTwoAscendingArrays", () => {
  it("merges two ascending arrays", () => {
    expect(mergeTwoAscendingArrays([1, 3, 5], [2, 4, 6]))
      .toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("handles duplicates and negatives", () => {
    expect(mergeTwoAscendingArrays([-3, -1, 0, 3], [-2, -2, 3, 5]))
      .toEqual([-3, -2, -2, -1, 0, 3, 3, 5]);
  });

  it("works with empty arrays", () => {
    expect(mergeTwoAscendingArrays([], [1, 2])).toEqual([1, 2]);
    expect(mergeTwoAscendingArrays([1, 2], [])).toEqual([1, 2]);
    expect(mergeTwoAscendingArrays([], [])).toEqual([]);
  });
});

describe("convertDescendingToAscending", () => {
  it("converts a descending array into ascending", () => {
    expect(convertDescendingToAscending([10, 6, 2, 0]))
      .toEqual([0, 2, 6, 10]);
  });

  it("handles empty array", () => {
    expect(convertDescendingToAscending([])).toEqual([]);
  });

  it("handles single element", () => {
    expect(convertDescendingToAscending([5])).toEqual([5]);
  });
});

describe("mergeThreeSortedArrays / merge alias", () => {
  it("merges three arrays into ascending order", () => {
    const first = [1, 3, 5];
    const second = [6, 4, 2]; // descending
    const third = [0, 7, 9];  // ascending
    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 9];
    expect(mergeThreeSortedArrays(first, second, third)).toEqual(expected);
    expect(merge(first, second, third)).toEqual(expected);
  });

  it("works with negatives and duplicates", () => {
    const first = [-5, -1, 0, 0, 3];
    const second = [10, 3, 3, -2, -4]; // descending
    const third = [-3, 3, 11];         // ascending
    const expected = [-5, -4, -3, -2, -1, 0, 0, 3, 3, 3, 3, 10, 11];
    expect(mergeThreeSortedArrays(first, second, third)).toEqual(expected);
  });

  it("works with single-element arrays", () => {
    expect(mergeThreeSortedArrays([1], [3, 2], [4])).toEqual([1, 2, 3, 4]);
    expect(mergeThreeSortedArrays([0], [], [0])).toEqual([0, 0]);
  });
});
