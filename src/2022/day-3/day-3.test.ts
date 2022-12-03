import { readDayInput } from '../../utils/read-day-input';
import { part1, part2 } from './day-3';

const testInput = readDayInput(2022, 3, 'TEST');

describe('day-3', () => {
  test('part1', () => {
    const answer = part1(testInput);
    expect(answer).toBe(157);
  });

  test('part2', () => {
    const answer = part2(testInput);
    expect(answer).toBe(70);
  });
});
