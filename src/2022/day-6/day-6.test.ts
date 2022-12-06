import { readDayInput } from '../../utils/read-day-input';
import { part1, part2 } from './day-6';

const [a, b, c, d, e] = readDayInput(2022, 6, 'TEST').map((it) => [it]);

describe('day-6', () => {
  test('part1', () => {
    const a0 = part1(a);
    expect(a0).toBe(7);
    const a1 = part1(b);
    expect(a1).toBe(5);
    const a2 = part1(c);
    expect(a2).toBe(6);
    const a3 = part1(d);
    expect(a3).toBe(10);
    const a4 = part1(e);
    expect(a4).toBe(11);
  });

  test('part2', () => {
    const a0 = part2(a);
    expect(a0).toBe(19);
    const a1 = part2(b);
    expect(a1).toBe(23);
    const a2 = part2(c);
    expect(a2).toBe(23);
    const a3 = part2(d);
    expect(a3).toBe(29);
    const a4 = part2(e);
    expect(a4).toBe(26);
  });
});
