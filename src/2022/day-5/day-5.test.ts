import { readDayInput } from '../../utils/read-day-input';
import { part1, part2 } from './day-5';

const testInput = readDayInput(2022, 5, 'TEST');

describe('day-5', () => {
  test('part1', () => {
    const answer = part1(testInput);
    expect(answer).toBe('CMZ');
  });

  test('part2', () => {
    const answer = part2(testInput);
    expect(answer).toBe('MCD');
  });
});
