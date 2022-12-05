import { chunk } from '../../utils/collection';

function readCrateStacks(input: string[]): Record<string, string[]> {
  return input
    .filter((line) => line.includes('['))
    .map((line) => chunk(line, 4))
    .reduceRight((crateStacks, chunks) => {
      chunks.forEach((it, index) => {
        const stack = `${index + 1}`;
        const crate = it[1]; // ['[','X',']',' ']
        if (crate.trim().length === 0) {
          return;
        }
        if (!crateStacks[stack]) {
          crateStacks[stack] = [crate];
        } else {
          crateStacks[stack].push(crate);
        }
      });

      return crateStacks;
    }, {} as Record<string, string[]>);
}

type Movement = [number, string, string];

function readMovements(input: string[]): Movement[] {
  return input
    .filter((it) => it.startsWith('move'))
    .map((line) =>
      line
        .split(' ')
        .map(Number)
        .filter((it) => !Number.isNaN(it))
    )
    .map(([amount, from, to]) => [amount, String(from), String(to)]);
}

function runCrateMover9000(
  crates: Record<string, string[]>,
  movements: Movement[]
): Record<string, string[]> {
  const arrangedCrates = { ...crates };

  movements.forEach(([amount, from, to]) => {
    for (let i = 0; i < amount; i++) {
      const crate = arrangedCrates[from].pop();
      if (crate !== undefined) {
        arrangedCrates[to].push(crate);
      }
    }
  });

  return arrangedCrates;
}

function runCrateMover9001(
  crates: Record<string, string[]>,
  movements: Movement[]
): Record<string, string[]> {
  const arrangedStacks = { ...crates };

  movements.forEach(([amount, from, to]) => {
    const stackSize = arrangedStacks[from].length;
    const topCrates = arrangedStacks[from].splice(stackSize - amount, amount);
    arrangedStacks[to].push(...topCrates);
  });

  return arrangedStacks;
}

export function part1(input: string[]): string {
  const crates = readCrateStacks(input);
  const movments = readMovements(input);
  const result = runCrateMover9000(crates, movments);
  return Object.values(result)
    .map((it) => it.pop())
    .join('');
}

export function part2(input: string[]): string {
  const crates = readCrateStacks(input);
  const movments = readMovements(input);
  const result = runCrateMover9001(crates, movments);
  return Object.values(result)
    .map((it) => it.pop())
    .join('');
}
