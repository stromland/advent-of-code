import { readDayInput } from '../../utils/read-day-input';
import { part1, part2 } from './day-9';

const puzzleInput = readDayInput(2022, 9, 'PUZZLE');

describe('day-9', () => {
  test('part1', () => {
    const answer = part1(puzzleInput);
    expect(answer).toBe(6067);
  });

  test('part2', () => {
    const answer = part2(puzzleInput);
    expect(answer).toBe(2471);
  });
});
