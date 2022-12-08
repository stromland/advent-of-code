import { readDayInput } from '../../utils/read-day-input';
import { part1, part2 } from './day-8';

const testInput = readDayInput(2022, 8, 'TEST');

describe('day-8', () => {
  test('part1', () => {
    const answer = part1(testInput);
    expect(answer).toBe(21);
  });

  test('part2', () => {
    const answer = part2(testInput);
    expect(answer).toBe(8);
  });
});
