import { readDayInput } from '../../utils/read-day-input';
import { part1, part2 } from './day-7';

const testInput = readDayInput(2022, 7, 'TEST');

describe('day-7', () => {
  test('part1', () => {
    const answer = part1(testInput);
    expect(answer).toBe(95437);
  });

  test('part2', () => {
    const answer = part2(testInput);
    expect(answer).toBe(24933642);
  });
});
