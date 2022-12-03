import { sum } from '../../utils/collection';

function getElvesWithTotalCalories(input: string[]): Record<number, number> {
  return input.reduce((acc, next) => {
    const length = Object.keys(acc).length;
    if (length === 0 || next === '') {
      acc[length + 1] = Number(next);
    } else {
      acc[length] += Number(next);
    }
    return acc;
  }, {} as Record<number, number>);
}

export function part1(input: string[]): number {
  const group = getElvesWithTotalCalories(input);
  return Object.values(group).sort((a, b) => b - a)[0];
}

export function part2(input: string[]): number {
  const group = getElvesWithTotalCalories(input);

  const top = Object.values(group)
    .sort((a, b) => b - a)
    .slice(0, 3);

  return sum(top, (num) => num);
}
