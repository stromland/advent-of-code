import { countTill } from '../../utils/collection';

function getSight(x: number, y: number, matrix: number[][]): number[][] {
  const column = matrix.map((it) => it[y]);
  const row = matrix[x];

  const left = [...row].splice(0, y);
  const right = [...row].splice(y + 1, row.length);
  const top = [...column].splice(0, x);
  const bottom = [...column].splice(x + 1, column.length);

  return [left, right, top, bottom];
}

function traverse(
  input: string[],
  fn: (a: number[][], tree: number) => void
): void {
  const matrix = input.map((line) => Array.from(line).map(Number));

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const tree = matrix[row][col];
      const sight = getSight(row, col, matrix);
      fn(sight, tree);
    }
  }
}

export function part1(input: string[]): number {
  let visible = 0;
  traverse(input, ([left, right, top, bottom], tree) => {
    const treeIsLower = (it: number): boolean => it < tree;

    visible +=
      left.every(treeIsLower) ||
      right.every(treeIsLower) ||
      top.every(treeIsLower) ||
      bottom.every(treeIsLower)
        ? 1
        : 0;
  });

  return visible;
}

export function part2(input: string[]): number {
  let highest = 0;
  traverse(input, ([left, right, top, bottom], tree) => {
    const viewIsBlocked = (it: number): boolean => it >= tree;

    const a = countTill(left.reverse(), viewIsBlocked);
    const b = countTill(right, viewIsBlocked);
    const c = countTill(top.reverse(), viewIsBlocked);
    const d = countTill(bottom, viewIsBlocked);

    const next = a * b * c * d;
    if (next > highest) {
      highest = next;
    }
  });

  return highest;
}
