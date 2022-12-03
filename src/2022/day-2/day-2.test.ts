import { readDayInput } from '../../utils/read-day-input';
import { part1, part2 } from './day-2';

const testInput = readDayInput(2022, 2, 'TEST');

describe('day-2', () => {
  test('part1', () => {
    const answer = part1(testInput);
    expect(answer).toBe(15);
  });

  test('part2', () => {
    const answer = part2(testInput);
    expect(answer).toBe(12);
  });
});
