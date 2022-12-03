import { readDayInput } from '../../utils/read-day-input';
import { part1, part2 } from './day-1';

const testInput = readDayInput(2022, 1, 'TEST');

describe('day-1', () => {
  test('part1', () => {
    const answer = part1(testInput);
    expect(answer).toBe(24000);
  });

  test('part2', () => {
    const answer = part2(testInput);
    expect(answer).toBe(45000);
  });
});
