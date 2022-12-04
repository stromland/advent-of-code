import { readDayInput } from '../../utils/read-day-input';
import { part1, part2 } from './day-4';

const testInput = readDayInput(2022, 4, 'TEST');

describe('day-4', () => {
  test('part1', () => {
    const answer = part1(testInput);
    expect(answer).toBe(2);
  });

  test('part2', () => {
    const answer = part2(testInput);
    expect(answer).toBe(4);
  });
});
