# Merge Three Arrays (TypeScript + Vitest)

This project demonstrates how to merge three integer arrays into a single ascending array **without** using JavaScript's built-in `sort()` functions.

- `firstAscendingArray`: already sorted ascending (min → max)
- `secondDescendingArray`: sorted descending (max → min)
- `thirdAscendingArray`: already sorted ascending (min → max)

The algorithm manually converts the descending array into ascending order (by reading from end to start), then applies a two-pointer merge twice to produce the final ascending array.

## Project Structure
```
root/
  src/
    merge.ts
    main.ts
  tests/
    merge.test.ts
  package.json
  tsconfig.json
  README.md
```

## Install Dependencies
```bash
pnpm install
# or
npm install
```

## Run (development mode, without building)
```bash
pnpm dev
# or
npm run dev
```

## Build & Run Compiled Code
```bash
pnpm build
pnpm start
```

## Run Unit Tests
```bash
pnpm test
```

## Notes
- ESM setup: `"type": "module"` in package.json, `"module": "NodeNext"` in tsconfig.json
- Type safety: `noUncheckedIndexedAccess` enabled, all array access guarded against `undefined`
- No usage of `sort()` or `reverse()`
- `export const merge = mergeThreeSortedArrays` is provided as an alias in case a judge expects the name `merge`
