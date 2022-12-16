import { readDayInput } from '../../utils/read-day-input';
import { part1, part2 } from './day-10';

const testInput = readDayInput(2022, 10, 'PUZZLE');

describe('day-10', () => {
  test('part1', () => {
    const answer = part1(testInput);
    expect(answer).toBe(10760);
  });

  test('part2', () => {
    const answer = part2(testInput);
    const text = answer.map((it) => it.join('')).join('\n');
    expect(text).toMatchSnapshot();
  });
});
