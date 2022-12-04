import { sum } from '../../utils/collection';

function containsRange(r1: string, r2: string): boolean {
  const [a1, a2] = r1.split('-').map(Number);
  const [b1, b2] = r2.split('-').map(Number);

  return a1 >= b1 && a1 <= b2 && a2 <= b2;
}

function containsAny(r1: string, r2: string): boolean {
  const [a1] = r1.split('-').map(Number);
  const [b1, b2] = r2.split('-').map(Number);

  return a1 >= b1 && a1 <= b2;
}

export function part1(input: string[]): number {
  return sum(input, (line) => {
    const [s1, s2] = line.split(',');
    return containsRange(s1, s2) ? 1 : containsRange(s2, s1) ? 1 : 0;
  });
}

export function part2(input: string[]): number {
  return sum(input, (line) => {
    const [s1, s2] = line.split(',');
    return containsAny(s1, s2) ? 1 : containsAny(s2, s1) ? 1 : 0;
  });
}
